"use client";

import { useState, type FormEvent } from "react";

// Replace with the real endpoint. Until then, sending shows the error message.
const FORM_ENDPOINT = "[FORM ENDPOINT]";

type Field = "name" | "email" | "firm" | "role" | "message" | "live";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED: Record<Field, string> = {
  name: "Enter your name.",
  email: "Enter your email address.",
  firm: "Enter your firm.",
  role: "Enter your role.",
  message: "Describe the challenge in a sentence or two.",
  live: "Choose Yes or No.",
};

function check(field: Field, value: string): string {
  if (!value.trim()) return REQUIRED[field];
  if (field === "email" && !EMAIL_RE.test(value.trim())) {
    return "Enter a valid email address.";
  }
  return "";
}

export default function DiscoveryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const setError = (field: Field, message: string) =>
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[field] = message;
      else delete next[field];
      return next;
    });

  const onBlur =
    (field: Field) =>
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setError(field, check(field, e.target.value));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const next: Errors = {};
    (Object.keys(REQUIRED) as Field[]).forEach((field) => {
      const message = check(field, String(data.get(field) ?? ""));
      if (message) next[field] = message;
    });
    setErrors(next);
    if (Object.keys(next).length > 0) {
      form
        .querySelector<HTMLElement>("[aria-invalid='true']")
        ?.focus();
      return;
    }

    // Honeypot: a filled hidden field means a bot. Pretend it worked.
    if (String(data.get("website") ?? "") !== "") {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="form-success" role="status">
        Thank you. Your request has been sent.
      </p>
    );
  }

  const err = (field: Field) => errors[field];
  const props = (field: Field) => ({
    id: `f-${field}`,
    name: field,
    onBlur: onBlur(field),
    "aria-invalid": err(field) ? (true as const) : undefined,
    "aria-describedby": err(field) ? `e-${field}` : undefined,
  });
  const msg = (field: Field) =>
    err(field) ? (
      <p className="field-error" id={`e-${field}`}>
        {err(field)}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="intake">
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input type="text" autoComplete="name" {...props("name")} />
        {msg("name")}
      </div>

      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input type="email" autoComplete="email" {...props("email")} />
        {msg("email")}
      </div>

      <div className="field">
        <label htmlFor="f-firm">Firm</label>
        <input type="text" autoComplete="organization" {...props("firm")} />
        {msg("firm")}
      </div>

      <div className="field">
        <label htmlFor="f-role">Role</label>
        <input type="text" autoComplete="organization-title" {...props("role")} />
        {msg("role")}
      </div>

      <div className="field">
        <label htmlFor="f-message">
          What is the biggest challenge you are facing with AI and document
          verification right now?
        </label>
        <textarea rows={5} {...props("message")} />
        <p className="field-note">
          Please do not include client or matter details here.
        </p>
        {msg("message")}
      </div>

      <fieldset
        className="field radios"
        aria-describedby={err("live") ? "e-live" : undefined}
      >
        <legend>
          Do you have a live matter with a deadline in the next 30 days?
        </legend>
        <label>
          <input
            type="radio"
            name="live"
            value="Yes"
            onChange={() => setError("live", "")}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="live"
            value="No"
            onChange={() => setError("live", "")}
          />
          No
        </label>
        {msg("live")}
      </fieldset>

      {/* Honeypot: hidden from people and assistive tech. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">Leave this field empty</label>
        <input
          type="text"
          id="f-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Request a discovery call"}
      </button>

      {status === "error" && (
        <p className="field-error" role="alert">
          The request could not be sent. Please try again.
        </p>
      )}
    </form>
  );
}
