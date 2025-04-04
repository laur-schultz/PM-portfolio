import Image from "next/image"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-10 bg-gray-100 dark:bg-gray-800" suppressHydrationWarning={true}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What colleagues and stakeholders say about my product leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="mb-4 text-gray-700 dark:text-gray-300">
              <Quote className="h-8 w-8" />
            </div>
            <p className="mb-6 italic">
              "Lauren was a critical member of the Marketing leadership ... and emerged as a standout performer in terms
              of team motivation and task execution. Her keen sense of pragmatism and work quality eliminates problems
              before they become problems, which I valued very highly."
            </p>
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/pm-portfolio/placeholder.svg?height=50&width=50" alt="Thomas Kramer" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-semibold">Thomas Kramer</h4>
                <p className="text-sm text-muted-foreground">CEO, Measure Studio</p>
              </div>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="mb-4 text-gray-700 dark:text-gray-300">
              <Quote className="h-8 w-8" />
            </div>
            <p className="mb-6 italic">
              "Lauren is a triple threat, as she possesses a keen intellect, ruthless competence, and genuine enthusiasm
              for, not only her work, but also the online video industry."
            </p>
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/pm-portfolio/placeholder.svg?height=50&width=50" alt="Mark Heyert" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-semibold">Mark Heyert</h4>
                <p className="text-sm text-muted-foreground">Counsel</p>
              </div>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="mb-4 text-gray-700 dark:text-gray-300">
              <Quote className="h-8 w-8" />
            </div>
            <p className="mb-6 italic">"Proactive, efficient and personable. Lauren gets it done."</p>
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src="/pm-portfolio/placeholder.svg?height=50&width=50" alt="Chris Cunningham" fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-semibold">Chris Cunningham</h4>
                <p className="text-sm text-muted-foreground">Senior Director, Riot Games</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

