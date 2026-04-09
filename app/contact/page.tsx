"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error state when user starts typing again
    if (status === "error") {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  const handleSubmit = async () => {
    // Client-side guard
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("All fields are required.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      setStatus("sent");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <PageLayout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8rem",
          alignItems: "start",
          minHeight: "60vh",
        }}
      >
        {/* ── Left column ── */}
        <div>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#6b6b6b",
              marginBottom: "2rem",
            }}
          >
            Secure Contact
          </p>
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#0a0a0a",
              lineHeight: 1.1,
              marginBottom: "2rem",
              letterSpacing: "-0.02em",
            }}
          >
            For decision-critical work or system builds.
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "#6b6b6b",
              marginBottom: "3rem",
              maxWidth: "420px",
            }}
          >
            Engagements are accepted on a selective basis. If you have a
            decision under time pressure, an evidence gap that needs
            structuring, or a system that needs to be built, use the form.
          </p>

          <div
            style={{
              borderTop: "1px solid #d4d0c8",
              paddingTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {[
              { label: "Response time", value: "Within 48 hours" },
              { label: "Engagement type", value: "Project-based or retainer" },
              { label: "Minimum scope", value: "Decision-critical contexts only" },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid #d4d0c8",
                }}
              >
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#6b6b6b",
                  }}
                >
                  {row.label}
                </p>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    color: "#0a0a0a",
                  }}
                >
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — Form / States ── */}
        <div>
          {/* SUCCESS STATE */}
          {status === "sent" ? (
            <div
              style={{
                border: "1px solid #d4d0c8",
                padding: "3.5rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #0a0a0a",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <span style={{ fontSize: "1rem", color: "#0a0a0a" }}>✓</span>
              </div>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#6b6b6b",
                  marginBottom: "1rem",
                }}
              >
                Logged
              </p>
              <p
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "1.5rem",
                  color: "#0a0a0a",
                  marginBottom: "1rem",
                }}
              >
                Your message is received.
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  color: "#6b6b6b",
                  marginBottom: "2rem",
                }}
              >
                You will receive a response within 48 hours if your scope
                qualifies.
              </p>
              <button
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                  setStatus("idle");
                }}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "1px solid #d4d0c8",
                  color: "#6b6b6b",
                  padding: "0.75rem 1.5rem",
                  cursor: "pointer",
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            /* FORM STATE */
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {[
                {
                  name: "name",
                  label: "Full Name",
                  type: "input",
                  placeholder: "Your name",
                },
                {
                  name: "email",
                  label: "Email Address",
                  type: "input",
                  placeholder: "your@email.com",
                },
                {
                  name: "message",
                  label: "Decision Context",
                  type: "textarea",
                  placeholder:
                    "Describe the decision, the context, and what you need structured or validated.",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#6b6b6b",
                      display: "block",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows={6}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottom: "1px solid #d4d0c8",
                        padding: "0.75rem 0",
                        fontSize: "0.9rem",
                        color: "#0a0a0a",
                        outline: "none",
                        resize: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.7,
                        boxSizing: "border-box",
                      }}
                    />
                  ) : (
                    <input
                      type={field.name === "email" ? "email" : "text"}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottom: "1px solid #d4d0c8",
                        padding: "0.75rem 0",
                        fontSize: "0.9rem",
                        color: "#0a0a0a",
                        outline: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  )}
                </div>
              ))}

              {/* Error message */}
              {status === "error" && errorMsg && (
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: "#c0392b",
                    marginTop: "-1rem",
                  }}
                >
                  ✕ {errorMsg}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  backgroundColor: status === "sending" ? "#6b6b6b" : "#0a0a0a",
                  color: "#f5f4f0",
                  padding: "1rem 2rem",
                  border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  alignSelf: "flex-start",
                  transition: "background-color 0.2s",
                }}
              >
                {status === "sending" ? "Submitting..." : "Submit Inquiry →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
