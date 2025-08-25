"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
            Hi, I&apos;m <span className="gradient-text">Dhanashree S Hosalli</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Aspiring Data Analyst &amp; Computer Science student. Proficient in Python,
            SQL, Java, and C with hands-on experience in AI/ML and data visualization.
            Selected for Samsung Innovation Campus AIML program.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a href="https://github.com/Dhanuhosalli" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Github size={18}/> GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/dhanashree-hosalli-453659279" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Linkedin size={18}/> LinkedIn
              </Button>
            </a>
            <a href="https://www.instagram.com/dhanashree_hosalli3?igsh=MXRmYW96M3p0anU4dA==" target="_blank" rel="noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                <Instagram size={18}/> Instagram
              </Button>
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            Based in Hubli, Karnataka, India • Email: dhanashreehosalli3@gmail.com • +91 8971303105
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-border p-4 md:p-6 bg-card shadow-xl w-full max-w-md mx-auto md:mx-0"
        >
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/d3.jpg"
              alt="Dhanashree S Hosalli"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
