"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Send, ShieldCheck, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const insuranceTypes = [
  "Life Insurance",
  "Health Insurance",
  "Motor Insurance",
  "Term Insurance",
  "Investment Plans",
  "Travel Insurance",
]

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedTypes, setSelectedTypes] = useState([])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [query, setQuery] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [lastSubmittedName, setLastSubmittedName] = useState("")

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setLastSubmittedName(name)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, selectedTypes, query }),
      })

      if (response.ok) {
        setSubmitted(true)
        setName("")
        setPhone("")
        setSelectedTypes([])
        setQuery("")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
        <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 max-w-2xl mx-auto shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />
            <div className="w-24 h-24 bg-primary/20 text-primary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tight">Request Received!</h2>
            <p className="text-muted-foreground mb-10 text-xl font-medium leading-relaxed">
              Thank you for reaching out, <span className="text-foreground font-bold">{lastSubmittedName}</span>. 
              I&apos;ve received your details and will get back to you shortly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => {
                  const message = `Hello Jatin, I just filled a consultation request on your website. My name is ${lastSubmittedName}.`
                  window.open(`https://wa.me/918156090018?text=${encodeURIComponent(message)}`, "_blank")
                }} 
                size="lg" 
                className="w-full sm:w-auto h-16 px-8 rounded-2xl gap-3 bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/20 text-lg font-bold transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-6 h-6" />
                Confirm on WhatsApp
              </Button>
              <Button 
                onClick={() => setSubmitted(false)} 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto h-16 px-8 rounded-2xl border-white/10 hover:bg-white/5 text-lg font-bold"
              >
                Submit Another
              </Button>
              <Button 
                onClick={() => setSubmitted(false)} 
                variant="ghost" 
                size="lg" 
                className="w-full sm:w-auto h-16 px-8 rounded-2xl text-muted-foreground hover:text-foreground text-lg font-bold"
              >
                Close
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground/60 font-medium italic">
              Verification helps me prioritize your request.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to secure your future? Fill out the form and I&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-primary/10">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call directly</p>
                <p className="text-lg font-semibold text-foreground">+91 95123 78975</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-4">Why choose me?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  7+ years of industry experience
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  159+ policies successfully delivered
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  Partnerships with India&apos;s top insurers
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 border border-border shadow-xl shadow-primary/5"
            >
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Your Contact Number *</Label>
                  <div className="mt-2 flex gap-2">
                    <div className="flex items-center px-3 rounded-lg bg-muted text-muted-foreground text-sm border border-input">
                      +91
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="flex-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Select below the insurance you are interested in (Multi-select)</Label>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {insuranceTypes.map((type) => (
                      <div
                        key={type}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={type}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => toggleType(type)}
                        />
                        <label
                          htmlFor={type}
                          className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="query">Any specific queries (Optional)</Label>
                  <textarea
                    id="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tell us more about your requirements..."
                    rows={3}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  By clicking on &quot;Request Call&quot;, you agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms &amp; Conditions
                  </a>
                  .
                </p>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Request Call
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
