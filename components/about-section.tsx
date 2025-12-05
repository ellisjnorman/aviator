"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    { label: "Discretion", description: "Confidential partnerships built on trust" },
    { label: "Stability", description: "Long-term asset stewardship" },
    { label: "Excellence", description: "Disciplined acquisition strategy" },
  ]

  return (
    <section ref={sectionRef} className="py-40 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="max-w-4xl mx-auto relative">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-6 block">Our Philosophy</span>
          <div className="flex justify-center">
            <div className={`w-20 h-px bg-primary/30 ${isVisible ? "animate-line-expand" : ""}`} />
          </div>
        </div>

        <p
          className={`text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground/90 font-extralight text-center mb-24 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Aviator Global Holdings is a privately-held entity focused on{" "}
          <span className="text-primary">disciplined real estate acquisition</span> and long-term asset stewardship.
        </p>

        <p
          className={`text-lg md:text-xl leading-relaxed text-muted-foreground font-light text-center mb-24 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We pursue selective partnerships with aligned principals, emphasizing discretion, stability, and enduring
          value creation.
        </p>

        <div
          className={`grid md:grid-cols-3 gap-12 md:gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {values.map((value, index) => (
            <div key={value.label} className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-8 h-px bg-primary/30 group-hover:w-12 group-hover:bg-primary/50 transition-all duration-500" />
              </div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-foreground/80 mb-3">{value.label}</h3>
              <p className="text-sm text-muted-foreground font-light">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div
          className={`flex justify-center mt-24 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-1 h-1 rotate-45 bg-primary/30" />
        </div>
      </div>
    </section>
  )
}
