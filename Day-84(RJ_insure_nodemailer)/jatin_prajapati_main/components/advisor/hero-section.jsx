"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Briefcase, MapPin, Languages, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Briefcase, value: "159", label: "Policies Sold" },
  { icon: BookOpen, value: "32", label: "Courses Completed" },
  { icon: Award, value: "7", label: "Years of Experience" },
]

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(17,24,39,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/50 to-background p-[2px] shadow-2xl shadow-primary/20">
              <div className="w-full h-full rounded-[2.4rem] bg-card flex items-center justify-center overflow-hidden relative">
                <img
                  src="/advisor-portrait.png"
                  alt="Jatin Prajapati"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Animated Glow behind the image */}
            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl -z-10 animate-pulse" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-card/80 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-primary/20 flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Status</span>
                <span className="text-sm font-bold text-foreground">Verified Advisor</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Available for Consultation</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
                Jatin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Prajapati</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                Crafting secure futures with <span className="text-foreground">expert insurance strategies</span> and personal guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2 text-muted-foreground bg-card/30 px-3 py-1.5 rounded-xl border border-white/5">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Surat, Gujarat</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground bg-card/30 px-3 py-1.5 rounded-xl border border-white/5">
                <Languages className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">English, Hindi, Gujarati</span>
              </div>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative text-center p-6 rounded-3xl bg-card/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all shadow-lg hover:shadow-primary/5"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-foreground mb-1 mt-2 tracking-tighter">
                    {stat.value}<span className="text-primary">+</span>
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-80 h-16 text-lg font-bold rounded-2xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-[1.02] active:scale-95 group"
              >
                <a href="#contact">
                  Request a Call
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-16 px-10 text-lg font-bold rounded-2xl border-white/10 hover:bg-white/5 active:scale-95 transition-all"
              >
                <a href="/certificate.png" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
