"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const allFaqs = [
  {
    question: "What is insurance?",
    answer: "Insurance is a contract between the policyholder and insurer wherein the insurer promises to cover financial loss occurring due to certain unfortunate events.\n\nIn India, there are two broad categories of insurance:\n\nGeneral Insurance which includes Health Insurance, motor insurance etc.\nLife Insurance which is further divided into categories like ULIP, Term Insurance, Endowment, Annuity etc. \n",
  },
  {
    question: "Why is health insurance important?",
    answer: "Health insurance offers financial support for expenses that could be related to hospitalisation costs, cost of medicines or doctor consultation fees among others. Considering the rising medical inflation, health insurance could be considered a necessity.",
  },
  {
    question: "Why is Life Insurance important?",
    answer: "The core objective of Life insurance is to provide financial support to the family of the policyholder in case of his/her demise. Along with the death cover, some life insurance policies also come with a saving and investment component. Thus, life insurance is the key to financial security for policyholders and their families in times of uncertainty.\n",
  },
  {
    question: "Is it compulsory to buy Motor Insurance?",
    answer: "As per the Motor Vehicles Act, it is mandatory for all motor vehicles to have ‘third-party liability’ motor insurance cover in India.\n\nThird-party motor insurance covers damages & losses caused to a third-party i.e. person, vehicle or property.\n\nComprehensive car insurance covers both third-party liabilities and damages to your own car.",
  },
  {
    question: "What is a Personal Accidental Cover?",
    answer: "Personal accident insurance covers medical expenses arising due to an accident along with compensation in case of partial or permanent disability or death. \n",
  },
  {
    question: "What are the tax benefits available with an insurance policy?",
    answer: "Tax Benefits in Health Insurance: \n\nAs per Section 80D of the Income Tax Act, you can claim a deduction from the taxable income for the premium paid for a health insurance policy. Health insurance premium paid for your family and parents is also eligible for tax deduction under Section 80D.\n\nTax Benefits in Life Insurance:\n\nUnder section 80C, you can avail a deduction of upto ₹1.5 lakh for premiums that you pay towards a life insurance policy, while Section 10(10D) makes income on maturity and claim tax-free.\n",
  },
  {
    question: "What are riders/add-ons in an insurance policy?",
    answer: "A rider/add-on is an optional coverage or feature you can add to your insurance policy. Since these are additional features being added to the base policy they come at a very low price.",
  },
  {
    question: "What is premium in an insurance policy?",
    answer: "The insurance premium is the sum of money that is paid to buy an insurance policy.\n\nThe premium may depend on various factors such as the type of cover opted by the policyholder, age of the policyholder, and amount of coverage among others.\n",
  },
  {
    question: "What is sum insured/assured in an insurance policy?",
    answer: "The amount that the beneficiary of the life insurance policy will receive in case of death or after a set period is called sum assured.\n\nSum Insured is offered usually in case of a general insurance policy like Health or Motor insurance. It indicates the maximum amount of coverage that the policyholder will receive from the insurer.\n",
  },
  {
    question: "Who is a nominee in an insurance policy?",
    answer: "The person nominated by the policyholder to receive the benefits promised in the insurance policy in case of his/her unfortunate demise is called a nominee. Only a family member can be appointed as a nominee. Generally spouse, children or parents are appointed as nominees.\n",
  }
];

export function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedFaqs = showAll ? allFaqs : allFaqs.slice(0, 5);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-background/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-4xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            Help Center
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-6">
            Any <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Everything you need to know about insurance plans and processes.
          </p>
        </motion.div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AnimatePresence mode="popLayout">
              {displayedFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-[2rem] border border-white/5 bg-card/40 backdrop-blur-xl px-8 shadow-2xl transition-all data-[state=open]:border-primary/40 data-[state=open]:shadow-primary/5 mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="py-7 text-left text-lg font-bold text-foreground hover:text-primary hover:no-underline tracking-tight">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-8 text-muted-foreground text-lg leading-relaxed whitespace-pre-line font-medium border-t border-white/5 pt-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </Accordion>

          {!showAll && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="mt-12 text-center"
            >
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setShowAll(true)}
                className="rounded-2xl h-16 px-10 text-lg font-bold border-primary/20 hover:bg-primary/5 active:scale-95 transition-all group"
              >
                Read More FAQ
                <ChevronDown className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
