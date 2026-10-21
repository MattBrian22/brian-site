import type { ReactNode } from "react";

// A [PLACEHOLDER] that still needs real content.
export function Ph({ children }: { children: ReactNode }) {
  return <span className="ph">{children}</span>;
}

// Copy that must be verified before publishing.
export function Confirm({ children }: { children: ReactNode }) {
  return <span className="confirm">{children}</span>;
}
