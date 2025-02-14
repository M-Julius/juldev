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
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl">
                <span className="text-muted-foreground">{"{"}&quot;</span>
                <h1 className="text-primary font-bold">_services</h1>
                <span className="text-muted-foreground">&quot;{"}"}</span>
              </div>
              <p className="text-muted-foreground">What I can do for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 border rounded-lg hover:border-primary transition-colors">
                  <div className="space-y-4">
                    <div className="text-primary">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

