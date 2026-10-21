"use client";

import { useState } from "react";

type Props = {
  url: string;
  title: string;
  heading?: string;
};

// Nothing from cal.com is requested until the visitor clicks the button.
export default function CalendarLoader({ url, title, heading }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {heading && <h3 className="band-h3">{heading}</h3>}

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
          title={title}
          src={`${url}?embed=true`}
          loading="lazy"
        />
      )}
    </div>
  );
}
