import type { ReactNode } from "react";

type IconWellProps = {
  children: ReactNode;
  className?: string;
};

export function IconWell({ children, className = "" }: IconWellProps) {
  return (
    <div
      className={[
        "neu-inset inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] text-[var(--accent)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
