"use client";

type NewsletterFormProps = {
  placeholder: string;
  buttonLabel: string;
};

export function NewsletterForm({
  placeholder,
  buttonLabel,
}: NewsletterFormProps) {
  return (
    <form
      className="neu-inset flex flex-col gap-3 rounded-[var(--radius-pill)] p-2 sm:flex-row sm:items-center"
      onSubmit={(event) => event.preventDefault()}
      aria-label="Newsletter signup"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder={placeholder}
        className="min-h-11 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-[var(--muted)]"
      />
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-contrast)] shadow-[var(--shadow-raised-sm)] transition-[filter,transform] hover:brightness-[1.04] active:translate-y-px"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
