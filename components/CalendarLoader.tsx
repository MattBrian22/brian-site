"use client";

import { useState } from "react";
import { Ph } from "@/components/Marks";

const CAL_LINK = "[CAL.COM LINK]";
const isPlaceholder = CAL_LINK.startsWith("[");

// Nothing from cal.com is requested until the visitor clicks the button.
export default function CalendarLoader() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <h3 className="band-h3">Prefer to pick a time directly?</h3>

      {!loaded && (
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setLoaded(true)}
        >
          Load calendar
        </button>
      )}

      {loaded &&
        (isPlaceholder ? (
          <p>
            <Ph>{CAL_LINK}</Ph>
          </p>
        ) : (
          <iframe
            className="cal-frame"
            title="Calendar for booking a discovery call"
            src={`https://cal.com/${CAL_LINK}?embed=true`}
            loading="lazy"
          />
        ))}
    </div>
  );
}
