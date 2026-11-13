import "./legal.css";

const PRIVACY_EMAIL = "privacy@codexng.com";

/** The lawful-basis table in section 3: each purpose beside the basis it rests on. */
const BASES: [purpose: string, basis: string][] = [
  [
    "Running the school's records, classes, results, fees and messages",
    "The school's own basis (its contract with you, its legal duties as a school, or your consent); we act on its instructions",
  ],
  ["Keeping financial records for 6 years", "Legal obligation"],
  [
    "Keeping accounts secure: sign-in checks, lockouts, two-step sign-in, investigating misuse",
    "Legitimate interests in protecting you and the schools",
  ],
  ["Fixing faults from error reports", "Legitimate interests"],
  [
    "Notifications on your phone or browser",
    "Your consent, which you can turn off at any time in your profile",
  ],
];

function PrivacyMail() {
  return <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>;
}

/**
 * The text of the XVS privacy policy, sections 1 to 12, shown at /privacy.
 *
 * It renders inside LegalPage's own heading and sits in a `.legal-doc` block so
 * the headings, lists and the section 3 table pick up the shared legal styles.
 */
export default function PrivacyPolicy() {
  return (
    <div className="legal-doc">
      <h2>1. Who we are</h2>
      <p>
        XVS is a school management system made by Code X Limited, 21 Road, S Close, Festac, Lagos, Nigeria (&quot;Code
        X&quot;, &quot;we&quot;). Schools use XVS to run their records, classes, results, fees, procurement and
        communication, and their staff, pupils and parents use it through the XVS apps.
      </p>
      <p>
        Your school is responsible for your school records. When a school uses XVS, the school decides what it records
        about its pupils, parents and staff and why; it is the data controller under the Nigeria Data Protection Act
        2023. Code X processes those records for the school, only on its instructions, under a written agreement.
        Questions about what your school records, or requests to see, correct or delete it, go to your school first.
      </p>
      <p>
        Code X is responsible for the accounts of its own staff, and for the sign-in and security records of everyone
        who uses XVS.
      </p>
      <p>
        Our Data Protection Officer is Chidera Ohanenye-Ohiaekpete, at <PrivacyMail />.
      </p>

      <h2>2. What we hold</h2>
      <ul>
        <li>
          Pupils: name, admission number, date of birth, gender, nationality, state of origin, contact details, photo,
          class and attendance, results and report cards, documents the school uploads, and medical details the school
          records for care at school (blood group, allergies, conditions, emergency contact).
        </li>
        <li>
          Parents and guardians: name, contact details, address, occupation, photo, relationship to the child, and fee
          and payment records.
        </li>
        <li>
          School staff: name, contact details, date of birth, photo, state of origin and local government area,
          address, job and employment history, qualifications and documents, leave, and for payroll: pay, tax ID,
          pension PIN and bank account.
        </li>
        <li>
          Everyone who signs in: your email or ID, your password (stored only as a one-way scramble that cannot be read
          back), your authenticator set-up if you use two-step sign-in, the IP address, browser and device you sign in
          from, and when.
        </li>
        <li>Messages you send to or receive from a school, and any support request you send us.</li>
      </ul>
      <p>We do not collect religion or your biometrics.</p>

      <h2>3. Why we use it, and on what basis</h2>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th scope="col">Purpose</th>
              <th scope="col">Lawful basis</th>
            </tr>
          </thead>
          <tbody>
            {BASES.map(([purpose, basis]) => (
              <tr key={purpose}>
                <th scope="row">{purpose}</th>
                <td data-label="Lawful basis">{basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        We never sell personal data, never use it for advertising, and make no automated decision with legal or
        similar effect about anyone.
      </p>

      <h2>4. Children</h2>
      <p>
        XVS holds records of pupils, most of whom are under 18. A school enrols a pupil and decides whether to give
        them their own sign-in; the school obtains a parent's or guardian's consent where the law requires it. Pupils
        can see their own timetable, attendance, results, fees, notices and messages, and can change only their phone,
        email and, if the school allows, their photo. Medical details are never shown to pupils or parents in the apps,
        and parents never see another family's contact details.
      </p>

      <h2>5. Who receives it</h2>
      <ul>
        <li>
          People at your school whose role allows them to see it. A school can restrict sensitive fields, such as
          medical and pay details, and they start closed.
        </li>
        <li>
          Code X staff, only to run and support XVS. Any time a Code X staff member views XVS as one of a school's
          users, they must give a written reason, and it is recorded.
        </li>
        <li>
          Service providers who process data for us, under contract:
          <ul>
            <li>Render (hosting and database), in Frankfurt, Germany (European Union), with Cloudflare in front of it;</li>
            <li>Cloudflare R2 (encrypted backup copies of the database), in the European Union;</li>
            <li>Zoho Mail (sending emails), in the United States;</li>
            <li>Google Firebase (phone notifications), and your browser maker's push service for browser notifications;</li>
            <li>Sentry (error reports from the staff web apps), in the European Union.</li>
          </ul>
        </li>
        <li>
          Paystack, which takes card and bank-transfer payments. Card details are typed only on Paystack's page and
          never reach XVS. Paystack receives your name, email and the amount, and for a pupil's own bank-transfer
          account, the pupil's name and the phone number and email address of their parent or guardian.
        </li>
        <li>Authorities, when the law requires it.</li>
      </ul>

      <h2>6. Data sent outside Nigeria</h2>
      <p>
        Some of our providers store or process data outside Nigeria, as listed above. We transfer it only with the
        safeguards the Act requires: to countries the Nigeria Data Protection Commission recognises as adequate, or
        under contracts that protect it to the Act's standard.
      </p>

      <h2>7. How long we keep it</h2>
      <p>
        We keep records as long as the school needs them and the law requires, then delete them: financial records for
        6 years after the end of the financial year, pupil, parent and staff records for 6 years after the person
        leaves the school, and other records for the periods in our retention schedule. Closing your account stops
        your sign-in at once; your school then decides what happens to its records about you.
      </p>

      <h2>8. How we protect it</h2>
      <p>
        All connections are encrypted. Passwords are stored only as one-way scrambles. Accounts lock after repeated
        wrong passwords, and Code X staff, and a school's administrators and finance staff unless the school turns it
        off, must use two-step sign-in. Each school's data is kept apart from every other school's. Access is limited
        by role, and sensitive fields stay closed until a school opens them. Every change is recorded in an audit trail
        that cannot be edited.
      </p>

      <h2>9. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>see the data held about you, and get a copy;</li>
        <li>have it corrected if it is wrong;</li>
        <li>have it deleted, or its use restricted, where the law allows;</li>
        <li>object to its use, and withdraw any consent you gave;</li>
        <li>receive it in a usable form to take elsewhere;</li>
        <li>
          complain to the Nigeria Data Protection Commission (<a href="https://ndpc.gov.ng">ndpc.gov.ng</a>).
        </li>
      </ul>
      <p>
        For school records, ask your school; we help it answer. For anything else, write to <PrivacyMail />. A parent
        can close their own sign-in from the parent app at any time; a pupil can ask their school to close theirs.
      </p>

      <h2>10. On your phone or browser</h2>
      <p>
        XVS uses only the cookies it needs to keep you signed in and to protect forms: a sign-in cookie that lasts 1
        day for staff, or 30 days for pupils and parents (your school can set 1 to 90), and a form-security cookie.
        There are no tracking or advertising cookies.
      </p>
      <p>
        The student app keeps a copy of a pupil's records on the device so they can be read offline. It is deleted
        when that pupil signs out. On a phone shared by brothers and sisters, each pupil's copy is kept separate.
        Sign-ins in the phone apps are kept in the phone's secure storage and never leave that phone.
      </p>
      <p>
        Notifications on a locked screen may show a first name, a sender's name or a notice title, never marks or
        amounts.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We will post any change here with a new version date, and tell users in the apps before a significant change
        takes effect.
      </p>

      <h2>12. Contact</h2>
      <p>
        Code X Limited, 21 Road, S Close, Festac, Lagos. Data Protection Officer: Chidera Ohanenye-Ohiaekpete,{" "}
        <PrivacyMail />.
      </p>
    </div>
  );
}
