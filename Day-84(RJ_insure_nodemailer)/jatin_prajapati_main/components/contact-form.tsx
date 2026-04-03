"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const insuranceTypes = [
  "Health Insurance",
  "Life Insurance",
  "Motor Insurance",
  "Term Insurance",
  "Investment Plans",
  "Travel Insurance",
];

export function ContactForm() {
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    query: "",
  });

  const toggleInsurance = (type: string) => {
    setSelectedInsurance((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, selectedInsurance });
  };

  return (
    <section className="bg-secondary/30 py-16" id="contact">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Get in Touch
            </span>
            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground lg:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mb-8 text-pretty leading-relaxed text-muted-foreground">
              Ready to secure your future? Fill out the form and I&apos;ll get back to you 
              with personalized insurance recommendations tailored to your needs.
            </p>

            {/* Trust badges */}
            <div className="space-y-4">
              {[
                "Free consultation with no obligations",
                "Compare plans from multiple insurers",
                "Get the best rates guaranteed",
                "24/7 claim support assistance",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/50 bg-card p-8 shadow-lg"
            >
              {/* Name Input */}
              <div className="mb-6">
                <Label htmlFor="name" className="mb-2 flex items-center gap-2 text-foreground">
                  <User className="h-4 w-4 text-primary" />
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              {/* Phone Input */}
              <div className="mb-6">
                <Label htmlFor="phone" className="mb-2 flex items-center gap-2 text-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  Your Contact Number <span className="text-destructive">*</span>
                </Label>
                <div className="flex gap-2">
                  <div className="flex h-10 items-center rounded-md border border-input bg-background px-3 text-sm text-muted-foreground">
                    +91
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="flex-1 bg-background"
                  />
                </div>
              </div>

              {/* Insurance Type Selection */}
              <div className="mb-6">
                <Label className="mb-3 block text-foreground">
                  Select the insurance you are interested in (Multi-select)
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {insuranceTypes.map((type) => (
                    <motion.div
                      key={type}
                      whileTap={{ scale: 0.98 }}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition-all ${
                        selectedInsurance.includes(type)
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-primary/50"
                      }`}
                      onClick={() => toggleInsurance(type)}
                    >
                      <Checkbox
                        checked={selectedInsurance.includes(type)}
                        onCheckedChange={() => toggleInsurance(type)}
                        className="pointer-events-none"
                      />
                      <span className="text-sm text-foreground">{type}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Query Input */}
              <div className="mb-6">
                <Label htmlFor="query" className="mb-2 flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Any specific queries (Optional)
                </Label>
                <Textarea
                  id="query"
                  placeholder="Tell me more about what you're looking for..."
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="min-h-[100px] bg-background"
                />
              </div>

              {/* Terms */}
              <p className="mb-6 text-xs text-muted-foreground">
                By clicking on &quot;Request Call&quot;, you agree to the{" "}
                <a href="#" className="text-primary underline hover:no-underline">
                  Terms &amp; Conditions
                </a>
                .
              </p>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary/25">
                <Phone className="mr-2 h-5 w-5" />
                Request Call
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
