// Editable content for the Home page.
export const homeContent = {
  hero: {
    // Edit the small badge text above the headline.
    badge: 'Are you up to the challenge?',
    // Edit the colored headline words and the surrounding text.
    titleParts: [
      { text: 'SWVA Can Code', className: '' }
    ],
    // Edit the hero subtitle paragraph.
    subtitle:
      'SWVA Can Code is an initiative that encourages rising 5th to 12th grade students to create and develop web applications that aim to solve important problems or take advantage of opportunities within their communities. This regional initiative provides an opportunity for young students to engage in the process of designing and prototyping these apps. By participating in this program, students are able to contribute to their communities and make a positive impact through technology. The program focuses on empowering students to identify challenges or opportunities in their communities and find innovative solutions through coding. SWVA Can Code not only provides valuable skills in web development but also fosters creativity, problem-solving, and collaboration among young minds.',
    // Edit button labels and links.
    primaryCta: { label: 'Find a camp near you!', to: '/find-camp' },
    secondaryCta: { label: 'Discover more', to: '/about' }
  },
  // Edit the stats that appear under the hero.
  stats: [
    { value: '500+', label: 'Students Served', colorClass: 'text-[#00BCD4]' },
    { value: '25+', label: 'Camps Annually', colorClass: 'text-[#E53935]' },
    { value: '15+', label: 'Partner Schools', colorClass: 'text-[#00BCD4]' },
    { value: '100%', label: 'Fun Guaranteed', colorClass: 'text-[#E53935]' }
  ],
  // Edit the four program cards in the "What We Offer" section.
  offersSection: {
    title: 'What We Offer',
    description:
      'From beginner-friendly camps to advanced creative tech programs, we have something for every young learner.'
  },
  offers: [
    {
      icon: 'code',
      title: 'Coding Camps',
      description: 'Week-long camps teaching programming fundamentals through fun, hands-on projects.',
      linkLabel: 'Find Camps',
      linkTo: '/find-camp',
      colorClass: 'text-[#00BCD4]',
      borderClass: 'border-[#00BCD4]',
      iconBgClass: 'bg-[#00BCD4]/10'
    },
    {
      icon: 'award',
      title: 'Student Showcase',
      description: 'See amazing projects created by students just like you. Get inspired!',
      linkLabel: 'View Projects',
      linkTo: '/showcase',
      colorClass: 'text-[#E53935]',
      borderClass: 'border-[#E53935]',
      iconBgClass: 'bg-[#E53935]/10'
    },
    {
      icon: 'lightbulb',
      title: 'SWVA Can Create',
      description: 'Year-round creative tech opportunities including hackathons and art+tech workshops.',
      linkLabel: 'Explore Programs',
      linkTo: '/swva-can-create',
      colorClass: 'text-[#00BCD4]',
      borderClass: 'border-[#00BCD4]',
      iconBgClass: 'bg-[#00BCD4]/10'
    },
    {
      icon: 'users',
      title: 'For Educators',
      description: 'Access curriculum, resources, and a searchable glossary with video explanations.',
      linkLabel: 'View Resources',
      linkTo: '/curriculum',
      colorClass: 'text-[#E53935]',
      borderClass: 'border-[#E53935]',
      iconBgClass: 'bg-[#E53935]/10'
    }
  ],
  // Edit the three upcoming camp preview cards.
  upcomingCampsSection: {
    title: 'Upcoming Camps',
    description: 'Join us this season!',
    linkLabel: 'View All Camps',
    linkTo: '/find-camp'
  },
  upcomingCamps: [
    {
      title: 'Summer Code Camp - Beginners',
      date: 'June 12-16, 2026',
      location: 'Abingdon, VA',
      ages: 'Ages 8-12',
      color: '#00BCD4'
    },
    {
      title: 'Game Design Workshop',
      date: 'June 19-23, 2026',
      location: 'Bristol, VA',
      ages: 'Ages 10-14',
      color: '#E53935'
    },
    {
      title: 'Web Development Basics',
      date: 'July 10-14, 2026',
      location: 'Blacksburg, VA',
      ages: 'Ages 12-16',
      color: '#00BCD4'
    }
  ],
  // Edit the showcase preview header and button.
  showcasePreview: {
    title: 'SWVA Can Code Gallery',
    description: 'Snapshots from camps, demos, and student projects.',
    linkLabel: 'Discover more',
    linkTo: '/showcase',
    emptyMessage: 'Gallery updates are coming soon.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
        alt: 'Students collaborating on laptops during camp'
      },
      {
        src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=80',
        alt: 'Coding workshop with mentors and students'
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
        alt: 'Student presenting a project at showcase'
      },
      {
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
        alt: 'Close-up of hands typing code'
      }
    ]
  },
  // Edit the final call-to-action section.
  cta: {
    title: 'Get Involved!',
    description:
      'There are many ways that you can support and get involved with SWVA Can Code. Consider becoming a sponsor, camp judge, or host a camp in your area!',
    primaryLabel: 'Contact',
    primaryTo: '/contact',
    secondaryLabel: 'Sponsor',
    secondaryTo: '/sponsor',
    followUp: 'Follow us online for the latest updates!'
  },
  // Edit the Apple curriculum callout section.
  appleCurriculum: {
    title: "Built on Apple's Everyone Can Code Curriculum",
    logoLabel: 'SWIFT',
    intro:
      'Learning to code builds confidence and problem-solving skills right from the start. Learning to code with Apple gives educators the tools and resources to help students express themselves and prepare for the future, no matter what career they pursue.',
    details:
      "Camp staff are trained by certified Apple Professional Learning specialists to offer unique, engaging camp experiences based on Apple's Everyone Can Code curriculum. Everyone Can Code is a free comprehensive curriculum from Apple that makes it easy to teach coding from kindergarten to college.",
    bullets: [
      'Our summer programs use iPads provided by our organization for student use during the camp.',
      'We follow Apple\'s education resources and classroom tools to support creative learning.'
    ],
    links: [
      {
        label: 'Learn more',
        href: 'https://www.apple.com/education/k12/'
      },
      {
        label: 'Explore Apple Education success stories',
        href: 'https://www.apple.com/education/k12/success-stories/'
      }
    ]
  },
  // Edit the FAQ teaser on the Home page.
  faqTeaser: {
    title: 'FAQ',
    subtitle: 'Frequently asked questions',
    ctaLabel: 'View FAQs',
    ctaTo: '/contact'
  }
};
