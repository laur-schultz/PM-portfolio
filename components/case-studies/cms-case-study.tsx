import Image from "next/image"

export function CMSCaseStudy() {
  return (
    <div className="space-y-6">
      <div className="relative h-64 w-full rounded-lg overflow-hidden">
        <Image
          src="/pm-portfolio/placeholder.svg?height=400&width=800"
          alt="CMS Redevelopment Project"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold">CMS Redevelopment Project</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
            Project Management
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
            International Alignment
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-xs">
            Workflow Optimization
          </span>
        </div>

        <div className="space-y-4">
          <section>
            <h4 className="text-xl font-semibold mb-2">Overview</h4>
            <p>
              Managed the redevelopment of an internal publishing tool used by content teams globally, resulting in a
              20% reduction in time spent on content management tasks through workflow optimizations and feature
              improvements.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Challenge</h4>
            <p>
              The existing CMS was built as a minimum viable product that had grown organically over time without
              strategic direction. This resulted in:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Inefficient workflows requiring excessive manual steps</li>
              <li>Poor performance with large content libraries</li>
              <li>Inconsistent user experience across different modules</li>
              <li>Limited scalability for new content types and platforms</li>
              <li>Difficulty onboarding new team members</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Approach</h4>
            <p>I took a user-centered approach to redesigning the CMS:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Conducted interviews with content teams across multiple regions</li>
              <li>Mapped existing workflows and identified pain points</li>
              <li>Created detailed requirements documentation</li>
              <li>Prioritized features based on impact and development effort</li>
              <li>Established a phased implementation plan to minimize disruption</li>
              <li>Developed comprehensive training materials</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Solution</h4>
            <p>The redesigned CMS included:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Streamlined content creation and publishing workflows</li>
              <li>Batch editing capabilities for multiple content items</li>
              <li>Advanced search and filtering options</li>
              <li>Improved media management with automated transcoding</li>
              <li>Enhanced metadata management</li>
              <li>Comprehensive analytics dashboard</li>
              <li>Role-based access controls</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Results</h4>
            <p>The CMS redevelopment delivered significant improvements:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>20% reduction in time spent on content management tasks</li>
              <li>50% decrease in publishing errors</li>
              <li>75% faster onboarding time for new team members</li>
              <li>30% increase in content throughput with the same team size</li>
              <li>Positive feedback from content teams across all regions</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Key Learnings</h4>
            <p>This project provided valuable insights:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The importance of involving end-users throughout the development process</li>
              <li>The value of standardizing workflows across different regions</li>
              <li>The need for comprehensive training and documentation</li>
              <li>The benefits of a phased implementation approach for critical systems</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

