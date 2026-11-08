# App links: the files that let XVS links open in the store apps

XVS Parent (`com.codexng.xvs.parent`) and XVS Student (`com.codexng.xvs.student`)
claim every school address, `*.xvs.codexng.com`. Before a phone opens such a link
in the app instead of the browser, Android and iPhone fetch two files from the
bare host `xvs.codexng.com`, which is this site:

| File | Read by | Content type |
| --- | --- | --- |
| `/.well-known/assetlinks.json` | Android (App Links) | `application/json` |
| `/.well-known/apple-app-site-association` (no extension) | iPhone (Universal Links) | `application/json`, no redirects |

school-fe serves the same files on each school address. Both sites build them
with the same code (`scripts/app-links.ts`, a copy of school-fe's), so they say
the same thing. school-fe's `docs/app-links.md` has the full background.

## How the files are produced

`vite.config.ts` writes them into `dist/.well-known/` during `npm run build`,
from the environment variables below. Nothing is committed and the dev server
does not serve them.

- With no variables set, no file is published and the site is unchanged.
- `assetlinks.json` appears once either Android app has a fingerprint.
- `apple-app-site-association` appears once the Team ID is set.
- A malformed value fails the build with a message naming the variable.

| Variable | Meaning | Where it comes from |
| --- | --- | --- |
| `APP_LINK_ANDROID_PARENT_SHA256` | SHA-256 certificate fingerprints of XVS Parent, comma-separated | Play Console, the app, Setup, App signing: the app signing key and the upload key |
| `APP_LINK_ANDROID_STUDENT_SHA256` | The same for XVS Student | The same, for the student app |
| `APP_LINK_APPLE_TEAM_ID` | Code X Limited's Apple Team ID | Apple Developer, Membership details |
| `APP_LINK_PARENT_APP_ID` | Optional. Defaults to `com.codexng.xvs.parent` | |
| `APP_LINK_STUDENT_APP_ID` | Optional. Defaults to `com.codexng.xvs.student` | |

Set the same values on school-fe's Render services, so every address agrees.

## Render settings

1. Set the variables in the static site's Environment tab, then redeploy.
2. Headers: add the path `/.well-known/apple-app-site-association` with
   `Content-Type: application/json`. Without it the file has no type an iPhone
   accepts.
3. The rewrite rules in the README need no change: Render serves a file that
   exists before it applies a rewrite.

## Checking after a deploy

```sh
curl -sI https://xvs.codexng.com/.well-known/apple-app-site-association
curl -s  https://xvs.codexng.com/.well-known/assetlinks.json
```

Each should answer `200` with `content-type: application/json` and a JSON body,
never a redirect or the site's 404 page. Google's checker for Android:

```
https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://xvs.codexng.com&relation=delegate_permission/common.handle_all_urls
```

Phones cache these files, so a change can take hours (Android) or days (iPhone)
to reach them.
