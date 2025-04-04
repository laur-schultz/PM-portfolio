import Image from "next/image"

export function SamsungTVPlusCaseStudy() {
  return (
    <div className="space-y-6">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <Image
          src="/pm-portfolio/placeholder.svg?height=400&width=800"
          alt="Samsung TV Plus Mobile App"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Samsung TV Plus Mobile App Redesign</h3>

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

        <div className="space-y-4">
          <section>
            <h4 className="text-xl font-semibold mb-2">Overview</h4>
            <p>
              Led the largest mobile app redesign for Samsung TV Plus since its launch, resulting in significant
              improvements in user engagement metrics including a 12% increase in viewing time and 15% improvement in
              user retention.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Challenge</h4>
            <p>
              Samsung TV Plus faced increasing competition in the FAST (Free Ad-Supported Streaming TV) market. The
              mobile app experience had not been significantly updated since launch, and user feedback indicated issues
              with content discovery and overall user experience.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Declining user engagement metrics</li>
              <li>Poor content discovery experience</li>
              <li>Inconsistent experience across different regions</li>
              <li>Technical debt limiting new feature development</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Approach</h4>
            <p>
              I led a cross-functional team across multiple international offices to redesign the mobile experience:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Conducted extensive user research across multiple markets</li>
              <li>Created detailed user personas and journey maps</li>
              <li>Developed a comprehensive product roadmap</li>
              <li>Implemented an agile development process with bi-weekly sprints</li>
              <li>Established clear KPIs to measure success</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Solution</h4>
            <p>The redesigned app featured:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Personalized content recommendations based on viewing history</li>
              <li>Streamlined navigation and improved content categorization</li>
              <li>Enhanced search functionality</li>
              <li>Improved video player with additional features</li>
              <li>Optimized performance for faster load times</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Results</h4>
            <p>The redesign delivered significant improvements across all key metrics:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>12% increase in average viewing time</li>
              <li>15% improvement in user retention</li>
              <li>20% increase in content discovery (measured by unique channels viewed)</li>
              <li>18% reduction in app crashes and technical issues</li>
              <li>Positive user feedback with app store rating improvement from 3.6 to 4.2</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Key Learnings</h4>
            <p>This project reinforced several important product management principles:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The importance of user research in guiding product decisions</li>
              <li>The value of cross-functional collaboration across international teams</li>
              <li>The need for clear success metrics established early in the process</li>
              <li>The benefits of an iterative approach with regular user feedback</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

