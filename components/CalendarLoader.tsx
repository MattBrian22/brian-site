"use client";

import { useState } from "react";

const CAL_URL = "https://cal.com/matthew-brian-tahir-hfneah/20mindiscoverycall";

// Nothing from cal.com is requested until the visitor clicks the button.
export default function CalendarLoader() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <h3 className="band-h3">Prefer to pick a time directly?</h3>

      {!loaded ? (
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setLoaded(true)}
        >
          Load calendar
        </button>
      ) : (
        <iframe
          className="cal-frame"
          title="Calendar for booking a discovery call"
          src={`${CAL_URL}?embed=true`}
          loading="lazy"
        />
      )}
    </div>
  );
}
