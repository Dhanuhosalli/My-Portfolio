"use client";
import { Button } from "./ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Dhanashree S Hosalli</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Aspiring Data Analyst & Computer Science student. Proficient in Python,
              SQL, Java, and C with hands-on experience in AI/ML and data visualization.
              Selected for Samsung Innovation Campus AIML program.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Dhanuhosalli" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Github size={18} /> GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/dhanashree-hosalli-453659279" target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin size={18} /> LinkedIn
                </Button>
              </a>
              <a
                href="https://www.instagram.com/dhanashree_hosalli3?igsh=MXRmYW96M3p0anU4dA=="
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <Instagram size={18} /> Instagram
                </Button>
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              Based in Hubli, Karnataka, India • Email: dhanashreehosalli3@gmail.com • +91 8971303105
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="rounded-3xl border border-border p-6 bg-card shadow-xl">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/d3.jpg"
                alt="Dhanashree S Hosalli"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
