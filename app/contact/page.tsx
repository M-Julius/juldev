"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
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

const contactInfo = {
  email: "mjulius.dev@gmail.com".split("").map((char, i) => ({ char, id: i })),
  phone: "+62 813-6672-4126".split("").map((char, i) => ({ char, id: i })),
  location: "Jakarta, Indonesia".split("").map((char, i) => ({ char, id: i })),
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
      <section className="min-h-screen py-20 md:pt-20">
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
                  _contact
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
                Get in touch with me
              </motion.p>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl font-bold"
                  >
                    Contact Information
                  </motion.h2>
                  <div className="space-y-4">
                    {[
                      { icon: <Mail className="text-primary flex-shrink-0" />, data: contactInfo.email },
                      { icon: <Phone className="text-primary flex-shrink-0" />, data: contactInfo.phone },
                      { icon: <MapPin className="text-primary flex-shrink-0" />, data: contactInfo.location }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="w-full flex items-center space-x-3 hover:text-primary transition-colors"
                      >
                        {item.icon}
                        <span className="text-muted-foreground flex">
                          {item.data.map(({ char, id }) => (
                            <motion.span
                              key={id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 + id * 0.02 }}
                              className="inline-block"
                              style={{
                                ["--char" as string]: `"${char}"`,
                                content: "var(--char)",
                              }}
                              aria-hidden="true"
                            >
                              {char}
                            </motion.span>
                          ))}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      {[
                        { name: "name", label: "Name", type: "text" },
                        { name: "email", label: "Email", type: "email" },
                        { name: "subject", label: "Subject", type: "text" },
                        { name: "message", label: "Message", type: "textarea" }
                      ].map((field, index) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                          <FormField
                            control={form.control}
                            name={field.name as keyof z.infer<typeof formSchema>}
                            render={({ field: fieldProps }) => (
                              <FormItem>
                                <FormLabel>{field.label}</FormLabel>
                                <FormControl>
                                  {field.type === "textarea" ? (
                                    <Textarea
                                      placeholder={`Enter your ${field.name}`}
                                      className="min-h-[150px] bg-secondary/50"
                                      {...fieldProps}
                                    />
                                  ) : (
                                    <Input
                                      type={field.type}
                                      placeholder={`Enter your ${field.name}`}
                                      className="bg-secondary/50"
                                      {...fieldProps}
                                    />
                                  )}
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
          </div>
        </div>
      </section>
    </main>
  );
}
