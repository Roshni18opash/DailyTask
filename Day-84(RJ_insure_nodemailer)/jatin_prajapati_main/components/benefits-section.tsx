"use client";

import { motion } from "framer-motion";
import { IndianRupee, Zap, HeartHandshake, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: IndianRupee,
    title: "Save tax upto Rs. 67,500",
    description: "By buying the right insurance plans you can maximize your tax savings under Section 80C and 80D.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Zap,
    title: "Superquick and Easy!",
    description: "No paperwork required. Our process is effortless and 100% digital for your convenience.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: HeartHandshake,
    title: "Hassle-free claims",
    description: "Experience cashless and speedy claim settlements with dedicated support throughout.",
    color: "bg-sky-500/10 text-sky-600",
  },
];

const videos = [
  {
    title: "Why buy your insurance through an Advisor?",
    thumbnail: "advisor",
  },
  {
    title: "How to Save Tax with Insurance?",
    thumbnail: "tax",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Benefits
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground lg:text-4xl">
            How you can save money
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Discover the advantages of getting your insurance through a certified advisor
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-xl"
            >
              {/* Decorative gradient */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:scale-150" />
              
              <div className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${benefit.color}`}>
                <benefit.icon className="h-7 w-7" />
              </div>
              
              <h3 className="relative mb-3 text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              
              <p className="relative text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* How it Works Videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Learn More
          </span>
          <h2 className="mb-4 text-balance text-2xl font-bold text-foreground lg:text-3xl">
            How it works
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10"
            >
              <div className="flex aspect-video items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  >
                    <Play className="h-7 w-7 translate-x-0.5" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
