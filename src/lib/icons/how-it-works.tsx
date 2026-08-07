import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M8.5 3.75h2.2c.5 0 .93.35 1.04.84l.55 2.45a1.1 1.1 0 0 1-.3 1.05l-1.2 1.2a12.3 12.3 0 0 0 5.12 5.12l1.2-1.2a1.1 1.1 0 0 1 1.05-.3l2.45.55c.49.11.84.54.84 1.04v2.2c0 .6-.49 1.1-1.1 1.1C11.5 18.8 5.2 12.5 5.2 4.85c0-.61.5-1.1 1.1-1.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 21s6.5-5.05 6.5-11A6.5 6.5 0 1 0 5.5 10c0 5.95 6.5 11 6.5 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function QuoteDocIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M7 3.75h7.2L18.5 8v12.25a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 3.75V8H18.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 12h4.5M9 15h3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="16.2" cy="15.4" r="3.1" fill="currentColor" />
      <path
        d="M15.35 15.05c.15-.35.5-.55.9-.55.55 0 .95.3.95.8 0 .35-.2.55-.7.75l-.55.25c-.35.15-.45.3-.45.55 0 .3.25.5.6.5.3 0 .55-.1.7-.35"
        stroke="white"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path d="M16.25 13.35v.7M16.25 16.85v.7" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function DoneBadgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12.2" r="7.1" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m9.1 12.3 1.9 1.9 4-4.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8 5.2 18.5 6.4l1.3.4-1.1.9.2 1.35-1.15-.65-1.15.65.25-1.35-1.15-.9 1.35-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const howItWorksIcons = {
  phone: PhoneIcon,
  mapPin: MapPinIcon,
  quoteDoc: QuoteDocIcon,
  doneBadge: DoneBadgeIcon,
};
