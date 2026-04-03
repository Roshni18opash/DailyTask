import { Header } from "@/components/advisor/header"
import { HeroSection } from "@/components/advisor/hero-section"
import { AboutSection } from "@/components/advisor/about-section"
import { HowItWorksSection } from "@/components/advisor/how-it-works-section"
import { BenefitsSection } from "@/components/advisor/benefits-section"
import { ContactForm } from "@/components/advisor/contact-form"
import { FAQSection } from "@/components/advisor/faq-section"
import { Footer } from "@/components/advisor/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ContactForm />
      <FAQSection />
      <Footer />
    </main>
  )
}
