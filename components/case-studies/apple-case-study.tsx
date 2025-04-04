import Image from "next/image"

export function AppleCaseStudy() {
  return (
    <div className="space-y-6">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <Image
          src="/pm-portfolio/placeholder.svg?height=400&width=800"
          alt="Apple Product Development"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Apple Product Development Research</h3>

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

        <div className="space-y-4">
          <section>
            <h4 className="text-xl font-semibold mb-2">Overview</h4>
            <p>
              Conducted comprehensive market research and user surveys to define consumer personas for Beats by Dre,
              influencing product line development and informing C-suite decisions.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Challenge</h4>
            <p>Apple was exploring potential new product lines for Beats by Dre and needed to understand:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Current market landscape and competitive positioning</li>
              <li>Target audience preferences and behaviors</li>
              <li>Potential product-market fit for new offerings</li>
              <li>Brand perception among different consumer segments</li>
              <li>Price sensitivity for various product categories</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Approach</h4>
            <p>I implemented a multi-faceted research strategy:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Conducted 12 focus groups across different demographic segments</li>
              <li>Designed and analyzed quantitative surveys with over 2,000 respondents</li>
              <li>Performed comprehensive competitive analysis of 15 market players</li>
              <li>Created detailed user personas based on research findings</li>
              <li>Mapped consumer journeys for different product categories</li>
              <li>Analyzed pricing strategies across the competitive landscape</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Solution</h4>
            <p>The research deliverables included:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Five detailed user personas with demographic and psychographic profiles</li>
              <li>Comprehensive competitive analysis report</li>
              <li>Market opportunity assessment for three potential product categories</li>
              <li>Brand perception analysis across different consumer segments</li>
              <li>Pricing strategy recommendations</li>
              <li>Executive presentation for C-suite stakeholders</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Results</h4>
            <p>The research had significant impact:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Research findings were incorporated into a presentation to Apple's CEO, Tim Cook</li>
              <li>Identified two high-potential product categories for development</li>
              <li>Clarified target markets for marketing and product teams</li>
              <li>Informed product feature prioritization</li>
              <li>Guided pricing strategy for new product lines</li>
              <li>Established a research methodology for future product exploration</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Key Learnings</h4>
            <p>This project provided valuable insights:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The importance of both qualitative and quantitative research methods</li>
              <li>The value of detailed user personas in guiding product decisions</li>
              <li>The need for clear, actionable insights when presenting to executive stakeholders</li>
              <li>The benefits of a structured research methodology</li>
              <li>The critical role of market research in reducing product development risk</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

