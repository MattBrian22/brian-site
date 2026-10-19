import SectionLabel from "@/components/SectionLabel";

// Contact details are not in the brief. Email is the address already used by
// the old contact route. Set PHONE to show a phone line.
const EMAIL = "brian@veritaport.co.uk";
const PHONE = "+447493012182";

const procedure = [
  "Extracts the claims from the source material.",
  "Verifies every quote word-for-word against the source.",
  "Keeps what the code checked apart from what the model said.",
  "Produces a sealed record that a reader can replay.",
];

const notList = [
  "It is not a research tool.",
  "It is not an AI advisor.",
  "It does not tell you what to do.",
  "It does not certify the conclusion. It certifies the record is intact.",
];

const body = {
  fontSize: "1.05rem",
  lineHeight: 1.8,
  color: "#2a2a2a",
  maxWidth: "620px",
  marginBottom: "1.25rem",
} as const;

const heading = {
  fontFamily: "'DM Serif Display', Georgia, serif",
  color: "#0a0a0a",
  lineHeight: 1.2,
  marginBottom: "1.5rem",
} as const;

export default function Home() {
  return (
    <div className="container">
      <section style={{ padding: "8rem 0 6rem", borderBottom: "1px solid #d4d0c8" }}>
        <h1
          style={{
            ...heading,
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            maxWidth: "900px",
            letterSpacing: "-0.02em",
          }}
        >
          A sealed record of what was checked.
        </h1>
        <p style={{ ...body, color: "#6b6b6b" }}>
          VEC (VeritaPort Evidence &amp; Control) is a procedure. It produces
          replayable records of what was checked against the source.
        </p>
        <p
          style={{
            ...body,
            borderLeft: "2px solid #0a0a0a",
            paddingLeft: "1.5rem",
            marginTop: "2rem",
          }}
        >
          You know how you can&apos;t prove an email wasn&apos;t edited after
          you sent it? This is the opposite.
        </p>
      </section>

      <section id="problem" style={{ scrollMarginTop: "64px" }}>
        <SectionLabel>The problem</SectionLabel>
        <p style={body}>
          A signer approves a bundle, a report or a filing. They cannot have
          read all of it.
        </p>
        <p style={body}>
          Months later, in a dispute, they cannot prove what they did read.
          The record is a memory, a note or an email. Any of those can be
          edited.
        </p>
      </section>

      <section
        id="procedure"
        style={{ scrollMarginTop: "64px", borderTop: "1px solid #d4d0c8" }}
      >
        <SectionLabel>The procedure</SectionLabel>
        <ul style={{ ...body, paddingLeft: "1.25rem" }}>
          {procedure.map((item) => (
            <li key={item} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
        <p style={body}>
          The checks are deterministic verification, not model judgement.
        </p>
      </section>

      <section
        id="not"
        style={{ scrollMarginTop: "64px", borderTop: "1px solid #d4d0c8" }}
      >
        <SectionLabel>What it is not</SectionLabel>
        <ul style={{ ...body, paddingLeft: "1.25rem" }}>
          {notList.map((item) => (
            <li key={item} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>
        <p style={body}>
          It doesn&apos;t prove you&apos;re right. It proves nobody touched the
          evidence.
        </p>
      </section>

      <section
        id="status"
        style={{ scrollMarginTop: "64px", borderTop: "1px solid #d4d0c8" }}
      >
        <SectionLabel>Status</SectionLabel>
        <p style={body}>
          Running on a deterministic test reporting platform in healthcare
          compliance. Live integration in progress with a London disputes
          practice.
        </p>
        <p style={body}>
          Not yet in place: independent accuracy measurement, firm logins, and
          a closed loop into client systems.
        </p>
      </section>

      <section
        id="about"
        style={{ scrollMarginTop: "64px", borderTop: "1px solid #d4d0c8" }}
      >
        <SectionLabel>About</SectionLabel>
        <p style={body}>
          I&apos;m Matthew, a CS graduate. I am not a company. I built this
          procedure myself. The procedure is my track record, so judge it on
          what it does.
        </p>
      </section>

      <section
        id="contact"
        style={{ scrollMarginTop: "64px", borderTop: "1px solid #d4d0c8" }}
      >
        <SectionLabel>Contact</SectionLabel>
        <p style={body}>
          <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline" }}>
            {EMAIL}
          </a>
        </p>
        {PHONE && (
          <p style={body}>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              style={{ textDecoration: "underline" }}
            >
              {PHONE}
            </a>
          </p>
        )}
      </section>
    </div>
  );
}
