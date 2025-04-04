import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ContactSection() {
  return (
    <section id="contact" className="py-10" suppressHydrationWarning={true}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of the
            channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">laur.schultz@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">(+1) 401-465-2947</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Los Angeles, CA</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-medium mb-4">Connect on Social Media</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/schultzlauren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center",
                      "hover:bg-gray-700 hover:text-white transition-colors duration-200",
                    )}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/laurenschultz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center",
                      "hover:bg-gray-700 hover:text-white transition-colors duration-200",
                    )}
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://instagram.com/adventurous_aardvark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center",
                      "hover:bg-gray-700 hover:text-white transition-colors duration-200",
                    )}
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/pm-portfolio/placeholder.svg?height=320&width=320"
                alt="Lauren Schultz"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-muted-foreground">Looking forward to connecting with you!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

