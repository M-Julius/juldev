"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import blurBg from "../assets/local-data-header-blur.webp";

export default function About() {
  return (
    <main className="flex-1">
      <section
        className="min-h-screen py-20 relative"
        style={{
          backgroundImage: `url(${blurBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="container px-4 relative top-10">
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground"
                >
                  {"{"}&quot;
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-primary font-bold"
                >
                  _about_me
                </motion.h1>
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground"
                >
                  &quot;{"}"}
                </motion.span>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-primary"
              >
                ...I have over 5 years of experience in mobile development,
                specializing in React Native and also have experience in Flutter too.
                Additionally, I have experience in web development using React, Next.js, and Laravel.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6 text-muted-foreground"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                As a mobile developer, I am passionate about creating seamless,
                high-quality applications that enhance user experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                My expertise lies in crafting elegant and efficient mobile
                solutions, ensuring both functionality and great design.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="pt-6"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button variant="default" size="lg">
                    Get in Touch
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
