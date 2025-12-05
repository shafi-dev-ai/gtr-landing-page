import { type SVGProps, useId } from "react";

const InstagramIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  const gradientId = useId();
  const strokeGradientId = `${gradientId}-stroke`;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f58529" />
          <stop offset="0.25" stopColor="#f77737" />
          <stop offset="0.5" stopColor="#e1306c" />
          <stop offset="0.75" stopColor="#c13584" />
          <stop offset="1" stopColor="#833ab4" />
        </linearGradient>
        <linearGradient id={strokeGradientId} x1="6" y1="18" x2="18" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill={`url(#${gradientId})`} />
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="4"
        fill="none"
        stroke={`url(#${strokeGradientId})`}
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16.5" cy="7.5" r="1.2" fill="#fff" />
    </svg>
  );
};

export default InstagramIcon;
