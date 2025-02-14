import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
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

              <form className="space-y-6">
                <div className="space-y-4">
                  <Input type="text" placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="text" placeholder="Subject" />
                  <Textarea placeholder="Message" className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

