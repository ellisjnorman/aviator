import { AviatorLogo } from "./aviator-logo"

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <AviatorLogo className="w-10 h-10 text-primary/40" />

          <div className="text-center space-y-3">
            <p className="text-xs text-muted-foreground/50 tracking-[0.2em] uppercase">Aviator Global Holdings, LLC</p>
            <p className="text-xs text-muted-foreground/40">Virginia Beach, Virginia</p>
          </div>

          <div className="w-16 h-px bg-border/30" />

          <p className="text-[11px] text-muted-foreground/40 tracking-wide">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
