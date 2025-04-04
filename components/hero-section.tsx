export function HeroSection() {
  return (
    <section className="py-10" suppressHydrationWarning={true}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Lauren Schultz</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
            Results-driven product leader with over 10 years of experience in digital products & platforms.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-black text-white px-8 text-sm font-medium shadow transition-colors hover:bg-gray-800"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

