"use client";

import { Button } from "@/components/ui/button";
import { techStackMap } from "@/components/icon/icon";
import { motion, useInView } from "framer-motion";
import resumeBg from "../assets/local-data-header-blur.webp";
import { useRef } from "react";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { skills, certificates, experience, education } from "@/lib/data";

const CertificateItem = ({
  cert,
  index,
}: {
  cert: (typeof certificates)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border-b border-border py-2 ${
        index === certificates.length - 1 ? "border-b-0" : ""
      }`}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 relative flex-shrink-0">
            <Image
              src={cert.image}
              alt={`${cert.name} logo`}
              fill
              sizes="48px"
              className="object-contain"
              unoptimized={cert.image.startsWith("https://")}
            />
          </div>
          <div className="space-y-1">
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors block"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {cert.name}
            </motion.a>
            <div className="text-sm text-muted-foreground">{cert.issuer}</div>
            <div className="text-xs text-muted-foreground">{cert.platform}</div>
          </div>
        </div>
        <span className="text-sm text-primary whitespace-nowrap">
          {cert.date}
        </span>
      </div>
    </motion.div>
  );
};

export default function Resume() {
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);

  const experienceInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
  });
  const educationInView = useInView(educationRef, {
    once: true,
    margin: "-100px",
  });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const certificatesInView = useInView(certificatesRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <main className="flex-1">
      <section className="min-h-screen py-20 relative bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${resumeBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 bg-background/80 backdrop-blur-[2px] sm:backdrop-blur-sm"
          style={{
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
        <div className="container px-4 mt-10 relative">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl">
                <span className="text-muted-foreground">{"{"}&quot;</span>
                <h1 className="text-primary font-bold">_resume</h1>
                <span className="text-muted-foreground">&quot;{"}"}</span>
              </div>
              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  onClick={() => {
                    toast({
                      title: "CV don't available yet",
                      description: "Please wait while we update my CV.",
                    });
                  }}
                  variant="default"
                >
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <motion.div ref={experienceRef} className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      experienceInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold"
                  >
                    Experience
                  </motion.h2>
                  <div className="space-y-8">
                    {experience.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                          experienceInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-6 border-l"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + index * 0.1,
                          }}
                          className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"
                        />
                        <div className="space-y-2">
                          <span className="text-sm text-primary">
                            {item.year}
                          </span>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-muted-foreground">
                            {item.company}
                          </p>
                          <div className="text-sm text-muted-foreground whitespace-pre-line">
                            {item.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div ref={educationRef} className="pt-8">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      educationInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-6"
                  >
                    Education
                  </motion.h2>
                  <div className="space-y-8">
                    {education.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                          educationInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-6 border-l"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + index * 0.1,
                          }}
                          className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"
                        />
                        <div className="space-y-2">
                          <span className="text-sm text-primary">
                            {item.year}
                          </span>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                          <div className="text-sm text-muted-foreground whitespace-pre-line">
                            {item.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div ref={skillsRef} className="space-y-6">
                  <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      skillsInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold"
                  >
                    Skills
                  </motion.h2>

                  <div className="space-y-4">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-medium mb-2"
                      >
                        Technical Skills
                      </motion.h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.technical.map((skill, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-secondary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                          >
                            {techStackMap[skill.icon]}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="font-medium mb-2 pt-4"
                      >
                        Soft Skills
                      </motion.h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.soft.map((skill, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.4 + index * 0.05,
                            }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-secondary px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="font-medium mb-2 pt-4"
                      >
                        Languages
                      </motion.h3>
                      <div className="space-y-2">
                        {skills.languages.map((lang, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.5 + index * 0.1,
                            }}
                            className="flex justify-between items-center"
                          >
                            <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                              {lang.language}
                            </span>
                            <span className="text-primary text-sm">
                              {lang.level}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div ref={certificatesRef} className="pt-8">
                  <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      certificatesInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-6"
                  >
                    Certifications
                  </motion.h2>
                  <div className="space-y-4">
                    {certificates.map((cert, index) => (
                      <CertificateItem key={index} cert={cert} index={index} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
