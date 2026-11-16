import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLAnchorElement>["onClick"];
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[var(--shadow-raised-sm)] hover:brightness-[1.04]",
  secondary: "neu-raised-sm neu-interactive text-[var(--foreground)]",
  ghost:
    "bg-transparent text-[var(--foreground)] hover:bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)]",
};

const sizeClasses: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = props.className ?? "";

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-semibold transition-[transform,box-shadow,filter,background-color] duration-[var(--duration)] ease-[var(--ease-soft)]",
    variantClasses[variant],
    sizeClasses[size],
    variant === "primary" ? "neu-interactive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{props.children}</span>
      {props.icon}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        onClick={props.onClick}
        {...(props.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      aria-label={buttonProps["aria-label"]}
      onClick={buttonProps.onClick}
    >
      {content}
    </button>
  );
}
