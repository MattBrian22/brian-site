const TITLE = "From documents to a sealed record";
const DESC =
  "Three outlined boxes joined by arrows. Documents go in. Every quotation is checked word for word by code. The output is a sealed record that can be replayed.";

// Wide layout for tablet and desktop, tall layout for phones.
// globals.css shows one and hides the other.
export default function Diagram() {
  return (
    <>
      <svg
        className="diagram diagram-wide"
        viewBox="0 0 960 240"
        role="img"
        aria-labelledby="dg-wide-title dg-wide-desc"
      >
        <title id="dg-wide-title">{TITLE}</title>
        <desc id="dg-wide-desc">{DESC}</desc>

        <rect className="box" x="2" y="65" width="218" height="110" rx="4" />
        <rect className="box" x="320" y="65" width="320" height="110" rx="4" />
        <rect className="box" x="740" y="65" width="218" height="110" rx="4" />

        <text className="label" x="111" y="126" textAnchor="middle">
          Documents
        </text>
        <text className="label" x="480" y="114" textAnchor="middle">
          Every quotation checked
        </text>
        <text className="label" x="480" y="140" textAnchor="middle">
          word for word by code
        </text>
        <text className="label" x="849" y="114" textAnchor="middle">
          Sealed record that
        </text>
        <text className="label" x="849" y="140" textAnchor="middle">
          can be replayed
        </text>

        <path className="arrow-line" pathLength={1} d="M224 120 H316" />
        <polyline className="arrow-head" points="306,110 316,120 306,130" />
        <path className="arrow-line" pathLength={1} d="M644 120 H736" />
        <polyline className="arrow-head" points="726,110 736,120 726,130" />
      </svg>

      <svg
        className="diagram diagram-tall"
        viewBox="0 0 360 540"
        role="img"
        aria-labelledby="dg-tall-title dg-tall-desc"
      >
        <title id="dg-tall-title">{TITLE}</title>
        <desc id="dg-tall-desc">
          Three outlined boxes joined by arrows, top to bottom. Documents go
          in. Every quotation is checked word for word by code. The output is a
          sealed record that can be replayed.
        </desc>

        <rect className="box" x="22" y="4" width="316" height="100" rx="4" />
        <rect className="box" x="22" y="204" width="316" height="120" rx="4" />
        <rect className="box" x="22" y="424" width="316" height="110" rx="4" />

        <text className="label" x="180" y="60" textAnchor="middle">
          Documents
        </text>
        <text className="label" x="180" y="258" textAnchor="middle">
          Every quotation checked
        </text>
        <text className="label" x="180" y="284" textAnchor="middle">
          word for word by code
        </text>
        <text className="label" x="180" y="474" textAnchor="middle">
          Sealed record that
        </text>
        <text className="label" x="180" y="500" textAnchor="middle">
          can be replayed
        </text>

        <path className="arrow-line" pathLength={1} d="M180 108 V200" />
        <polyline className="arrow-head" points="170,190 180,200 190,190" />
        <path className="arrow-line" pathLength={1} d="M180 328 V420" />
        <polyline className="arrow-head" points="170,410 180,420 190,410" />
      </svg>
    </>
  );
}
