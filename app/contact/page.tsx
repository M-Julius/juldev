"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import emailjs from '@emailjs/browser'
import { useState } from "react"

export default function Contact() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await emailjs.send(
        'service_1p23wom', // Replace with your EmailJS service ID
        'template_mcuph3u', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'M Julius Saputra',
        },
        'sp3V86KfTTg00UItn' // Replace with your EmailJS public key
      )

      if (result.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

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
                    <div className="flex items-center space-x-3">
                      <Mail className="text-primary" />
                      <span className="text-muted-foreground">mjulius.dev@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-primary" />
                      <span className="text-muted-foreground">+62 813-6672-4126</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-primary" />
                      <span className="text-muted-foreground">Jakarta, Indonesia</span>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input 
                    type="text" 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <Textarea 
                    name="message"
                    placeholder="Message" 
                    className="min-h-[150px]" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

