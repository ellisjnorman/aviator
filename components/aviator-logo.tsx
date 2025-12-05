export function AviatorLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M24 4L44 40H36L24 18L12 40H4L24 4Z" fill="currentColor" className="text-primary" />
      <path d="M14 34H34L30 40H18L14 34Z" fill="currentColor" className="text-primary/50" />
      {/* Subtle horizon line accent */}
      <path d="M8 44H40" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
    </svg>
  )
}
