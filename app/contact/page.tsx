"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2, Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "./schema";
import { motion } from "framer-motion";
import contactBg from "../assets/local-data-header-blur.webp";

const contactInfo = {
  email: "mjulius.dev@gmail.com".split("").map((char, i) => ({ char, id: i })),
  phone: "+62 813-6672-4126".split("").map((char, i) => ({ char, id: i })),
  location: "Lahat, Indonesia".split("").map((char, i) => ({ char, id: i })),
};

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

const contactInfoVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "service_1p23wom",
        "template_mcuph3u",
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_name: "M Julius Saputra",
        },
        "sp3V86KfTTg00UItn"
      );

      if (result.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-1">
      <section
        className="min-h-screen py-20 relative"
        style={{
          backgroundImage: `url(${contactBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center 5%",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="container px-4 top-10 relative">
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
                  _contact
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
                Get in touch with me
              </motion.p>
            </div>

            <div className="space-y-12 sm:space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold sm:hidden mb-6"
              >
                Contact Information
              </motion.h2>

              <motion.div
                variants={contactInfoVariants}
                className="max-w-3xl mx-auto px-4 sm:px-0"
              >
                <motion.div
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 sm:gap-4"
                  variants={containerVariants}
                >
                  {[
                    {
                      icon: <Mail className="w-5 h-5" />,
                      data: contactInfo.email,
                      label: "Email",
                      description: "Send me an email",
                    },
                    {
                      icon: <Phone className="w-5 h-5" />,
                      data: contactInfo.phone,
                      label: "Phone",
                      description: "Give me a call",
                    },
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      data: contactInfo.location,
                      label: "Location",
                      description: "Based in",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={contactInfoVariants}
                      className="group flex items-start sm:items-center p-4 sm:p-3 rounded-xl
                        sm:rounded-none
                        bg-secondary/30 sm:bg-transparent
                        hover:bg-secondary/50 sm:hover:bg-transparent
                        transition-all duration-300 -mx-4 sm:mx-0
                        border-b border-secondary/50 sm:border-none
                        sm:min-w-[200px] sm:justify-center"
                    >
                      <div
                        className="flex items-center justify-center 
                        w-10 h-10 rounded-full bg-primary/10 
                        text-primary mr-4 sm:mr-3
                        group-hover:scale-110 transition-transform duration-300"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-base sm:text-sm font-medium">
                          {item.data.map(({ char, id }) => (
                            <motion.span
                              key={id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.5 + id * 0.02,
                              }}
                              className="inline-block"
                            >
                              {char}
                            </motion.span>
                          ))}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-2 sm:hidden">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={formVariants}
                className="max-w-2xl mx-auto w-full pt-6 sm:pt-0"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl font-bold sm:hidden mb-8"
                >
                  How Can I Help You?
                </motion.h2>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <motion.div
                      className="space-y-6"
                      variants={containerVariants}
                    >
                      {[
                        { name: "name", label: "Name", type: "text" },
                        { name: "email", label: "Email", type: "email" },
                        { name: "subject", label: "Subject", type: "text" },
                        { name: "message", label: "Message", type: "textarea" },
                      ].map((field, index) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          }}
                          className="w-full"
                        >
                          <FormField
                            control={form.control}
                            name={
                              field.name as keyof z.infer<typeof formSchema>
                            }
                            render={({ field: fieldProps }) => (
                              <FormItem>
                                <FormLabel className="text-foreground/90 font-medium">
                                  {field.label}
                                </FormLabel>
                                <FormControl>
                                  {field.type === "textarea" ? (
                                    <Textarea
                                      placeholder={`Enter your ${field.name}`}
                                      className="min-h-[150px] bg-secondary/50 border-muted-foreground/20 
                                        rounded-2xl px-4 py-3
                                        shadow-sm hover:border-primary/50 
                                        focus:border-primary focus:ring-1 focus:ring-primary 
                                        transition-all duration-300 
                                        focus:scale-[1.01]
                                        [-webkit-autofill:hover]:!bg-secondary/50
                                        [-webkit-autofill:focus]:!bg-secondary/50
                                        [-webkit-autofill]:!bg-secondary/50
                                        [-webkit-autofill]:shadow-[0_0_0_30px_hsl(var(--secondary))_inset]
                                        placeholder:text-muted-foreground/50"
                                      {...fieldProps}
                                    />
                                  ) : (
                                    <Input
                                      type={field.type}
                                      placeholder={`Enter your ${field.name}`}
                                      className="h-12 bg-secondary/50 border-muted-foreground/20 
                                        rounded-2xl px-4
                                        shadow-sm hover:border-primary/50 
                                        focus:border-primary focus:ring-1 focus:ring-primary 
                                        transition-all duration-300 
                                        focus:scale-[1.01]
                                        [-webkit-autofill:hover]:!bg-secondary/50
                                        [-webkit-autofill:focus]:!bg-secondary/50
                                        [-webkit-autofill]:!bg-secondary/50
                                        [-webkit-autofill]:shadow-[0_0_0_30px_hsl(var(--secondary))_inset]
                                        placeholder:text-muted-foreground/50"
                                      {...fieldProps}
                                    />
                                  )}
                                </FormControl>
                                <FormMessage className="text-sm font-medium text-destructive" />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6"
                    >
                      <Button
                        type="submit"
                        className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 
                          text-primary-foreground shadow-md hover:shadow-lg
                          transition-all duration-300"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
