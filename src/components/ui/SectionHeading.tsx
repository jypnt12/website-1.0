type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={titleId} className="text-title text-[var(--foreground)]">
        {title}
      </h2>
      {description ? (
        <p className="text-muted mt-4 text-[1.05rem] leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
