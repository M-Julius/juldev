import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex-1">
      <section
        className="min-h-screen py-20 relative"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dr4v4km4e/image/upload/v1739555375/IMG_0772_nqehyt.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container px-4 relative top-10">
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl">
                <span className="text-muted-foreground">{"{"}&quot;</span>
                <h1 className="text-primary font-bold">_about_me</h1>
                <span className="text-muted-foreground">&quot;{"}"}</span>
              </div>

              <p className="text-xl text-primary">
                ...I have over 5 years of experience in mobile development,
                specializing in React Native and also have experience in Flutter too.
                Additionally, I have experience in web development using React, Next.js, and Laravel.
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p>
                As a mobile engineer, I am passionate about creating seamless,
                high-quality applications that enhance user experience.
              </p>
              <p>
                My expertise lies in crafting elegant and efficient mobile
                solutions, ensuring both functionality and great design.
              </p>
            </div>

            <div className="pt-6">
              <Link href="/contact">
                <Button variant="default" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
