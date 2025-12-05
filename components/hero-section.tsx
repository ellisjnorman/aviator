"use client"

import { AviatorLogo } from "./aviator-logo"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrame: number
    let time = 0

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const lineCount = 12
      const baseY = canvas.height * 0.65

      for (let i = 0; i < lineCount; i++) {
        const y = baseY + i * 15
        const alpha = 0.02 + i * 0.008
        const speed = 0.015 + i * 0.002
        const amplitude = 15 + i * 2
        const lineOffset = Math.sin(time * speed + i * 0.8) * amplitude

        ctx.beginPath()
        ctx.moveTo(-50, y + lineOffset)
        ctx.lineTo(canvas.width + 50, y - lineOffset * 0.6)
        ctx.strokeStyle = `rgba(200, 175, 120, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      const verticalLines = 3
      for (let i = 0; i < verticalLines; i++) {
        const x = canvas.width * (0.3 + i * 0.2)
        const alpha = 0.015
        const offset = Math.sin(time * 0.01 + i) * 10

        ctx.beginPath()
        ctx.moveTo(x + offset, canvas.height * 0.4)
        ctx.lineTo(x - offset * 0.5, canvas.height * 0.9)
        ctx.strokeStyle = `rgba(200, 175, 120, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      time += 1
      animationFrame = requestAnimationFrame(drawLines)
    }

    drawLines()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--background)_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <AviatorLogo className="w-20 h-20 mx-auto text-primary animate-subtle-float" />
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block">Aviator Global</span>
          <span className="block mt-2 text-primary/90">Holdings, LLC</span>
        </h1>

        <p
          className={`text-lg md:text-xl lg:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A private real-estate holding and investment company based in Virginia Beach.
        </p>

        <div
          className={`mt-20 flex justify-center items-center gap-4 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-primary/40" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent" />
      </div>
    </section>
  )
}
