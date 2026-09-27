import { useState, type ChangeEvent, type CSSProperties, type FormEvent } from "react";
import { sendContactEmail } from "../../lib/emailjs";
import { COMPANY } from "../../components/navigation";
import { ArrowIcon, Icon } from "../../components/shared/icons";
import { BRANCH_OPTIONS, MESSAGE_MAX_LENGTH, REASONS, ROLE_OPTIONS, SUCCESS } from "./content";

/**
 * The contact form. Keeps its own state, checks the required fields,
 * and sends everything to EmailJS (see src/lib/emailjs.ts).
 *
 * The keys in EMPTY_FORM are also the {{variables}} the EmailJS template
 * receives, so rename them there too if you rename them here.
 */
const EMPTY_FORM = {
  reason: REASONS[0].value,
  firstName: "",
  lastName: "",
  organization: "",
  role: "",
  email: "",
  phone: "",
  scale: "",
  message: "",
};

type FormValues = typeof EMPTY_FORM;
type FieldName = keyof FormValues;
type Status = "idle" | "sending" | "sent" | "error";

/** Returns an error message for a field, or "" if it's fine. */
function validate(name: FieldName, value: string): string {
  const v = value.trim();
  switch (name) {
    case "firstName":
      return v ? "" : "Enter your first name";
    case "lastName":
      return v ? "" : "Enter your last name";
    case "organization":
      return v ? "" : "Enter your school or group";
    case "email":
      if (!v) return "Enter your email address";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email, like name@school.com";
    default:
      return "";
  }
}

const REQUIRED: FieldName[] = ["firstName", "lastName", "organization", "email"];

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const reason = REASONS.find((r) => r.value === values.reason) ?? REASONS[0];

  function update(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const name = event.target.name as FieldName;
    setValues((current) => ({ ...current, [name]: event.target.value }));
    // Clear an error as soon as the field is fixed
    if (errors[name]) setErrors((current) => ({ ...current, [name]: validate(name, event.target.value) }));
  }

  function check(event: { target: { name: string; value: string } }) {
    const name = event.target.name as FieldName;
    setErrors((current) => ({ ...current, [name]: validate(name, event.target.value) }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = Object.fromEntries(REQUIRED.map((name) => [name, validate(name, values[name])]));
    setErrors(found);
    const firstProblem = REQUIRED.find((name) => found[name]);
    if (firstProblem) {
      document.getElementById(`contact-${firstProblem}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      await sendContactEmail({ ...values, name: `${values.firstName} ${values.lastName}`.trim() });
      setStatus("sent");
    } catch (error) {
      console.error("EmailJS error", error);
      setStatus("error");
    }
  }

  function reset() {
    setValues(EMPTY_FORM);
    setErrors({});
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div className="contact-success" role="status">
        <span className="contact-success-icon">
          <Icon name="check" size={26} />
        </span>
        <h2>{SUCCESS.title}</h2>
        <p>{SUCCESS.body}</p>
        <button type="button" className="btn btn-ghost" onClick={reset}>
          {SUCCESS.again}
        </button>
      </div>
    );
  }

  /** A labelled text input with its error message underneath. */
  const textField = (name: FieldName, label: string, props: Record<string, unknown> = {}) => (
    <div className={`field ${errors[name] ? "has-error" : ""}`}>
      <label htmlFor={`contact-${name}`}>{label}</label>
      <input
        id={`contact-${name}`}
        name={name}
        value={values[name]}
        onChange={update}
        onBlur={check}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
        {...props}
      />
      {errors[name] && (
        <p id={`contact-${name}-error`} className="field-error">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form className="contact-form load-in" style={{ "--delay": "160ms" } as CSSProperties} onSubmit={submit} noValidate>
      <fieldset className="field field-full reason-picker">
        <legend>What is this about?</legend>
        <div className="reason-options">
          {REASONS.map((option) => (
            <label key={option.value} className={values.reason === option.value ? "is-selected" : ""}>
              <input type="radio" name="reason" value={option.value} checked={values.reason === option.value} onChange={update} />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {textField("firstName", "First name", { autoComplete: "given-name", required: true })}
      {textField("lastName", "Last name", { autoComplete: "family-name", required: true })}
      {textField("organization", "School or group name", { autoComplete: "organization", required: true, placeholder: "Bright Star Schools" })}

      <div className="field">
        <label htmlFor="contact-role">Your role</label>
        <select id="contact-role" name="role" value={values.role} onChange={update} className={values.role ? "" : "is-placeholder"}>
          <option value="">Select</option>
          {ROLE_OPTIONS.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>
      </div>

      {textField("email", "Work email", { type: "email", autoComplete: "email", required: true, placeholder: "you@school.com" })}
      {textField("phone", "Phone (optional)", { type: "tel", autoComplete: "tel" })}

      <div className="field field-full">
        <label htmlFor="contact-scale">How many branches?</label>
        <select id="contact-scale" name="scale" value={values.scale} onChange={update} className={values.scale ? "" : "is-placeholder"}>
          <option value="">Select</option>
          {BRANCH_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="field field-full">
        <label htmlFor="contact-message">Anything else you'd like to add?</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={MESSAGE_MAX_LENGTH}
          value={values.message}
          onChange={update}
          placeholder="What you use today, what takes too long, what you'd like to see."
        />
        <span className="field-count">
          {values.message.length} / {MESSAGE_MAX_LENGTH}
        </span>
      </div>

      <div className="field-full contact-submit">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : reason.submit}
          {status !== "sending" && <ArrowIcon />}
        </button>
        {status === "error" && (
          <p className="field-error" role="alert">
            Something went wrong sending your message. Please email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> directly.
          </p>
        )}
      </div>
    </form>
  );
}
