// Editable content for the Curriculum page.
export const curriculumContent = {
  hero: {
    title: 'Curriculum & Resources',
    subtitle:
      'Free lesson plans, teaching materials, and a searchable glossary to support educators and students on their coding journey.'
  },
  intro:
    "Whether you're a teacher looking to integrate coding into your classroom, a student exploring new concepts, or a parent supporting your child's learning, our resources are designed to make technology education accessible and engaging for everyone.",
  modulesSection: {
    title: 'Curriculum Modules',
    description: 'Downloadable lesson plans and activities organized by grade level and topic.'
  },
  modules: [
    {
      title: 'Introduction to Variables',
      grade: 'Grades 3-5',
      duration: '45 min',
      level: 'Beginner',
      includes: ['Lesson plan', 'Student handout', 'Activity guide'],
      // Place your PDF in /public/curriculum and set this path, e.g. '/curriculum/variables.pdf'
      pdfPath: '/curriculum/Module1_Variables.pdf',
      color: '#00BCD4'
    },
    {
      title: 'Loops & Patterns',
      grade: 'Grades 4-6',
      duration: '60 min',
      level: 'Beginner',
      includes: ['Lesson plan', 'Coding challenges', 'Answer key'],
      pdfPath: '/curriculum/Module2_Loops.pdf',
      color: '#E53935'
    },
    {
      title: 'Building Your First Game',
      grade: 'Grades 6-8',
      duration: '90 min',
      level: 'Intermediate',
      includes: ['Project guide', 'Code templates', 'Extension activities'],
      pdfPath: '/curriculum/Module3_Game.pdf',
      color: '#00BCD4'
    },
    {
      title: 'Web Design Basics',
      grade: 'Grades 7-9',
      duration: '60 min',
      level: 'Beginner',
      includes: ['HTML/CSS tutorial', 'Practice exercises', 'Project examples'],
      pdfPath: '/curriculum/Module4_Web.pdf',
      color: '#E53935'
    },
    {
      title: 'Data & Algorithms',
      grade: 'Grades 9-12',
      duration: '75 min',
      level: 'Advanced',
      includes: ['Lecture slides', 'Coding problems', 'Assessment'],
      pdfPath: '/curriculum/Module5_Algorithms.pdf',
      color: '#00BCD4'
    },
    {
      title: 'Creative Coding with Art',
      grade: 'Grades 5-8',
      duration: '90 min',
      level: 'Intermediate',
      includes: ['Art project guide', 'Code library', 'Gallery examples'],
      pdfPath: '/curriculum/Module6_Creative.pdf',
      color: '#E53935'
    }
  ],
  resourcesSection: {
    title: 'Additional Resources',
    items: [
      {
        name: 'Scratch',
        description: 'Visual programming language perfect for beginners',
        link: 'https://scratch.mit.edu',
        icon: '🎨'
      },
      {
        name: 'Code.org',
        description: 'Free coding courses and activities for all ages',
        link: 'https://code.org',
        icon: '💻'
      },
      {
        name: 'Hour of Code',
        description: 'One-hour tutorials in dozens of languages',
        link: 'https://hourofcode.com',
        icon: '⏰'
      },
      {
        name: 'Khan Academy',
        description: 'Computer programming courses from intro to advanced',
        link: 'https://khanacademy.org',
        icon: '📚'
      },
      {
        name: 'GitHub Education',
        description: 'Free developer tools and resources for students and educators',
        link: 'https://education.github.com',
        icon: '🐙'
      },
      {
        name: 'Apple Education',
        description: 'Coding resources and curriculum for educators',
        link: 'https://education.apple.com',
        icon: '🍎'
      }
    ]
  },
  glossarySection: {
    title: 'Coding Glossary',
    description:
      'Search for coding terms and watch video explanations. Perfect for students learning at their own pace!',
    searchPlaceholder: 'Search for a term (e.g., variable, loop, function)...',
    emptyMessagePrefix: 'No terms found matching '
  },
  glossaryTerms: [
    {
      term: 'Variable',
      difficulty: 'Beginner',
      definition:
        "A variable is like a container that stores information in your code. You can put something in it (like a number or word) and use it later, or even change what's inside.",
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Loop',
      difficulty: 'Beginner',
      definition:
        'A loop is a way to repeat the same action over and over without writing the same code multiple times. It is like telling your computer, "Do this 10 times," and it does!',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Function',
      difficulty: 'Beginner',
      definition:
        'A function is like a mini-program inside your program. You give it a name and tell it what to do, then you can use that name to make it run whenever you need it.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Conditional',
      difficulty: 'Beginner',
      definition:
        'A conditional (or "if statement") lets your program make decisions. It checks if something is true, and then does different things based on the answer.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Array',
      difficulty: 'Intermediate',
      definition:
        'An array is like a list that can hold multiple items in one place. Instead of creating separate variables for each thing, you can keep them all together in an array.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Algorithm',
      difficulty: 'Intermediate',
      definition:
        'An algorithm is a step-by-step set of instructions for solving a problem or completing a task. It is like a recipe for your code!',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Object-Oriented Programming',
      difficulty: 'Advanced',
      definition:
        'Object-oriented programming is a way of organizing code using "objects" that represent real-world things. Each object can have its own properties and actions, making it easier to manage complex programs.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Recursion',
      difficulty: 'Advanced',
      definition:
        'Recursion is when a function calls itself in order to solve a problem. It can be a powerful way to write code, but it can also be tricky to understand at first!',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'API',
      difficulty: 'Advanced',
      definition:
        'An API (Application Programming Interface) is a way for different software programs to talk to each other. It allows you to use features or data from another service in your own code.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Debugging',
      difficulty: 'Beginner',
      definition:
        'Debugging is the process of finding and fixing errors in your code. It is like being a detective, looking for clues to figure out why your program isn\'t working the way you want it to.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935' 
    }
  ],
  cta: {
    title: 'For Educators',
    description:
      'Need help integrating these resources into your classroom? Want to request a specific lesson plan or glossary term? We are here to help!',
    buttonLabel: 'Contact Our Team',
    buttonTo: '/contact'
  }
};
