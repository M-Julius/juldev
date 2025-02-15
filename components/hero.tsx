/* eslint-disable react/jsx-no-comment-textnodes */
export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dr4v4km4e/image/upload/v1739555375/IMG_0772_nqehyt.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>

      <div className="container px-4 relative">
        <div className="space-y-8 text-center">
          <p className="text-muted-foreground">// HI, I&apos;M M. JULIUS SAPUTRA, A...</p>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl lg:text-7xl">
              <span className="text-muted-foreground">{"{"}&quot;</span>
              <h1 className="text-primary font-bold">_mobile developer</h1>
              <span className="text-muted-foreground">&quot;{"}"}</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-6 h-12 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

