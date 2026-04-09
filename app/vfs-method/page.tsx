import PageLayout from "@/components/PageLayout";
import SectionLabel from "@/components/SectionLabel";

const fields = [
  { id: "F1", label: "Decision Statement", desc: "A single-sentence declaration of what is being decided. Ambiguous statements are returned for clarification before intake proceeds." },
  { id: "F2", label: "Decision Authority", desc: "Who holds the authority to make this decision. Unverified authority claims trigger an immediate escalation flag." },
  { id: "F3", label: "Evidence Submitted", desc: "All supporting documents, data, and third-party analysis submitted for validation. Unsourced assertions are rejected." },
  { id: "F4", label: "Constraint Matrix", desc: "Legal, financial, operational, and temporal constraints governing the decision space. Each constraint must be sourced." },
  { id: "F5", label: "Consequence Threshold", desc: "Classification of decision reversibility and impact magnitude. Determines which validation pathway applies." },
];

const steps = [
  { step: "01", title: "Intake & Classification", desc: "The 5-field form is completed. The decision is classified by type, authority level, and consequence threshold. Incomplete intake returns to originator." },
  { step: "02", title: "Evidence Audit", desc: "All submitted evidence is graded against the evidence standard. Inadmissible or unsourced material is flagged. The decision cannot proceed on ungraded evidence." },
  { step: "03", title: "Constraint Verification", desc: "Each constraint in the matrix is independently verified. Constraints that cannot be sourced are treated as unknown, not assumed." },
  { step: "04", title: "Scenario Stress Test", desc: "The decision is tested against three adversarial scenarios: best-case, base-case, and structural failure. Each scenario must resolve without catastrophic outcome." },
  { step: "05", title: "Veto Assessment", desc: "A formal veto check is conducted. If evidence is insufficient, authority is unclear, or constraints are unresolved, a veto is issued and documented." },
  { step: "06", title: "Decision Packet Output", desc: "The validated decision is packaged with all evidence, constraint documentation, findings, risk flags, and the validation signature. This is the live document." },
];

const evidenceGrades = [
  { grade: "A", label: "Primary", desc: "Direct, verifiable, independently sourced. Highest weight." },
  { grade: "B", label: "Secondary", desc: "Derived from primary sources. Acceptable with attribution." },
  { grade: "C", label: "Tertiary", desc: "Synthesised or inferred. Requires supporting Grade A or B evidence." },
  { grade: "X", label: "Inadmissible", desc: "Opinion, assertion, or unsourced claim. Rejected from validation process." },
];

export default function VFSMethodPage() {
  return (
    <PageLayout>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #d4d0c8", paddingBottom: "4rem", marginBottom: "5rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.5rem" }}>
          Protocol Documentation · VFS v2.4
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#0a0a0a", lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
          Validation &<br />Forensic Standards
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#6b6b6b", maxWidth: "620px" }}>
          VFS is a structured protocol for producing decisions that are defensible under audit, stress-testable under pressure, and traceable across time. It does not optimise for speed. It optimises for integrity.
        </p>
      </div>

      {/* What is VFS */}
      <section style={{ marginBottom: "5rem" }}>
        <SectionLabel index="§ 1">What Is VFS</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.6rem", color: "#0a0a0a", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              A framework for decisions that cannot afford to fail
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#6b6b6b", marginBottom: "1rem" }}>
              Most decisions fail not because of wrong conclusions, but because of structural defects: missing evidence, unverified authority, unresolved constraints, or undocumented reasoning.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#6b6b6b" }}>
              VFS treats every decision as a document that must survive external challenge. It applies forensic standards borrowed from legal evidentiary practice and applies them to business, infrastructure, and governance contexts.
            </p>
          </div>
          <div style={{ backgroundColor: "#0a0a0a", padding: "2.5rem", color: "#f5f4f0" }}>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.5rem" }}>
              Core Principle
            </p>
            <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.4rem", lineHeight: 1.4, marginBottom: "1.5rem" }}>
              "A decision made without a framework cannot be validated. A decision that cannot be validated cannot be defended. A decision that cannot be defended should not be made."
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b6b" }}>
              — VFS Founding Doctrine
            </p>
          </div>
        </div>
      </section>

      {/* 5-Field Intake */}
      <section style={{ marginBottom: "5rem", borderTop: "1px solid #d4d0c8", paddingTop: "4rem" }}>
        <SectionLabel index="§ 2">5-Field Intake Structure</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "0" }}>
          {fields.map((f, i) => (
            <div key={f.id} style={{ padding: "2rem", borderBottom: "1px solid #d4d0c8", borderRight: i % 2 === 0 ? "1px solid #d4d0c8" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", backgroundColor: "#0a0a0a", color: "#f5f4f0", padding: "0.2rem 0.5rem", letterSpacing: "0.1em" }}>{f.id}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b6b6b" }}>{f.label}</span>
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#4a4a4a" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Validation Process */}
      <section style={{ marginBottom: "5rem", borderTop: "1px solid #d4d0c8", paddingTop: "4rem" }}>
        <SectionLabel index="§ 3">Validation Process</SectionLabel>
        <div>
          {steps.map((s, i) => (
            <div key={s.step} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "2rem", padding: "2rem 0", borderBottom: "1px solid #d4d0c8", alignItems: "start" }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1.5rem", color: "#d4d0c8", fontWeight: 700 }}>{s.step}</div>
              <div>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.15rem", color: "#0a0a0a", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "#6b6b6b" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Evidence Standards */}
      <section style={{ marginBottom: "5rem", borderTop: "1px solid #d4d0c8", paddingTop: "4rem" }}>
        <SectionLabel index="§ 4">Evidence Standards — Daubert-Aligned</SectionLabel>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#6b6b6b", maxWidth: "600px", marginBottom: "3rem" }}>
          VFS applies a four-grade evidence classification derived from the Daubert standard for expert testimony admissibility. All evidence submitted is graded before the validation process begins.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
          {evidenceGrades.map((eg, i) => (
            <div key={eg.grade} style={{ padding: "2rem", borderLeft: i > 0 ? "1px solid #d4d0c8" : "none", borderTop: "1px solid #d4d0c8" }}>
              <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "2.5rem", color: eg.grade === "X" ? "#c0392b" : "#0a0a0a", marginBottom: "0.5rem" }}>{eg.grade}</div>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "0.75rem" }}>{eg.label}</p>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "#4a4a4a" }}>{eg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Output */}
      <section style={{ borderTop: "1px solid #d4d0c8", paddingTop: "4rem" }}>
        <SectionLabel index="§ 5">Decision Packet Output</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {[
            { label: "Findings", items: ["Summary statement of validated facts", "Evidence grade breakdown", "Constraint resolution status", "Authority confirmation"] },
            { label: "Risk Flags", items: ["Unresolved constraints listed", "Evidence gaps documented", "Scenario failure modes noted", "Escalation triggers identified"] },
            { label: "Veto Logic", items: ["Veto condition statement (if issued)", "Evidence standard not met", "Authority unclear or disputed", "Constraint unresolvable in timeframe"] },
          ].map((col) => (
            <div key={col.label} style={{ border: "1px solid #d4d0c8", padding: "2rem" }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.5rem" }}>{col.label}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.items.map((item) => (
                  <li key={item} style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#4a4a4a", paddingBottom: "0.5rem", borderBottom: "1px solid #d4d0c8", marginBottom: "0.5rem", display: "flex", gap: "0.75rem" }}>
                    <span style={{ color: "#0a0a0a", fontWeight: 700 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
