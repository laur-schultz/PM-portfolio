import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-10" suppressHydrationWarning={true}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A brief introduction to who I am and what I do</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <Image
                src="/pm-portfolio/placeholder.svg?height=320&width=320"
                alt="Profile"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Product Manager & Content Strategist </h3>
            <p className="mb-4">
              Throughout my career, I have proven expertise in data-driven decision-making and global product
              management, with a track record of delivering impactful solutions to users and stakeholders alike.
            </p>
            <p className="mb-6">
              I have spent over a decade working alongside some of the greatest entrepreneurs, creators, and innovators
              in the digital video, streaming, and influencer space on exciting projects that intersect entertainment
              and technology. In my career, I've been a part of groundbreaking startups and international conglomerates,
              combining my experience in online media with a love of creating and storytelling through Product.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

