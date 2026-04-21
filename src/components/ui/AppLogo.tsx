export default function AppLogo({ size = 28 }: { size?: number }) {
  return (
    <div 
      className="organic-shape bg-primary flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20"
      style={{ width: size, height: size }}
    >
      <svg
        className="text-primary-foreground"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        style={{ width: size * 0.5, height: size * 0.5 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 100-18 9 9 0 000 18z M12 8v4 M12 16h.01"
        />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    </div>
  );
}
