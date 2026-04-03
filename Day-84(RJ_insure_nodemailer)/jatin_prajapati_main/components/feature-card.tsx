"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
      }}
      className="group relative"
    >
      {/* Glassmorphism card */}
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Icon container with animated background */}
        <motion.div
          className="relative mb-6 inline-flex"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-xl bg-primary/20 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>

        {/* Content */}
        <div className="relative">
          <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  )
}
