import type { ReactNode } from "react";
import type { IconName } from "@/types";

type IconProps = {
  name: IconName;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

const paths: Record<IconName, ReactNode> = {
  spark: (
    <path
      d="M12 3.5 13.6 8.4 18.5 10 13.6 11.6 12 16.5 10.4 11.6 5.5 10 10.4 8.4 12 3.5Z"
      fill="currentColor"
    />
  ),
  shield: (
    <path
      d="M12 3.5 18.5 6v5.2c0 4.1-2.7 7.8-6.5 9.3-3.8-1.5-6.5-5.2-6.5-9.3V6L12 3.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
  layers: (
    <>
      <path
        d="M12 4.5 19 8.2 12 11.9 5 8.2 12 4.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M5 12.2 12 15.9 19 12.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15.8 12 19.5 19 15.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  zap: (
    <path
      d="M13 3.5 6.5 13.2h5L11 20.5 17.5 10.8h-5L13 3.5Z"
      fill="currentColor"
    />
  ),
  check: (
    <path
      d="M5.5 12.2 9.8 16.4 18.5 7.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "arrow-right": (
    <path
      d="M5 12h12.5M13 6.5 18.5 12 13 17.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  menu: (
    <path
      d="M5 8h14M5 12h14M5 16h14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  ),
  close: (
    <path
      d="M7 7 17 17M17 7 7 17"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  ),
  star: (
    <path
      d="M12 3.8 14.2 9l5.5.5-4.2 3.7 1.3 5.4L12 15.8 7.2 18.6l1.3-5.4L4.3 9.5 9.8 9 12 3.8Z"
      fill="currentColor"
    />
  ),
  users: (
    <>
      <path
        d="M9 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M15.5 12a2.4 2.4 0 1 0 0-4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3.8 18.2c.8-2.5 2.9-4 5.2-4s4.4 1.5 5.2 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15 14.2c1.7.2 3.1 1.2 3.8 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  chart: (
    <>
      <path
        d="M5 18.5h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 15.5V10M12 15.5V7M16.5 15.5v-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  clock: (
    <>
      <circle
        cx="12"
        cy="12"
        r="7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 8.2v4.2l2.8 1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  globe: (
    <>
      <circle
        cx="12"
        cy="12"
        r="7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.5 12h15M12 4.5c2.2 2.3 3.3 4.8 3.3 7.5S14.2 17.2 12 19.5c-2.2-2.3-3.3-4.8-3.3-7.5S9.8 6.8 12 4.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </>
  ),
  heart: (
    <path
      d="M12 18.4s-6.5-4-6.5-8.2A3.6 3.6 0 0 1 12 7.4a3.6 3.6 0 0 1 6.5 2.8c0 4.2-6.5 8.2-6.5 8.2Z"
      fill="currentColor"
    />
  ),
  twitter: (
    <path
      d="M5.5 6.5 10.8 12.2 5.8 17.5h1.8l4.1-4.4 3.3 4.4h3.7l-5.5-6.1 4.8-5h-1.8l-3.8 4.1-3-4.1H5.5Zm3 1.2h1.1l7.3 9.6h-1.1L8.5 7.7Z"
      fill="currentColor"
    />
  ),
  linkedin: (
    <>
      <path
        d="M6.2 9.2h2.6v8.6H6.2V9.2Zm1.3-4.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10.8 9.2h2.5v1.2h.0c.4-.7 1.3-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.3v4.5h-2.6v-4c0-1 0-2.2-1.4-2.2s-1.6.1-1.6 2.1v4.1h-2.6V9.2Z"
        fill="currentColor"
      />
    </>
  ),
  github: (
    <path
      d="M12 3.5c-4.7 0-8.5 3.8-8.5 8.5 0 3.8 2.4 6.9 5.8 8.1.4.1.6-.2.6-.4v-1.5c-2.4.5-2.9-1-2.9-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.9-.2-3.9-1-3.9-4.3 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.4.9a8.3 8.3 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4.1-3.9 4.3.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4 3.4-1.2 5.8-4.3 5.8-8.1 0-4.7-3.8-8.5-8.5-8.5Z"
      fill="currentColor"
    />
  ),
  mail: (
    <>
      <rect
        x="4"
        y="6.5"
        width="16"
        height="11"
        rx="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m5.2 8.2 6.8 5 6.8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
