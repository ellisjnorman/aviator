"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section ref={sectionRef} className="py-40 px-6 relative">
      <div className="max-w-xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-6 block">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-foreground">Contact</h2>
        </div>

        <div
          className={`bg-card/50 backdrop-blur-sm border border-border/50 p-10 md:p-14 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground tracking-wide">Aviator Global Holdings, LLC</p>
            <p className="text-xs text-muted-foreground/60 mt-2">Virginia Beach, Virginia</p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-px bg-primary/40 mx-auto mb-6" />
              <p className="text-foreground/80 font-light">Thank you for your inquiry.</p>
              <p className="text-muted-foreground text-sm mt-2">We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-0 h-12 text-foreground placeholder:text-muted-foreground/40"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-0 h-12 text-foreground placeholder:text-muted-foreground/40"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-0 resize-none text-foreground placeholder:text-muted-foreground/40"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-light tracking-[0.15em] uppercase text-xs h-12 transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>

              <p className="text-[11px] text-muted-foreground/60 text-center pt-4 leading-relaxed">
                For inquiries related to properties, partnerships, or legal correspondence.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
