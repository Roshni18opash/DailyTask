"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { UserCheck, Calculator, FileSearch, ShieldCheck, Play } from "lucide-react"

const steps = [
  {
    icon: UserCheck,
    title: "Connect with Advisor",
    description: "Get personalized guidance from a certified insurance expert",
  },
  {
    icon: FileSearch,
    title: "Analyze Your Needs",
    description: "We understand your requirements and financial goals",
  },
  {
    icon: Calculator,
    title: "Compare Plans",
    description: "Review multiple options from top insurance providers",
  },
  {
    icon: ShieldCheck,
    title: "Get Insured",
    description: "Complete paperless enrollment in minutes",
  },
]

const videos = [
  {
    title: "Why buy your insurance through an Advisor?",
    thumbnail: "https://img.youtube.com/vi/2d23q1BrXt8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=2d23q1BrXt8",
  },
  {
    title: "How to Save Tax with Insurance?",
    thumbnail: "https://img.youtube.com/vi/wGH8_6eD-Hc/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=wGH8_6eD-Hc",
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            Simplified Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Getting the right protection is now as easy as few clicks.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-card/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 h-full hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-8xl font-black text-primary/5 select-none transition-transform group-hover:scale-110">
                  0{index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-[10deg] transition-all duration-500">
                  <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
 
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 cursor-pointer block shadow-2xl"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500 shadow-2xl shadow-primary/40">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
