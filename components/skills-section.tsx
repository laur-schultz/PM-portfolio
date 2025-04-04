import { LineChart, Users, Kanban, Target, Presentation, Puzzle } from "lucide-react"

export function SkillsSection() {
  return (
    <section id="skills" className="py-10 bg-gray-100 dark:bg-gray-800" suppressHydrationWarning={true}>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Core competencies that drive my career and growth</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <Kanban className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold">Product Strategy</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Developing vision, roadmaps and go-to-market strategies that align with business objectives.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Roadmapping
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                OKRs
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Sprint Planning
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Backlog Management
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Market Analysis
              </span>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold">User Experience</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Championing user-centered design and research to create products people love.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                User Research
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Usability Testing
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Personas
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Journey Mapping
              </span>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <LineChart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold">Data Analysis</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Leveraging metrics and analytics to make informed product decisions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                A/B Testing
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                KPIs
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Analytics
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                User Metrics
              </span>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <Presentation className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold">Stakeholder Management</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Building consensus and aligning diverse teams toward common product goals.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Communication
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Negotiation
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Leadership
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Collaboration
              </span>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <Puzzle className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold">Content Strategy</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Comprehensive planning and analysis, guiding creation, management, and distribution
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Audience Development
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Copywriting
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Content Creation
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Brand Awareness
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                SEO
              </span>
            </div>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3">
                <Target className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold">Product Marketing</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Crafting compelling messaging and positioning to drive product adoption.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Go-to-Market
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Positioning
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                Competitive Analysis
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm">
                User Adoption
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

