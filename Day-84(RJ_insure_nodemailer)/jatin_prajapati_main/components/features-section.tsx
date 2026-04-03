"use client"

import { motion } from "framer-motion"
import {
  Shield,
  TrendingUp,
  Users,
  Clock,
  PiggyBank,
  HeadphonesIcon,
} from "lucide-react"
import { FeatureCard } from "./feature-card"

const features = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description:
      "Get complete protection for your family with our extensive insurance plans covering health, life, and assets.",
  },
  {
    icon: TrendingUp,
    title: "Smart Investments",
    description:
      "Maximize your returns with AI-powered investment recommendations tailored to your financial goals.",
  },
  {
    icon: Users,
    title: "Expert Advisors",
    description:
      "Connect with certified financial advisors who guide you through every step of your financial journey.",
  },
  {
    icon: Clock,
    title: "Instant Claims",
    description:
      "Experience hassle-free claim settlements with our streamlined digital process and 24-hour resolution.",
  },
  {
    icon: PiggyBank,
    title: "Flexible Premiums",
    description:
      "Choose payment plans that suit your budget with our customizable premium options and zero hidden charges.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available round the clock to assist you with any queries or emergencies.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            Why Choose Us
          </motion.span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Financial Security,{" "}
            <span className="text-primary">Simplified</span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Experience seamless insurance and investment management with our
            industry-leading platform trusted by over 100,000 families
            nationwide.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
          >
            Get Started Today
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • Free consultation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
