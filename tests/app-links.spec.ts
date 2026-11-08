import { expect, test } from "@playwright/test";
import {
  appLinkFiles,
  appSiteAssociationBody,
  assetLinksBody,
  configFromEnv,
  type AppLinksConfig,
} from "../scripts/app-links.ts";

const pairs = (byte: string) => Array.from({ length: 32 }, () => byte).join(":");
const FP_A = pairs("AB");
const FP_B = pairs("CD");
const FP_C = pairs("EF");
const FP_D = pairs("12");

const empty: AppLinksConfig = {
  parentAppId: "com.codexng.xvs.parent",
  studentAppId: "com.codexng.xvs.student",
  parentSha256: [],
  studentSha256: [],
  appleTeamId: "",
};

test.describe("nothing configured", () => {
  test("emits no file for an empty config", () => {
    expect(assetLinksBody(empty)).toBeNull();
    expect(appSiteAssociationBody(empty)).toBeNull();
    expect(appLinkFiles(empty)).toEqual({});
  });

  test("emits no file for an empty environment", () => {
    expect(appLinkFiles(configFromEnv({}))).toEqual({});
    expect(
      appLinkFiles(
        configFromEnv({
          APP_LINK_ANDROID_PARENT_SHA256: " , ",
          APP_LINK_ANDROID_STUDENT_SHA256: "",
          APP_LINK_APPLE_TEAM_ID: "  ",
        }),
      ),
    ).toEqual({});
  });
});

test.describe("assetlinks.json", () => {
  test("has a statement for the parent app only when only it has fingerprints", () => {
    const body = JSON.parse(assetLinksBody({ ...empty, parentSha256: [FP_A] })!);
    expect(body).toEqual([
      {
        relation: [
          "delegate_permission/common.handle_all_urls",
          "delegate_permission/common.get_login_creds",
        ],
        target: {
          namespace: "android_app",
          package_name: "com.codexng.xvs.parent",
          sha256_cert_fingerprints: [FP_A],
        },
      },
    ]);
  });

  test("has a statement per app with both fingerprints each", () => {
    const body = JSON.parse(
      assetLinksBody({
        ...empty,
        parentSha256: [FP_A, FP_B],
        studentSha256: [FP_C, FP_D],
      })!,
    );
    expect(body).toHaveLength(2);
    expect(body[0].target.package_name).toBe("com.codexng.xvs.parent");
    expect(body[0].target.sha256_cert_fingerprints).toEqual([FP_A, FP_B]);
    expect(body[1].target.package_name).toBe("com.codexng.xvs.student");
    expect(body[1].target.sha256_cert_fingerprints).toEqual([FP_C, FP_D]);
  });

  test("normalises a lowercase fingerprint to uppercase", () => {
    const body = JSON.parse(assetLinksBody({ ...empty, parentSha256: [FP_A.toLowerCase()] })!);
    expect(body[0].target.sha256_cert_fingerprints).toEqual([FP_A]);
  });

  test("lists a repeated fingerprint once", () => {
    const body = JSON.parse(assetLinksBody({ ...empty, parentSha256: [FP_A, FP_A.toLowerCase()] })!);
    expect(body[0].target.sha256_cert_fingerprints).toEqual([FP_A]);
  });

  test("honours custom app ids", () => {
    const body = JSON.parse(
      assetLinksBody({ ...empty, parentAppId: "ng.example.parent", parentSha256: [FP_A] })!,
    );
    expect(body[0].target.package_name).toBe("ng.example.parent");
  });

  test("reads comma-separated fingerprints from the environment", () => {
    const config = configFromEnv({
      APP_LINK_ANDROID_PARENT_SHA256: ` ${FP_A.toLowerCase()} , ${FP_B} `,
    });
    const body = JSON.parse(assetLinksBody(config)!);
    expect(body[0].target.sha256_cert_fingerprints).toEqual([FP_A, FP_B]);
  });

  for (const [label, fingerprint] of [
    ["too few pairs", pairs("AB").slice(3)],
    ["non-hex digits", pairs("ZZ")],
    ["no colons", "AB".repeat(32)],
    ["a trailing colon", `${FP_A}:`],
  ]) {
    test(`rejects a fingerprint with ${label}`, () => {
      expect(() => assetLinksBody({ ...empty, parentSha256: [fingerprint] })).toThrow(
        /APP_LINK_ANDROID_PARENT_SHA256/,
      );
    });
  }
});

test.describe("apple-app-site-association", () => {
  test("names both apps with exact app ids and paths", () => {
    const body = JSON.parse(appSiteAssociationBody({ ...empty, appleTeamId: "ABCDE12345" })!);
    expect(body).toEqual({
      applinks: {
        details: [
          {
            appIDs: ["ABCDE12345.com.codexng.xvs.parent"],
            components: [{ "/": "/parent/*" }],
          },
          {
            appIDs: ["ABCDE12345.com.codexng.xvs.student"],
            components: [{ "/": "/student/*" }],
          },
        ],
      },
      webcredentials: {
        apps: ["ABCDE12345.com.codexng.xvs.parent", "ABCDE12345.com.codexng.xvs.student"],
      },
    });
  });

  test("is independent of the Android fingerprints", () => {
    const files = appLinkFiles({ ...empty, appleTeamId: "ABCDE12345" });
    expect(Object.keys(files)).toEqual([".well-known/apple-app-site-association"]);
  });

  for (const teamId of ["abcde12345", "ABCDE1234", "ABCDE123456", "ABCDE-2345"]) {
    test(`rejects the Team ID ${teamId}`, () => {
      expect(() => appSiteAssociationBody({ ...empty, appleTeamId: teamId })).toThrow(
        /APP_LINK_APPLE_TEAM_ID/,
      );
    });
  }
});

test.describe("app ids", () => {
  for (const appId of ["parent", "com..parent", "1com.parent", "com.codexng.xvs.parent!", ".com.parent"]) {
    test(`rejects the app id ${appId}`, () => {
      expect(() => assetLinksBody({ ...empty, parentAppId: appId })).toThrow(
        /APP_LINK_PARENT_APP_ID/,
      );
      expect(() => appSiteAssociationBody({ ...empty, studentAppId: appId })).toThrow(
        /APP_LINK_STUDENT_APP_ID/,
      );
    });
  }

  test("is rejected even when nothing else is configured", () => {
    expect(() =>
      appLinkFiles(configFromEnv({ APP_LINK_PARENT_APP_ID: "not-an-id" })),
    ).toThrow(/APP_LINK_PARENT_APP_ID/);
  });
});

test.describe("appLinkFiles", () => {
  test("emits both files under .well-known when everything is set", () => {
    const files = appLinkFiles({
      ...empty,
      parentSha256: [FP_A],
      studentSha256: [FP_C],
      appleTeamId: "ABCDE12345",
    });
    expect(Object.keys(files).sort()).toEqual([
      ".well-known/apple-app-site-association",
      ".well-known/assetlinks.json",
    ]);
  });
});
