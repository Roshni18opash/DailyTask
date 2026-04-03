"use client";

import { motion } from "framer-motion";
import { Shield, Award, MapPin, Languages, FileCheck } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "159", label: "Policies Sold", icon: FileCheck },
  { value: "32", label: "Courses Completed", icon: Award },
  { value: "7", label: "Years of Experience", icon: Shield },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">TurtleMint</span>
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            View Certificate
          </Button>
        </motion.div>

        {/* Main Hero Content */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
          {/* Left - Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="relative mb-6">
              <Avatar className="h-32 w-32 border-4 border-primary/20 shadow-xl">
                <AvatarFallback className="bg-primary/10 text-3xl font-bold text-primary">
                  JP
                </AvatarFallback>
              </Avatar>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="absolute -bottom-2 -right-2 rounded-full bg-primary p-2 shadow-lg"
              >
                <Shield className="h-5 w-5 text-primary-foreground" />
              </motion.div>
            </div>

            <Badge variant="secondary" className="mb-3">
              Certified Insurance Advisor
            </Badge>

            <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Jatin Prajapati
            </h1>

            <p className="mb-6 max-w-md text-pretty text-lg text-muted-foreground">
              General and Life Insurance Advisor helping you pick the perfect plan based on your needs.
            </p>

            {/* Quick Info Tags */}
            <div className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Surat
              </div>
              <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                <Languages className="h-4 w-4 text-primary" />
                English, Hindi, Gujarati
              </div>
            </div>

            <Button size="lg" className="shadow-lg shadow-primary/25">
              <FileCheck className="mr-2 h-5 w-5" />
              View Certificate
            </Button>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid w-full max-w-md gap-4 lg:max-w-none lg:flex-1"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-50%] rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
