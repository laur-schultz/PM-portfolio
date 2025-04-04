import Image from "next/image"

export function PocketwatchCaseStudy() {
  return (
    <div className="space-y-6">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <Image
          src="/pm-portfolio/placeholder.svg?height=400&width=800"
          alt="Pocket.watch OTT Distribution"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Pocket.watch OTT Distribution Strategy</h3>

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

        <div className="space-y-4">
          <section>
            <h4 className="text-xl font-semibold mb-2">Overview</h4>
            <p>
              Led development and programming strategy for pocket.watch's OTT distribution, successfully launching
              partnerships with Roku, Amazon Prime Video, and Hulu within 8 months.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Challenge</h4>
            <p>
              Pocket.watch needed to expand beyond YouTube to reach kids "wherever they were watching." Key challenges
              included:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Adapting YouTube-native content for traditional OTT platforms</li>
              <li>Meeting different technical specifications across platforms</li>
              <li>Navigating complex partnership agreements</li>
              <li>Creating programming strategies for different audience segments</li>
              <li>Developing a scalable distribution workflow</li>
              <li>Measuring success across disparate platforms</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Approach</h4>
            <p>I implemented a strategic approach to OTT distribution:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Prioritized platforms based on audience reach and revenue potential</li>
              <li>Developed platform-specific content packaging strategies</li>
              <li>Created a standardized technical delivery process</li>
              <li>Established a content calendar for regular programming updates</li>
              <li>Built relationships with key platform partners</li>
              <li>Implemented cross-platform analytics tracking</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Solution</h4>
            <p>The OTT distribution strategy included:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Platform-specific content packages tailored to audience preferences</li>
              <li>Seasonal programming refreshes to maintain engagement</li>
              <li>Themed content collections for special events and holidays</li>
              <li>Optimized metadata and artwork for each platform</li>
              <li>Centralized asset management system</li>
              <li>Regular performance reporting and optimization</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Results</h4>
            <p>The OTT distribution strategy delivered significant results:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Successful launch on Roku, Amazon Prime Video, and Hulu within 8 months</li>
              <li>Top 10 children's show on Hulu</li>
              <li>50+ hours of content distributed across platforms</li>
              <li>Established recurring revenue streams from multiple platforms</li>
              <li>Created a scalable distribution model for future content</li>
              <li>Expanded pocket.watch's audience reach beyond YouTube</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Key Learnings</h4>
            <p>This project provided valuable insights:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The importance of platform-specific content strategies</li>
              <li>The value of strong relationships with platform partners</li>
              <li>The need for standardized technical processes</li>
              <li>The benefits of regular content refreshes</li>
              <li>The critical role of metadata optimization in content discovery</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

