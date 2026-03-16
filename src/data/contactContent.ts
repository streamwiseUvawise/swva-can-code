// Editable content for the Contact page.
export const contactContent = {
  hero: {
    title: 'Get in Touch',
    subtitle:
      'Have questions about our programs? Want to get involved? We\'d love to hear from you!'
  },
  intro: {
    title: 'Contact Information',
    text:
      "Whether you're a parent looking for camp information, an educator interested in our resources, or a potential sponsor, we're here to help. Reach out using the form or contact us directly."
  },
  contactDetails: {
    email: {
      label: 'Email',
      address: 'haskea@uvawise.edu',
      responseTime: 'We typically respond within 24-48 hours'
    },
    phone: {
      label: 'Phone',
      number: '(276) 376-5445',
      tel: '+12763765445',
      hours: 'Monday - Friday, 9:00 AM - 5:00 PM EST'
    },
    location: {
      label: 'Location',
      line1: '1 College Avenue',
      line2: 'Wise, Virginia 24293'
    }
  },
  quickLinks: {
    title: 'Looking for something specific?',
    items: [
      {
        label: 'Camp Registration:',
        text: 'Visit our Find a Camp page',
        href: '/find-camp'
      },
      {
        label: 'Teaching Resources:',
        text: 'Browse our Curriculum & Resources',
        href: '/curriculum'
      },
      {
        label: 'Sponsorship:',
        text: 'Learn about becoming a sponsor',
        href: '/sponsor'
      },
      {
        label: 'About Us:',
        text: 'Read more about our mission',
        href: '/about'
      }
    ]
  },
  form: {
    title: 'Send Us a Message',
    successMessage: "✓ Thank you! Your message has been sent. We'll get back to you soon.",
    nameLabel: 'Name *',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email *',
    emailPlaceholder: 'your.email@example.com',
    phoneLabel: 'Phone (Optional)',
    phonePlaceholder: '(555) 123-4567',
    inquiryLabel: 'What is your inquiry about? *',
    inquiryOptions: [
      { value: 'general', label: 'General Inquiry' },
      { value: 'camp', label: 'Camp Registration / Information' },
      { value: 'educator', label: 'Educator Resources / School Partnership' },
      { value: 'volunteer', label: 'Volunteer / Teaching Opportunity' },
      { value: 'sponsor', label: 'Sponsorship' },
      { value: 'other', label: 'Other' }
    ],
    messageLabel: 'Message *',
    messagePlaceholder: 'Tell us how we can help...',
    submitLabel: 'Send Message',
    requiredNote: '* Required fields'
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'How much do camps cost?',
        answer:
          'Camps are free of cost due to the support of our generous sponsors'
      },
      {
        question: 'Do students need prior coding experience?',
        answer:
          'Not at all! We offer programs for complete beginners as well as more advanced students. Each camp listing indicates the recommended skill level and age range.'
      },
      {
        question: 'Can educators use your resources for free?',
        answer:
          "Yes! All curriculum modules, lesson plans, and glossary resources are completely free for educators. We're here to support quality CS education across Southwest Virginia."
      },
      {
        question: 'How can I volunteer or teach?',
        answer:
          "We're always looking for volunteers! Select \"Volunteer / Teaching Opportunity\" in the contact form above, and tell us about your background and availability."
      }
    ]
  }
};
