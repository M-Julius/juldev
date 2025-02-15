"use client";

import { motion } from "framer-motion";

/* eslint-disable react/jsx-no-comment-textnodes */
export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dr4v4km4e/image/upload/v1739555375/IMG_0772_nqehyt.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-background/90 backdrop-blur-sm"
      />

      <div className="container px-4 relative">
        <div className="space-y-8 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground"
          >
            // HI, I&apos;M M. JULIUS SAPUTRA, A...
          </motion.p>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl lg:text-7xl">
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-muted-foreground"
              >
                {"{"}&quot;
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="text-primary font-bold"
              >
                _mobile developer
              </motion.h1>
              <motion.span 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-muted-foreground"
              >
                &quot;{"}"}
              </motion.span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.9,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="flex justify-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="w-6 h-12 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2"
            >
              <motion.div 
                animate={{ 
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-1 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

