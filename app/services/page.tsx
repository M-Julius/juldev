"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Search } from "lucide-react";
import servicesBg from "../assets/local-data-header-blur.webp";

const services = [
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile Development",
    description:
      "Custom mobile applications built with modern technologies and best practices for iOS and Android.",
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience.",
  },
  {
    icon: <Code2 className="h-12 w-12" />,
    title: "Frontend Development",
    description:
      "Custom frontend applications built with modern technologies and best practices for web.",
  },
  {
    icon: <Search className="h-12 w-12" />,
    title: "Problem Solving",
    description: "Solving problems with code and algorithms.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <main className="flex-1">
      <section
        className="min-h-screen py-20 relative"
        style={{
          backgroundImage: `url(${servicesBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center 5%",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="container px-4 mt-10 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-muted-foreground"
                >
                  {"{"}&quot;
                </motion.span>
                <motion.h1
                  variants={titleVariants}
                  className="text-primary font-bold"
                >
                  _services
                </motion.h1>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-muted-foreground"
                >
                  &quot;{"}"}
                </motion.span>
              </div>
              <motion.p
                variants={titleVariants}
                className="text-muted-foreground"
              >
                What I can do for you
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={serviceVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="group p-6 border rounded-lg hover:border-primary transition-all"
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-primary transform-gpu transition-transform duration-300 group-hover:scale-110"
                    >
                      {service.icon}
                    </motion.div>
                    <motion.h3 className="text-xl font-bold transform-gpu transition-transform duration-300 group-hover:translate-x-1">
                      {service.title}
                    </motion.h3>
                    <motion.p className="text-muted-foreground transform-gpu transition-all duration-300 group-hover:opacity-90">
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
