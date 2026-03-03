// Editable content for the Sponsor page.
export const sponsorContent = {
  hero: {
    title: 'How can you support students in your area?',
    subtitle:
      'SWVA school divisions have invested personnel, time, travel dollars, and equipment to ensure all students in SWVA have the opportunity to participate. Sponsors for the regional showcase help us provide refreshments, learning stations, and support incentives for our regional winners.'
  },
  impact: {
    title: 'Sponsors Make the Difference!',
    description:
      'These kids will be putting their best feet forward, and we want to celebrate them while encouraging the next generation of business leaders and entrepreneurs.',
    stats: [
      { value: '$2,000', label: 'Main Stage Sponsor', colorClass: 'text-[#00BCD4]' },
      { value: '$1,000', label: 'Showcase Sponsor', colorClass: 'text-[#E53935]' },
      { value: '$500', label: "People's Choice Sponsor", colorClass: 'text-[#00BCD4]' },
      { value: '$250', label: 'Camp Sponsor', colorClass: 'text-[#E53935]' }
    ],
    stories: [
      {
        title: 'Main Stage Sponsor',
        text:
          'Prize sponsor with logo recognition on all printed and digital materials and signage, full page program ad, pre and post event social media recognition, and tickets for 10 guests.'
      },
      {
        title: 'Showcase Sponsor',
        text:
          'Prize sponsor with logo recognition on digital materials and signage, half page program ad, pre and post event social media recognition, and tickets for 5 guests.'
      },
      {
        title: "People's Choice & Camp Sponsors",
        text:
          "People's Choice sponsors support the People's Choice prize and camp sponsors support prizes for local camps, including logo recognition, social media recognition, and 2 guest tickets."
      }
    ]
  },
  tiers: {
    title: 'Sponsorship Levels',
    description:
      'Choose a sponsorship level to support the SWVA regional showcase and celebrate student achievement.',
    items: [
      {
        name: 'Main Stage Sponsor',
        price: '$2000',
        subtitle: 'Premier',
        accent: '#CD7F32',
        benefits: [
          'Prize sponsor',
          'Logo recognition on all printed and digital materials and signage',
          'Full page program ad',
          'Pre and post event social media recognition',
          'Tickets for 10 guests'
        ]
      },
      {
        name: 'Showcase Sponsor',
        price: '$1000',
        subtitle: 'Featured',
        accent: '#C0C0C0',
        benefits: [
          'Prize sponsor',
          'Logo recognition on digital materials and signage',
          'Half page program ad',
          'Pre and post event social media recognition',
          'Tickets for 5 guests'
        ]
      },
      {
        name: "People's Choice Sponsor",
        price: '$500',
        subtitle: 'Community Favorite',
        accent: '#FFD700',
        badge: 'Popular',
        benefits: [
          "People's Choice Prize sponsor",
          'Logo recognition on digital materials, signage, and program',
          'Pre and post event social media recognition',
          'Tickets for 2 guests'
        ]
      },
      {
        name: 'Camp Sponsor',
        price: '$250',
        subtitle: 'Local Impact',
        accent: '#00BCD4',
        benefits: [
          'Prizes for local camps sponsor',
          'Logo recognition on digital materials, signage, and program',
          'Event day social media recognition',
          'Tickets for 2 guests'
        ]
      }
    ],
    footerText:
      'Learn more about becoming a sponsor by completing the contact form.',
    buttonLabel: 'Learn More About Becoming a Sponsor',
    buttonTo: '/contact'
  },
  whySponsor: {
    title: 'Why Your Sponsorship Matters',
    items: [
      {
        title: 'Support Student Opportunity',
        text:
          'SWVA school divisions are already investing personnel, travel, and equipment so students can participate. Your sponsorship strengthens those efforts and helps create meaningful showcase experiences for students across the region.',
        bullets: [
          'Funds refreshments and learning stations',
          'Supports incentives for regional winners',
          'Expands support for participating school divisions'
        ]
      },
      {
        title: 'Recognize and Encourage Future Leaders',
        text:
          'Sponsors help celebrate students as they put their best feet forward. Your investment encourages the next generation of business leaders and entrepreneurs while showing your organization\'s commitment to local youth.',
        bullets: [
          'Pre and post event social media recognition',
          'Program and signage logo visibility',
          'Direct connection to student achievement in SWVA'
        ]
      }
    ]
  },
  sponsors: {
    title: 'Our Valued Sponsors',
    description:
      'We are grateful to the organizations and community partners investing in SWVA students through showcase sponsorship.',
    items: [
      {
        name: 'Public Education Consortium',
        fileName: 'Public Education consortium.png'
      },
      {
        name: 'The Jefferson Trust',
        fileName: 'The Jefferson Trust.png'
      },
      {
        name: 'The Slemp Foundation',
        fileName: 'The Slemp Foundation.png'
      },
      {
        name: 'UVA Wise',
        fileName: 'UVAWISE.png'
      }
    ]
  },
  packet: {
    title: 'Ready to Sponsor?',
    description:
      'Use the contact form to share your sponsorship interest and our team will follow up with next steps.',
    buttonLabel: 'Contact the Sponsorship Team',
    pdfFileName: 'Sponsor Packet.pdf'
  },
  cta: {
    title: 'Project Lead',
    description:
      'Heather Askea, STREAM Outreach Coordinator, The University of Virginia\'s College at Wise',
    primaryLabel: 'Open Sponsor Contact Form',
    primaryTo: '/contact',
    secondaryLabel: 'haskea@uvawise.edu | (276) 376-4554',
    secondaryHref: 'mailto:haskea@uvawise.edu'
  }
};
