import Image from "next/image"

export function StruumCaseStudy() {
  return (
    <div className="space-y-6">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <Image src="/pm-portfolio/placeholder.svg?height=400&width=800" alt="STRUUM App Launch" fill className="object-cover" />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">STRUUM App Launch</h3>

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

        <div className="space-y-4">
          <section>
            <h4 className="text-xl font-semibold mb-2">Overview</h4>
            <p>
              Led product strategy and development for STRUUM, a streaming video startup, achieving 20% user engagement
              and 11% reduction in churn rate within 3 months of launch.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Challenge</h4>
            <p>
              STRUUM entered a highly competitive streaming market with a unique credit-based business model. Key
              challenges included:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Explaining a novel business model to consumers</li>
              <li>Building a product from scratch with limited resources</li>
              <li>Developing for multiple platforms simultaneously</li>
              <li>Integrating content from numerous provider partners</li>
              <li>Creating a seamless user experience across devices</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Approach</h4>
            <p>As the product lead, I implemented a strategic approach:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Conducted extensive competitive analysis of the streaming landscape</li>
              <li>Developed detailed user personas and journey maps</li>
              <li>Created a minimum viable product (MVP) definition</li>
              <li>Established an agile development process with two-week sprints</li>
              <li>Prioritized platform development based on target audience</li>
              <li>Implemented a continuous feedback loop with early users</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Solution</h4>
            <p>The STRUUM platform featured:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Intuitive credit-based system for accessing premium content</li>
              <li>Personalized content recommendations</li>
              <li>Seamless cross-platform experience (iOS, web, Roku, FireTV, AppleTV)</li>
              <li>Robust search and discovery features</li>
              <li>Streamlined onboarding process</li>
              <li>Flexible subscription options</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Results</h4>
            <p>The product launch exceeded expectations:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Successful launch on iOS and web within six months</li>
              <li>Expansion to 7 platforms within one year</li>
              <li>20% increase in user engagement metrics</li>
              <li>11% reduction in churn rate</li>
              <li>Secured Series A funding based on early product success</li>
              <li>Positive press coverage in major industry publications</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Key Learnings</h4>
            <p>This startup experience provided valuable insights:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The importance of a clear value proposition in a crowded market</li>
              <li>The value of rapid iteration based on user feedback</li>
              <li>The need for platform prioritization with limited resources</li>
              <li>The benefits of a cross-functional team structure</li>
              <li>The critical nature of onboarding UX for novel business models</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

