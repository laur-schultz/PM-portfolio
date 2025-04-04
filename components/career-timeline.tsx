import Image from "next/image"

type TimelineItemProps = {
  title: string
  company: string
  location: string
  period: string
  description: string
  logo?: string
  isLast?: boolean
}

const TimelineItem = ({
  title,
  company,
  location,
  period,
  description,
  logo = "/pm-portfolio/placeholder.svg?height=50&width=50",
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr]">
      <div className="text-right pr-8 md:pr-12 self-start pt-1 hidden md:block">
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-background z-10">
          {logo && (
            <Image
              src={logo || "/pm-portfolio/placeholder.svg"}
              alt={company}
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
          )}
        </div>
        {!isLast && <div className="w-px bg-border flex-1 my-2"></div>}
      </div>
      <div className="pl-8 md:pl-12 pb-10">
        <h3 className="font-semibold text-lg md:hidden">{title}</h3>
        <h4 className="text-xl font-bold">{company}</h4>
        <p className="text-muted-foreground mb-2">
          {location} • {period}
        </p>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  )
}

export function CareerTimeline() {
  return (
    <section id="experience" className="py-10 bg-black text-white" suppressHydrationWarning={true}>
      <div className="container px-4 mx-auto">
        <h3 className="text-center text-3xl md:text-4xl font-bold mb-8">Experience Timeline</h3>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-300">
            I've always been driven by a passion for creating something meaningful — a product or piece of media can
            make a real difference in people's lives. I'm deeply invested in product strategy and development, striving
            to contribute as part of the Product team. My content strategy experience provides a uncommon foundation for
            my Product career, while also granting me a unique perspective on creating engaging video products.
          </p>
        </div>

        <div className="relative">
          <TimelineItem
            title="Product Manager"
            company="Samsung Electronics America"
            location="Los Angeles, CA"
            period="May 2022 - Dec 2024"
            description="Creating global products to support Samsung TV Plus, a FAST TV service. Working with international teams tp redesign the TVP mobile app and redevelop the CMS and publishing tool to scale."
            logo="/pm-portfolio/placeholder.svg?height=50&width=50"
          />

          <TimelineItem
            title="Product Manager"
            company="Struum"
            location="Los Angeles, CA"
            period="Dec 2020 - Mar 2022"
            description="I joined Struum in the start-up's initial funding round. Within six months, the app launched on iOS and web, and secured us Series A funding.  Within a year, Struum was on 7 different platforms including Roku, FireTV and AppleTV. It was an invaluable crash course in all things Product Management."
            logo="/pm-portfolio/placeholder.svg?height=50&width=50"
          />

          <TimelineItem
            title="Product Analyst"
            company="Apple (Beats by Dre)"
            location="Culver City, CA"
            period="Oct 2019 - Sep 2020"
            description="To support Beats by Dre in researching a potential product line, I conducted focus groups and created user personas that aided in clarifying target markets. My research focusing on the competitive landscape and potential users was incorporated into a presentation to Apple's CEO, Tim Cook."
            logo="/pm-portfolio/placeholder.svg?height=50&width=50"
          />

          <TimelineItem
            title="Sr. Manager, Channel Operations"
            company="pocket.watch"
            location="Culver City, CA"
            period="Aug 2017 - May 2019"
            description="The mission for pocket.watch was to be everywhere kids were watching. I worked on projects that tapped into my burgeoning interest in Product - including designing and creating the UX for a O&O content app. My main role was leading development and distribution of programming to OTT services (Amazon Prime, Roku) and launching a top 10 children's show on Hulu."
            logo="/pm-portfolio/placeholder.svg?height=50&width=50"
          />

          <TimelineItem
            title="Manager, Business Operations & Strategy"
            company="Maker Studios (The Walt Disney Company)"
            location="Culver City, CA"
            period="Sep 2014 - Apr 2017"
            description="Maker's mission at Disney was to create a cohesive voice across different formats and verticals -- from Markiplier to Mickey Mouse. I strategized for iconic brands within Disney. like Star Wars, Disney Channel, and ABC to launch new IP and develop new audiences on their YouTube channels."
            logo="/pm-portfolio/placeholder.svg?height=50&width=50"
          />

          <TimelineItem
            title="Director, Operations & Content Strategy"
            company="Collective Digital Studios (Studio71)"
            location="Beverly Hills, CA"
            period="May 2013 - Sep 2014"
            description="Launching a branded makeup channel for Bobbi Brown Cosmetics, I worked with Development and Production to research trends, creating storyboards, and working with influencers in pre- and post-production on short-form videos highlighting the brand's offerings, all while growing organic audiences for the channel. Other clients included Scion, Warner Music Group, and Mashable."
            logo="/pm-portfolio/placeholder.svg?height=50&width=50"
          />

          <TimelineItem
            title="Content Coordinator"
            company="Disney Interactive (The Walt Disney Company)"
            location="Glendale, CA"
            period="Aug 2011 - May 2013"
            description="This role was my first exposure to Product when I supported the redesign of Disney.com. It was also my first step into data and analytics reporting and working with YouTube on behalf of Disney. This role was truly transformative for me, as it sent me on first leg of my career journey in content strategy."
            logo="/pm-portfolio/placeholder.svg?height=50&width=50"
            isLast={true}
          />
        </div>
      </div>
    </section>
  )
}

