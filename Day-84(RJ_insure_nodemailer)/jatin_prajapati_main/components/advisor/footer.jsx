"use client"

import { Shield, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background relative overflow-hidden pt-24 pb-12 border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-black tracking-tight text-foreground italic">RJ <span className="text-primary not-italic">Insure</span></span>
            </div>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering individuals and families with secure, transparent, and expert-led insurance solutions. Your future, our mission.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-black uppercase tracking-widest text-xs mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["About", "How it Works", "Benefits", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-bold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-black uppercase tracking-widest text-xs mb-8">Our Services</h3>
            <ul className="space-y-4">
              {["Life Insurance", "Health Insurance", "Motor Insurance", "Term Insurance"].map((item) => (
                <li key={item} className="text-sm text-muted-foreground font-bold hover:text-foreground transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-black uppercase tracking-widest text-xs mb-8">Get In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+918156090018" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  +91 81560 90018
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:roshnijp16@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                  roshnijp16@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs text-muted-foreground/60 font-medium">
            &copy; {new Date().getFullYear()} <span className="text-foreground">RJ Insure</span>. Crafted by Jatin Prajapati.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
