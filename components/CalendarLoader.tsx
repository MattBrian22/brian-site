"use client";

import { useState } from "react";

type Option = { label: string; url: string };

// Nothing from cal.com is requested until the visitor picks a calendar.
export default function CalendarLoader({
  heading,
  options,
}: {
  heading: string;
  options: Option[];
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : options[selected];

  return (
    <div>
      <h3 className="band-h3">{heading}</h3>

      <div className="cal-choices">
        {options.map((option, i) => (
          <button
            key={option.url}
            type="button"
            className="btn btn-ghost"
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {active && (
        <iframe
          className="cal-frame"
          title={`Calendar: ${active.label}`}
          src={`${active.url}?embed=true`}
          loading="lazy"
        />
      )}
    </div>
  );
}
