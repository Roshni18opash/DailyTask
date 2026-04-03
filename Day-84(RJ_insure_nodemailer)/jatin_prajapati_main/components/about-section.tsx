"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building2, Users, ShieldCheck } from "lucide-react";

const highlights = [
  "7 years of experience in General and Life insurance",
  "Policies from India&apos;s most trusted insurance providers",
  "Personalized plans based on your needs",
  "Expert guidance throughout the process",
];

export function AboutSection() {
  return (
    <section className="bg-secondary/30 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary"
            >
              About Me
            </motion.span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground lg:text-4xl">
              Your Trusted Insurance Partner
            </h2>
            <p className="mb-8 text-pretty leading-relaxed text-muted-foreground">
              Hi, my name is Jatin Prajapati. I have been a General and Life insurance advisor for 
              the last 7 years. Let me help you pick the perfect plan based on your needs. I will 
              only offer you policies from India&apos;s most trusted insurance providers.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground" dangerouslySetInnerHTML={{ __html: item }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Trust Indicators */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Building2, title: "Trusted Providers", desc: "Top insurance companies" },
              { icon: Users, title: "Happy Clients", desc: "159+ policies sold" },
              { icon: ShieldCheck, title: "Certified Advisor", desc: "32 courses completed" },
              { icon: CheckCircle2, title: "Claims Support", desc: "End-to-end assistance" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
