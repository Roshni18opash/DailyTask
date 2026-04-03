"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { IndianRupee, Zap, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: IndianRupee,
    title: "Save tax upto 67,500",
    description: "By buying the right insurance plans",
    image: "/benefit_tax_saving.png",
    color: "from-emerald-500/10 to-emerald-500/5",
    textColor: "text-emerald-700",
  },
  {
    icon: Zap,
    title: "Superquick and Easy!",
    description: "No paperwork, effortless & 100% digital",
    image: "/benefit_digital_process.png",
    color: "from-amber-500/10 to-amber-500/5",
    textColor: "text-amber-700",
  },
  {
    icon: HeartHandshake,
    title: "Hassle-free claims",
    description: "Experience cashless & speedy settlements",
    image: "/benefit_claims.png",
    color: "from-primary/10 to-primary/5",
    textColor: "text-primary",
  },
]

export function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-background/30" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            Key Advantages
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            How you can <span className="text-primary">save money</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            We combine expert knowledge with a passion for securing your family&apos;s future.
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-card/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 p-8 h-full flex flex-col items-center text-center relative z-10 transition-all duration-500 hover:border-primary/30 shadow-2xl">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight leading-tight uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="relative w-full aspect-square mt-auto bg-white/5 rounded-3xl p-4 overflow-hidden group-hover:bg-white/10 transition-colors">
                  <img src={benefit.image} alt={benefit.title} className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
