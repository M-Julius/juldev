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
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl">
                <span className="text-muted-foreground">{"{"}&quot;</span>
                <h1 className="text-primary font-bold">_contact</h1>
                <span className="text-muted-foreground">&quot;{"}"}</span>
              </div>
              <p className="text-muted-foreground">Get in touch with me</p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="w-full flex items-center space-x-3 hover:text-primary transition-colors">
                      <Mail className="text-primary flex-shrink-0" />
                      <span className="text-muted-foreground flex">
                        {contactInfo.email.map(({ char, id }) => (
                          <span
                            key={id}
                            className="inline-block"
                            style={{
                              ["--char" as string]: `"${char}"`,
                              content: "var(--char)",
                            }}
                            aria-hidden="true"
                          >
                            {char}
                          </span>
                        ))}
                      </span>
                    </div>

                    <div className="w-full flex items-center space-x-3 hover:text-primary transition-colors">
                      <Phone className="text-primary flex-shrink-0" />
                      <span className="text-muted-foreground flex">
                        {contactInfo.phone.map(({ char, id }) => (
                          <span
                            key={id}
                            className="inline-block"
                            style={{
                              ["--char" as string]: `"${char}"`,
                              content: "var(--char)",
                            }}
                            aria-hidden="true"
                          >
                            {char}
                          </span>
                        ))}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="text-primary flex-shrink-0" />
                      <span className="text-muted-foreground flex">
                        {contactInfo.location.map(({ char, id }) => (
                          <span
                            key={id}
                            className="inline-block"
                            style={{
                              ["--char" as string]: `"${char}"`,
                              content: "var(--char)",
                            }}
                            aria-hidden="true"
                          >
                            {char}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              className="bg-secondary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              className="bg-secondary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter subject"
                              className="bg-secondary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your message"
                              className="min-h-[150px] bg-secondary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
