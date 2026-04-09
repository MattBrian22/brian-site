import PageLayout from "@/components/PageLayout";
import SectionLabel from "@/components/SectionLabel";

const cases = [
  {
    id: "CF-001",
    title: "Municipal Infrastructure Procurement — £340M Commitment",
    sector: "Public Infrastructure",
    year: "2023",
    context: "A regional authority was advancing a £340M long-term infrastructure contract. A single vendor had been selected following internal review. Legal sign-off was pending.",
    problem: "The procurement decision had been reached through internal consensus rather than documented evaluation criteria. No constraint matrix existed. The consequence threshold had not been assessed. The decision authority chain was incomplete — two signatories were acting outside their delegated authority limits.",
    method: "Full VFS intake completed. 5-field structure applied. Authority chain verified against organisational governance documents. Evidence submitted for validation: 4 documents Grade A, 2 Grade B, 7 Grade X (rejected). Scenario stress test applied across three adversarial cases.",
    evidence: "Rejected Grade X evidence included two internal endorsements with no supporting data and one cost model built on unverified assumptions. Constraint matrix revealed an unresolved legal exposure in the vendor's jurisdiction of incorporation.",
    outcome: "Veto issued. Decision returned to procurement committee with documented defects. Three months later, the vendor disclosed a regulatory investigation in their primary jurisdiction. The unresolved constraint had been the signal. The £340M contract was restructured with a different primary vendor.",
    vetoed: true,
  },
  {
    id: "CF-002",
    title: "Manufacturing Capex Approval — Automated Assembly Line",
    sector: "Industrial / Automotive",
    year: "2024",
    context: "A Tier 1 automotive manufacturer was assessing a £28M capital commitment for a new automated assembly line. Board approval was required within a 10-week window aligned with fiscal year planning.",
    problem: "The initial business case presented a single-scenario return model with an assumed 94% line utilisation rate. No downside scenario had been modelled. The decision authority was clear, but the evidence base was structurally insufficient for a commitment of this consequence threshold.",
    method: "VFS intake completed. Evidence graded: primary engineering specification (Grade A), vendor ROI projection (Grade B — vendor-sourced, accepted with notation), utilisation benchmark (Grade C — industry average applied without site-specific validation). Constraint matrix built. Three-scenario stress test conducted with independent utilisation assumptions of 94%, 78%, and 61%.",
    evidence: "At 78% utilisation — a defensible base-case for the facility type — the payback period extended from 4.2 to 6.8 years, breaching the board's stated investment threshold. At 61%, the line generated negative NPV across the 10-year model window.",
    outcome: "Decision proceeded — with modification. The board approved a phased deployment at 60% of planned scope, with a formal review gate at 18 months tied to demonstrated utilisation benchmarks. The decision packet was included in board papers as the primary evidence document.",
    vetoed: false,
  },
  {
    id: "CF-003",
    title: "Strategic Market Entry — Southeast Asia Expansion",
    sector: "Private Capital / Governance",
    year: "2024",
    context: "A private investment group was assessing entry into a new jurisdiction with a committed capital allocation of $12M across three portfolio positions. The decision was time-pressured by a co-investor's closing deadline.",
    problem: "The time pressure had compressed the due diligence process to a format that was responsive rather than structured. Regulatory constraint verification had not been completed for one of the three target positions. The decision was being treated as a portfolio-level commitment when it contained three structurally distinct risk profiles.",
    method: "Emergency VFS intake conducted. Decision disaggregated into three separate intake filings — one per position. Each assessed independently for authority, evidence grade, and constraint status. The regulatory constraint for Position 3 was flagged as unresolved and escalated.",
    evidence: "Position 1 and 2 validated with complete evidence bases. Position 3 revealed an unresolved ownership structure question in the target jurisdiction that the originating counsel had noted but not resolved. The constraint had been carried forward into the decision document without disclosure.",
    outcome: "Positions 1 and 2 approved. Position 3 vetoed pending constraint resolution. The co-investor deadline was met for the two approved positions. Position 3 was resolved six weeks later — with a corrected ownership structure that materially changed the valuation. The revised entry price was 14% lower than the original proposed commitment.",
    vetoed: false,
  },
];

export default function CaseFilesPage() {
  return (
    <PageLayout>
      <div style={{ borderBottom: "1px solid #d4d0c8", paddingBottom: "4rem", marginBottom: "5rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.5rem" }}>
          Validated Decision Records · VFS Archive
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#0a0a0a", lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
          Case Files
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#6b6b6b", maxWidth: "580px" }}>
          Selected decision validation records. Each case documents the intake conditions, evidence quality, constraint status, and outcome. Names and identifying details are withheld under client confidentiality protocol.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {cases.map((c, idx) => (
          <article key={c.id} style={{ borderBottom: "1px solid #d4d0c8", paddingBottom: "5rem", marginBottom: "5rem" }}>
            {/* Case header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b" }}>{c.id}</span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #d4d0c8", color: "#6b6b6b", padding: "0.2rem 0.75rem" }}>{c.sector}</span>
                  {c.vetoed && (
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#0a0a0a", color: "#f5f4f0", padding: "0.2rem 0.75rem" }}>Veto Issued</span>
                  )}
                </div>
                <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.7rem", color: "#0a0a0a", lineHeight: 1.2, maxWidth: "700px" }}>{c.title}</h2>
              </div>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem", color: "#d4d0c8", letterSpacing: "0.1em" }}>{c.year}</span>
            </div>

            {/* Case body */}
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0" }}>
              {[
                { label: "Context", content: c.context },
                { label: "Problem / Risk", content: c.problem },
                { label: "Method Applied", content: c.method },
                { label: "Evidence", content: c.evidence },
                { label: "Outcome", content: c.outcome },
              ].map((row) => (
                <div key={row.label} style={{ display: "contents" }}>
                  <div style={{ padding: "1.5rem 2rem 1.5rem 0", borderTop: "1px solid #d4d0c8" }}>
                    <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b6b6b" }}>{row.label}</p>
                  </div>
                  <div style={{ padding: "1.5rem 0", borderTop: "1px solid #d4d0c8", paddingLeft: "2rem" }}>
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "#4a4a4a" }}>{row.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
