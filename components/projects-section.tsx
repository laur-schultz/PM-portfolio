"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { SamsungTVPlusCaseStudy } from "@/components/case-studies/samsung-tvplus-case-study"
import { CMSCaseStudy } from "@/components/case-studies/cms-case-study"
import { StruumCaseStudy } from "@/components/case-studies/struum-case-study"
import { AppleCaseStudy } from "@/components/case-studies/apple-case-study"
import { PocketwatchCaseStudy } from "@/components/case-studies/pocketwatch-case-study"
import { DisneyCaseStudy } from "@/components/case-studies/disney-case-study"

export function ProjectsSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalId: string) => {
    setActiveModal(modalId)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <section id="projects" className="py-10 w-full" suppressHydrationWarning={true}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key products and initiatives I've worked on during my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/pm-portfolio/placeholder.svg?height=400&width=600" alt="Project 1" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Samsung TV Plus Mobile</h3>
              <p className="text-muted-foreground mb-4">
                Led the largest mobile app redesign since launch, resulting in +12% viewing time and +15% user
                retention.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Product Strategy
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Mobile Development
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Retention
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  International Collaboration
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => openModal("samsung")}
                  className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Case Study
                </button>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/pm-portfolio/placeholder.svg?height=400&width=600" alt="Project 2" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">CMS Redevelopment</h3>
              <p className="text-muted-foreground mb-4">
                Managed redevelopment of internal publishing tool, reducing time spent by 20% through workflow
                optimizations and feature improvements.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Project Management
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  International Alignment
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => openModal("cms")}
                  className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Case Study
                </button>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/pm-portfolio/placeholder.svg?height=400&width=600" alt="Project 3" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">STRUUM App Launch</h3>
              <p className="text-muted-foreground mb-4">
                Led product strategy and development for STRUUM, achieving +20% user engagement and -11% churn rate
                within 3 months.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Streaming Video
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Agile Methodologies
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Cross-Platform Development
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => openModal("struum")}
                  className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Case Study
                </button>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/pm-portfolio/placeholder.svg?height=400&width=600" alt="Project 4" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Apple Product Development</h3>
              <p className="text-muted-foreground mb-4">
                Conducted market research and user surveys to define consumer personas, influencing product line
                development and C-suite decisions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Market Research
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Focus Groups
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Competitive Analysis
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => openModal("apple")}
                  className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Case Study
                </button>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/pm-portfolio/placeholder.svg?height=400&width=600" alt="Project 5" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pocket.watch OTT Distribution</h3>
              <p className="text-muted-foreground mb-4">
                Led development and programming to OTT services, launching partnerships with Roku, Amazon, and Hulu
                within 8 months.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Content Distribution
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Distribution
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Partnership Development
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => openModal("pocketwatch")}
                  className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Case Study
                </button>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg overflow-hidden border shadow-sm">
            <div className="relative h-48">
              <Image src="/pm-portfolio/placeholder.svg?height=400&width=600" alt="Project 6" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Disney Digital Channel</h3>
              <p className="text-muted-foreground mb-4">
                Led initiatives for Disney YouTube channels, achieving 190% increase in weekly views and generating $3M
                in revenue within one year.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Content Strategy
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Analytics
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
                  Revenue
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => openModal("disney")}
                  className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modals */}
      <Modal isOpen={activeModal === "samsung"} onClose={closeModal} title="Samsung TV Plus Mobile Case Study">
        <SamsungTVPlusCaseStudy />
      </Modal>

      <Modal isOpen={activeModal === "cms"} onClose={closeModal} title="CMS Redevelopment Case Study">
        <CMSCaseStudy />
      </Modal>

      <Modal isOpen={activeModal === "struum"} onClose={closeModal} title="STRUUM App Launch Case Study">
        <StruumCaseStudy />
      </Modal>

      <Modal isOpen={activeModal === "apple"} onClose={closeModal} title="Apple Product Development Case Study">
        <AppleCaseStudy />
      </Modal>

      <Modal
        isOpen={activeModal === "pocketwatch"}
        onClose={closeModal}
        title="Pocket.watch OTT Distribution Case Study"
      >
        <PocketwatchCaseStudy />
      </Modal>

      <Modal isOpen={activeModal === "disney"} onClose={closeModal} title="Disney Digital Channel Case Study">
        <DisneyCaseStudy />
      </Modal>
    </section>
  )
}

