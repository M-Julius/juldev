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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Category, Project, projects, ProjectType } from "@/lib/utils";
import { techStackMap } from "@/components/icon/icon";

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
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl">
                <span className="text-muted-foreground">{"{"}&quot;</span>
                <h1 className="text-primary font-bold">_portfolio</h1>
                <span className="text-muted-foreground">&quot;{"}"}</span>
              </div>
              <p className="text-muted-foreground">
                Check out some of my latest projects
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant={filter === category ? "default" : "outline"}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group border border-border rounded-lg overflow-hidden"
                >
                  <div className="relative aspect-[4.2/2.5]">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center p-4">
                        <h3 className="text-lg font-bold text-primary">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.category.join(", ")}
                        </p>
                        <Button
                          className="mt-4"
                          variant="outline"
                          onClick={() => openModal(project)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={closeModal}
        // Add these props to prevent scrolling
        modal={true}
      >
        {selectedProject && (
          <DialogContent className="sm:max-w-[600px] w-[95vw] border border-border rounded-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.category.join(", ")}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="relative aspect-video">
                <AnimatePresence initial={false} custom={currentImageIndex}>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={
                        selectedProject.images[currentImageIndex] ||
                        "/placeholder.svg"
                      }
                      alt={`${selectedProject.title} preview ${
                        currentImageIndex + 1
                      }`}
                      fill
                      sizes="(max-width: 600px) 95vw, 600px"
                      className="object-cover rounded-md"
                    />
                  </motion.div>
                </AnimatePresence>
                {selectedProject?.images?.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="ml-2">
                  {new Date(selectedProject.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {selectedProject.description}
              </p>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <div key={tech}>{getTechStackIcon(tech)}</div>
                  ))}
                </div>
              </div>
              {selectedProject.link && (
                <Button variant="outline" asChild className="w-full">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    {getIcon(selectedProject.type)}
                    <span className="ml-2">View Project</span>
                  </a>
                </Button>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
