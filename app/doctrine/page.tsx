import PageLayout from "@/components/PageLayout";
import SectionLabel from "@/components/SectionLabel";

const doctrines = [
  {
    id: "D-01",
    title: "Why Most Decisions Fail",
    date: "Nov 2024",
    body: [
      "The common explanation for decision failure is poor judgement. This is almost always wrong. The actual cause is almost always structural: the decision was made before the necessary conditions for a valid decision existed.",
      "A valid decision requires four things: a clearly stated decision question, a verified authority to make it, a sufficient evidence base, and a resolved constraint environment. When any of these is absent, the decision is not a decision — it is a guess dressed in institutional language.",
      "Most organisational processes do not check for these conditions. They check for consensus, for speed, and for the appearance of due diligence. These are not the same things. Consensus without evidence is groupthink. Speed without structure is exposure. The appearance of due diligence is a liability.",
      "The solution is not better judgement. The solution is a framework that refuses to produce an output until the conditions for a valid decision are met.",
    ],
  },
  {
    id: "D-02",
    title: "Validation Is Not Opinion",
    date: "Oct 2024",
    body: [
      "There is a persistent confusion between validation and recommendation. A recommendation is an opinion — it reflects a preference shaped by assumptions, experience, and framing. A validation is a structured assessment of whether a decision meets a defined standard of evidence and authority.",
      "VFS does not produce recommendations. It produces findings. The difference is precise: a finding states what the evidence supports, what it does not support, and where the evidence is absent. It does not tell a decision-maker what to do. It tells them what their decision is actually built on.",
      "This distinction matters because in high-stakes environments, the liability does not attach to the recommendation — it attaches to the decision. If the decision-maker can demonstrate that their choice was based on validated evidence, they have a defensible position. If they acted on someone's opinion, they do not.",
      "Validation is not a softer version of advice. It is a harder one. It requires more rigour, more documentation, and more willingness to issue an inconvenient finding.",
    ],
  },
  {
    id: "D-03",
    title: "The Role of the Veto",
    date: "Sep 2024",
    body: [
      "The veto is the most misunderstood function in any decision system. It is treated as an obstacle — a sign that the process is broken, that someone is obstructing progress, that the system is too cautious.",
      "This is precisely backwards. The veto is the system working correctly. It is the mechanism that prevents a structurally deficient decision from entering the record. It is not a block on action — it is a block on premature action.",
      "A veto does not mean the decision cannot be made. It means the decision cannot be made yet. The veto creates the conditions for the decision-maker to return with the missing evidence, the resolved constraint, or the clarified authority. In doing so, it produces a better decision than would have been made without it.",
      "The measure of a decision system is not how many decisions it approves. It is whether the decisions it approves are defensible. The veto is the mechanism that maintains that standard.",
    ],
  },
  {
    id: "D-04",
    title: "Chain of Custody in Decisions",
    date: "Aug 2024",
    body: [
      "In forensic evidence, chain of custody is the documented record of who held a piece of evidence, when, under what conditions, and what they did with it. A break in the chain renders the evidence inadmissible — not because it is false, but because it cannot be verified.",
      "Decisions require the same standard. Who framed the decision question? Who submitted the evidence? Who reviewed the constraint matrix? Who held authority at each stage? When did each event occur? These are not administrative details — they are the architecture of a decision's defensibility.",
      "When decisions are challenged — legally, regulatorily, or institutionally — the challenge rarely goes to the substance of the conclusion first. It goes to the process. Was the right person involved? At the right stage? With the right information? A decision without a documented chain of custody cannot answer these questions.",
      "The discipline of maintaining chain of custody in decisions is not bureaucratic. It is the difference between a decision that can be defended and one that cannot.",
    ],
  },
];

export default function DoctrinePage() {
  return (
    <PageLayout>
      <div style={{ borderBottom: "1px solid #d4d0c8", paddingBottom: "4rem", marginBottom: "5rem" }}>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "1.5rem" }}>
          Written Positions · Decision Systems Doctrine
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#0a0a0a", lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
          Doctrine
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#6b6b6b", maxWidth: "580px" }}>
          Short, structured positions on the principles that govern decision integrity. These are not essays. They are operational doctrine — written to be usable, not impressive.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {doctrines.map((doc) => (
          <article key={doc.id} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "0", borderBottom: "1px solid #d4d0c8" }}>
            {/* Left column */}
            <div style={{ padding: "4rem 2rem 4rem 0", borderRight: "1px solid #d4d0c8" }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b", marginBottom: "0.5rem" }}>{doc.id}</p>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#d4d0c8" }}>{doc.date}</p>
            </div>
            {/* Right column */}
            <div style={{ padding: "4rem 0 4rem 3rem" }}>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.6rem", color: "#0a0a0a", marginBottom: "2.5rem", lineHeight: 1.2 }}>{doc.title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {doc.body.map((para, i) => (
                  <p key={i} style={{ fontSize: "0.95rem", lineHeight: 1.9, color: i === 0 ? "#2a2a2a" : "#4a4a4a", borderLeft: i === 0 ? "2px solid #0a0a0a" : "none", paddingLeft: i === 0 ? "1.5rem" : "0", fontStyle: i === 0 ? "italic" : "normal" }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
