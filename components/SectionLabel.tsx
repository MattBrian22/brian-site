interface SectionLabelProps {
  children: React.ReactNode;
  index?: string;
}

export default function SectionLabel({ children, index }: SectionLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1.5rem",
      }}
    >
      {index && (
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.2em",
            color: "#6b6b6b",
          }}
        >
          {index}
        </span>
      )}
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#6b6b6b",
        }}
      >
        {children}
      </span>
      <div style={{ flex: 1, height: "1px", backgroundColor: "#d4d0c8" }} />
    </div>
  );
}
