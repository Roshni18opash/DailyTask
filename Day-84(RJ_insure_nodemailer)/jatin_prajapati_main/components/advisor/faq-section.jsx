"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of insurance do you offer?",
    answer:
      "I offer a comprehensive range of insurance products including Life Insurance, Health Insurance, Motor Insurance, Term Insurance, Investment Plans, and Travel Insurance from India's most trusted providers.",
  },
  {
    question: "How long does the policy issuance take?",
    answer:
      "Most policies are issued within 24-48 hours after completing all documentation. For health insurance, it may take 3-5 working days if medical tests are required.",
  },
  {
    question: "What documents are required for buying insurance?",
    answer:
      "Basic KYC documents like Aadhaar Card, PAN Card, and passport-size photographs. For health insurance, you may need medical history documents. I'll guide you through the entire process.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "I provide complete assistance in claim filing. You can reach out to me directly, and I'll help you navigate the entire claim process, ensuring quick and hassle-free settlements.",
  },
  {
    question: "Can I compare policies before buying?",
    answer:
      "Absolutely! I provide detailed comparisons of policies from multiple insurers, helping you understand the benefits, premiums, and coverage so you can make an informed decision.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-card/50" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Got questions? I&apos;ve got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
