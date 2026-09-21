# Set up EmailJS for both XVS forms

Create two templates using the copy-and-paste HTML files below. Both can use the same connected email service and public key. The website already selects the appropriate template when a form is submitted.

These instructions use `info@codexng.com`, the contact address currently displayed on the website. If enquiries should go elsewhere, replace **To Email** in both dashboard templates with your preferred team inbox.

## 1. Create the contact template

1. Sign in to the [EmailJS dashboard](https://dashboard.emailjs.com/).
2. Under **Email Templates**, choose **Create New Template**. Name it `XVS Contact`.
3. Enter these dashboard settings separately from the email body:

| Dashboard field | Copy this value |
| --- | --- |
| To Email | `info@codexng.com` |
| Subject | `XVS contact: {{reason}} from {{name}}` |
| From Name | `XVS Website \| CodeX` |
| From Email | Use the default address of your connected email service |
| Reply To | `{{email}}` |
| CC / BCC | Leave empty unless additional recipients are needed |

4. Under **Content**, open the HTML editing option / **Code Editor**. Open [emailjs-template-contact.html](emailjs-template-contact.html) in your text editor, select all, copy, and paste into EmailJS's HTML editor. Copy the source HTML, not the rendered browser preview.
5. Save. Copy the **Template ID** from the template's **Settings**. This is the value for `VITE_EMAILJS_TEMPLATE_CONTACT`.

This template handles all three contact choices: **Book a demo** (`Demo`), **General question** (`Question`), and **Partnership** (`Partnership`).

## 2. Create the homepage demo template

Create another template named `XVS Demo Request`, with these settings:

| Dashboard field | Copy this value |
| --- | --- |
| To Email | `info@codexng.com` |
| Subject | `XVS demo request from {{name}} - {{organization}}` |
| From Name | `XVS Website \| CodeX` |
| From Email | Use the default address of your connected email service |
| Reply To | `{{email}}` |
| CC / BCC | Leave empty unless additional recipients are needed |

Copy the entire source of [emailjs-template-demo.html](emailjs-template-demo.html) into its **Content** HTML / **Code Editor**, then save. Copy its **Template ID** into `VITE_EMAILJS_TEMPLATE_DEMO`.

This template handles **Request a demo** on `/` and `/xvs`.

For both templates, keep **To Email** as a fixed team inbox. The connected service sends the email; the visitor's address belongs in **Reply To**. The HTML comments repeat these settings for convenience; pasting the HTML does not configure dashboard fields automatically.

## 3. Connect the template IDs to the website

Update the existing `.env` in the project root, next to `package.json`. If setting up a fresh checkout without that file, copy `.env.example` to `.env` first. Replace the placeholders below with the actual values from your account:

```dotenv
VITE_EMAILJS_SERVICE_ID=service_your_actual_id
VITE_EMAILJS_TEMPLATE_CONTACT=template_your_contact_id
VITE_EMAILJS_TEMPLATE_DEMO=template_your_demo_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

- **Service ID:** EmailJS > **Email Services** > your connected service. You can reuse an existing Gmail service.
- **Template IDs:** EmailJS > **Email Templates** > each saved template > **Settings**. Use the contact and demo IDs in their respective variables.
- **Public Key:** EmailJS > **Account** > API keys / public key settings. Use the public key, not a private key or email password.

Copy IDs exactly, without embedded spaces. If `.env.local` also exists, check it for older values that could override `.env`.

Restart `npm run dev` after saving. For deployment, add the same four variables to your hosting project's environment settings, then rebuild/redeploy so Vite includes the new values.

## 4. Check the templates and delivery

Use EmailJS's template test action with your connected service. Here are sample values to enter when prompted:

| Variable | Contact sample | Demo sample |
| --- | --- | --- |
| `name` | Adaeze Okonkwo | Adaeze Okonkwo |
| `organization` | Grace Academy | Grace Academy |
| `email` | Your own email address | Your own email address |
| `phone` | +234 803 123 4567 | +234 803 123 4567 |
| `reason` | Demo | Demo request |
| `scale` | 3 campuses, 1,400 students | Not used |
| `branches` | Not used | 3 campuses, 1,400 students |
| `message` | Please explain how migration works. | Please show us admissions and reporting. |

1. Test each template and check the receiving inbox, including spam.
2. Submit the website's homepage demo form with every field filled. Confirm all values appear in the demo email.
3. Submit `/contact` for each enquiry choice. Confirm the subject and enquiry type match the selection.
4. Repeat with optional fields empty. The templates display **Not provided** for empty phone, size, and message fields.
5. Click Reply on a received email and confirm it addresses the email entered in the form.

The site shows a sending state, clears the form after EmailJS accepts the request, and keeps entered details on failure. Acceptance is not a guarantee of inbox delivery. If a message is missing, check EmailJS **Email History**, the receiving inbox/spam, your service connection, template IDs, and account quota. If you configured a domain allowlist, check your production and development origins.

## Field matching and references

The existing [submission handler](../src/submitEmail.ts) uses `emailjs.sendForm`, which takes values from named form fields. Contact sends `name`, `organization`, `email`, `phone`, `scale`, `message`, and `reason`; the homepage sends `name`, `organization`, `email`, `phone`, `branches`, `message`, and `reason`. See [EmailJS sendForm documentation](https://www.emailjs.com/docs/sdk/send-form/).

Keep all placeholders exactly as written. Double braces escape submitted HTML. The `{{^phone}}...{{/phone}}` style sections supply fallback text when a field is empty. See [EmailJS template variables](https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/).

Form labels are written directly into each template. The site does not send custom `form_name` or `page_url` fields. For further dashboard guidance, see [Create an email template](https://www.emailjs.com/docs/tutorial/creating-email-template/).
