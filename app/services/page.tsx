"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Search } from "lucide-react"

const services = [
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile Development",
    description: "Custom mobile applications built with modern technologies and best practices for iOS and Android.",
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience.",
  },
  {
    icon: <Code2 className="h-12 w-12" />,
    title: "Frontend Development",
    description: "Custom frontend applications built with modern technologies and best practices for web.",
  },
  {
    icon: <Search className="h-12 w-12" />,
    title: "Problem Solving",
    description: "Solving problems with code and algorithms.",
  },
]

export default function Services() {
  return (
    <main className="flex-1">
      <section className="min-h-screen py-20">
        <div className="container px-4 mt-10">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
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
                  _services
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-muted-foreground"
              >
                What I can do for you
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="p-6 border rounded-lg hover:border-primary transition-all"
                >
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5,
                        delay: 0.4 + index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="text-primary"
                    >
                      {service.icon}
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5,
                        delay: 0.5 + index * 0.1
                      }}
                      className="text-xl font-bold"
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.5,
                        delay: 0.6 + index * 0.1
                      }}
                      className="text-muted-foreground"
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

