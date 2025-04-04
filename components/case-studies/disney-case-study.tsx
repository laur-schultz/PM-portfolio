import Image from "next/image"

export function DisneyCaseStudy() {
  return (
    <div className="space-y-6">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <Image src="/pm-portfolio/placeholder.svg?height=400&width=800" alt="Disney Digital Channel" fill className="object-cover" />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Disney Digital Channel Strategy</h3>

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

        <div className="space-y-4">
          <section>
            <h4 className="text-xl font-semibold mb-2">Overview</h4>
            <p>
              Led strategic initiatives for Disney YouTube channels, achieving a 190% increase in weekly views and
              generating $3M in revenue within one year.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Challenge</h4>
            <p>
              Disney needed to establish a stronger digital presence on YouTube while maintaining brand integrity. Key
              challenges included:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Adapting traditional Disney content for YouTube audiences</li>
              <li>Balancing brand guidelines with platform-specific best practices</li>
              <li>Coordinating across multiple Disney franchises and properties</li>
              <li>Developing a sustainable content strategy with measurable ROI</li>
              <li>Building audience engagement in a competitive landscape</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Approach</h4>
            <p>I implemented a comprehensive digital strategy:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Conducted in-depth analysis of YouTube trends and audience behavior</li>
              <li>Developed channel-specific content strategies for different Disney properties</li>
              <li>Created a data-driven content calendar aligned with key franchise moments</li>
              <li>Established clear KPIs and reporting frameworks</li>
              <li>Built cross-functional workflows between digital and traditional teams</li>
              <li>Implemented A/B testing for content formats and publishing strategies</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Solution</h4>
            <p>The digital channel strategy included:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>YouTube-optimized content formats for each Disney franchise</li>
              <li>Consistent publishing cadence with strategic tentpole moments</li>
              <li>Cross-promotion between channels and properties</li>
              <li>Audience development tactics to increase subscriber growth</li>
              <li>Monetization strategies including advertising and merchandise integration</li>
              <li>Performance optimization based on analytics insights</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Results</h4>
            <p>The digital strategy delivered exceptional results:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>190% increase in weekly views across Disney YouTube channels</li>
              <li>$3M in revenue generated within one year</li>
              <li>Significant subscriber growth across all channels</li>
              <li>Improved audience engagement metrics (watch time, comments, shares)</li>
              <li>Successful digital extensions of major Disney franchises</li>
              <li>Established best practices adopted across other Disney digital properties</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Key Learnings</h4>
            <p>This project provided valuable insights:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The importance of platform-specific content strategies</li>
              <li>The value of data-driven decision making</li>
              <li>The need for cross-functional collaboration</li>
              <li>The benefits of consistent publishing cadence</li>
              <li>The critical role of audience development in digital success</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

