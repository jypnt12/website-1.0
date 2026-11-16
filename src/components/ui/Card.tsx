import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  as?: "div" | "article" | "li";
};

export function Card({
  children,
  className = "",
  interactive = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={[
        "neu-raised p-6 sm:p-7",
        interactive ? "neu-interactive" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
