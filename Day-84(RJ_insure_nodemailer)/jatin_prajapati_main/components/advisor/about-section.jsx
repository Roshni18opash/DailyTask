"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Shield, Award } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative group"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border-2 border-primary/20 shadow-2xl relative shadow-primary/10 flex items-center justify-center">
              {/* Professional Consultation Photo */}
              <img
                src="/jatinprajapati.jpeg"
                alt="Consultation"
                className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />

              {/* Shield Overlay for Brand Authority */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 rotate-12">
                  <Shield className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-xl border border-white/10 flex items-center justify-center z-10 shadow-2xl"
              >
                <Award className="w-8 h-8 text-primary" />
              </motion.div>
            </div>

            {/* Authority Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-[2rem] shadow-2xl shadow-primary/40 border-4 border-background z-20"
            >
              <div className="text-center">
                <span className="block text-4xl font-black text-primary-foreground leading-none">07</span>
                <span className="text-[10px] uppercase font-black text-primary-foreground tracking-widest mt-1 block">Years Exp.</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black tracking-[0.2em] uppercase mb-6">
              Who I Am
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-8">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Jatin Prajapati</span>
            </h2>

            <div className="relative p-8 rounded-3xl bg-secondary/30 border border-white/5 backdrop-blur-xl">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10" />
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed italic">
                &quot;I have been a <span className="text-foreground font-bold not-italic">General and Life insurance advisor</span> for the last 7 years. My mission is to simplify your insurance journey with trusted plans and expert guidance tailored to your specific life goals.&quot;
              </p>
              <Quote className="absolute -bottom-4 -right-4 w-12 h-12 text-primary/10 rotate-180" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {["Life Insurance", "Health Insurance", "Motor Insurance", "Term Insurance"].map((tag, idx) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="px-6 py-2.5 rounded-2xl bg-card border border-primary/10 text-foreground text-sm font-bold shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
