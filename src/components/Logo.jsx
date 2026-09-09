import logoMarkSrc from "../assets/brand/logo-mark.webp";

/**
 * Best Enough Driving School logo.
 *
 * The mark is pulled directly from the client's printed flyer (cropped,
 * background removed, cleaned up) rather than redrawn — this is the actual
 * logo, not a recreation.
 */
export default function Logo({ variant = "dark", size = "md", showTagline = false, className = "" }) {
  const isDark = variant === "dark"; // "dark" = for use on dark backgrounds (light text)
  const textColor = isDark ? "text-white" : "text-ink";
  const subColor = isDark ? "text-mist" : "text-steel";

  const sizes = {
    sm: { mark: 40, title: "text-lg", tag: "text-[9px]" },
    md: { mark: 52, title: "text-xl", tag: "text-[10px]" },
    lg: { mark: 76, title: "text-3xl", tag: "text-xs" },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={s.mark} />
      <div className="leading-none">
        <div className={`font-display font-extrabold tracking-tight ${s.title} ${textColor}`} style={{ letterSpacing: "-0.01em" }}>
          BEST ENOUGH
          <span className="ml-2 inline-block align-middle bg-race-red text-white px-2 py-0.5 text-[0.4em] font-bold tracking-wide rounded-[2px] font-body">
            DRIVING SCHOOL
          </span>
        </div>
        {showTagline && (
          <div className={`font-body font-medium tracking-[0.2em] uppercase mt-1 ${s.tag} ${subColor}`}>
            The Best Driving In Mzansi
          </div>
        )}
      </div>
    </div>
  );
}

export function LogoMark({ size = 44, className = "" }) {
  return (
    <img
      src={logoMarkSrc}
      alt="Best Enough Driving School"
      width={size}
      height={size}
      style={{ width: size, height: "auto" }}
      className={className}
      aria-hidden="true"
    />
  );
}
