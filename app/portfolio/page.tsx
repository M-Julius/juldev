"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Calendar,
  Globe,
  Smartphone,
  Figma,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Category, Project, projects, ProjectType } from "@/lib/utils";
import { techStackMap } from "@/components/icon/icon";
import { cn } from "@/lib/utils";

const getTechStackIcon = (tech: string) => {
  const icon = techStackMap[tech.toLowerCase()];

  if (!icon) {
    return (
      <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-accent">
        <span className="text-xs">{tech}</span>
      </div>
    );
  }

  return icon;
};

const categories = [
  "All",
  Category.UI_UX_DESIGN,
  Category.MOBILE_DEVELOPMENT,
  Category.OPEN_SOURCE,
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    undefined
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      filter === "All" ? true : project.category.includes(filter)
    );
  }, [filter]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(undefined);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedProject!.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProject!.images.length) %
        selectedProject!.images.length
    );
  };

  const getIcon = (type: ProjectType) => {
    switch (type) {
      case "web":
        return <Globe className="h-5 w-5" />;
      case "mobile":
        return <Smartphone className="h-5 w-5" />;
      case "design":
        return <Figma className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

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
                <span className="text-muted-foreground">{"{"}&quot;</span>
                <h1 className="text-primary font-bold">_portfolio</h1>
                <span className="text-muted-foreground">&quot;{"}"}</span>
              </div>
              <p className="text-muted-foreground">
                Check out some of my latest projects
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.4, 0, 0.2, 1] // Smooth easing function
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  <Button
                    onClick={() => setFilter(category)}
                    variant={filter === category ? "default" : "outline"}
                    className="transition-colors duration-300"
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.9,
                      transition: {
                        duration: 0.3,
                        ease: [0.4, 0, 1, 1]
                      }
                    }}
                    className="group border border-border rounded-lg overflow-hidden"
                  >
                    <div className="relative aspect-[4.2/2.5]">
                      <Image
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-lg font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                            {project.category.join(", ")}
                          </p>
                          <Button
                            className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                            variant="outline"
                            onClick={() => openModal(project)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={closeModal}
        modal={true}
      >
        <AnimatePresence mode="wait">
          {selectedProject && (
            <DialogContent 
              className={cn(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200",
                "sm:rounded-lg",
                "sm:max-w-[600px] w-[95vw] border border-border max-h-[90vh] overflow-y-auto"
              )}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.95, 
                  y: 20,
                  transition: {
                    duration: 0.2,
                    ease: [0.4, 0, 1, 1]
                  }
                }}
              >
                <DialogHeader>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <DialogTitle style={{ marginBottom: "5px" }}>{selectedProject.title}</DialogTitle>
                    <DialogDescription>
                      {selectedProject.category.join(", ")}
                    </DialogDescription>
                  </motion.div>
                </DialogHeader>
                
                <motion.button
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </motion.button>

                <div className="grid gap-4 py-4">
                  <div className="relative aspect-video">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1]
                          }
                        }}
                        exit={{ 
                          opacity: 0, 
                          x: -100,
                          transition: {
                            duration: 0.2,
                            ease: [0.4, 0, 1, 1]
                          }
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                          alt={`${selectedProject.title} preview ${currentImageIndex + 1}`}
                          fill
                          sizes="(max-width: 600px) 95vw, 600px"
                          className="object-cover rounded-md"
                        />
                      </motion.div>
                    </AnimatePresence>
                    {selectedProject.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100 transition-opacity"
                          onClick={nextImage}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.3,
                        delay: 0.2,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: 20,
                      transition: {
                        duration: 0.2,
                        ease: [0.4, 0, 1, 1]
                      }
                    }}
                  >
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="ml-2">
                        {new Date(selectedProject.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-pre-line mt-2">
                      {selectedProject.description}
                    </p>
                    <div className="space-y-2 mt-4">
                      <h3 className="text-sm font-medium">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              transition: {
                                duration: 0.3,
                                delay: 0.3 + index * 0.1,
                                ease: [0.4, 0, 0.2, 1]
                              }
                            }}
                            exit={{ 
                              opacity: 0, 
                              scale: 0.8,
                              transition: {
                                duration: 0.2,
                                ease: [0.4, 0, 1, 1]
                              }
                            }}
                          >
                            {getTechStackIcon(tech)}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </main>
  );
}
