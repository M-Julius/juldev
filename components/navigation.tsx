/* eslint-disable react/jsx-no-comment-textnodes */
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Briefcase, Wrench, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { href: "/", label: "home", icon: <Home className="w-5 h-5" /> },
  { href: "/about", label: "about", icon: <User className="w-5 h-5" /> },
  { href: "/portfolio", label: "portfolio", icon: <Briefcase className="w-5 h-5" /> },
  { href: "/services", label: "services", icon: <Wrench className="w-5 h-5" /> },
  { href: "/resume", label: "resume", icon: <FileText className="w-5 h-5" /> },
  { href: "/contact", label: "contact", icon: <Mail className="w-5 h-5" /> },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-muted-foreground">// </span>
          <span className="text-primary">jul</span>
          <span className="text-muted-foreground">_dev</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <AnimatePresence initial={false} mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <AnimatePresence mode="wait">
              <motion.div
                key="drawer-content"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ 
                  opacity: 1, 
                  x: "0%",
                  transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 300,
                    duration: 0.3
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  x: "100%",
                  transition: {
                    type: "spring",
                    damping: 30,
                    duration: 0.2
                  }
                }}
                className="h-full bg-background p-6"
              >
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          duration: 0.3,
                          delay: index * 0.1,
                          ease: [0.33, 1, 0.68, 1]
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: -100,
                        transition: {
                          duration: 0.2,
                          delay: (navItems.length - index) * 0.05
                        }
                      }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 w-full p-3 rounded-lg
                          ${pathname === item.href 
                            ? "text-primary font-bold bg-primary/10" 
                            : "text-muted-foreground hover:bg-muted/60"
                          } transition-colors`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className={`${pathname === item.href ? "text-primary" : "text-muted-foreground"}`}>
                          {item.icon}
                        </span>
                        <span className="capitalize">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </AnimatePresence>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

