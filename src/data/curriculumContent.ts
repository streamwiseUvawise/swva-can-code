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
      videoId: 'Q2YfMhH7XtY',
      color: '#00BCD4'
    },
    {
      term: 'Loop',
      difficulty: 'Beginner',
      definition:
        'A loop is a way to repeat the same action over and over without writing the same code multiple times. It is like telling your computer, "Do this 10 times," and it does!',
      videoId: 'YBxDiA7JTKY',
      color: '#E53935'
    },
    {
      term: 'Function',
      difficulty: 'Beginner',
      definition:
        'A function is like a mini-program inside your program. You give it a name and tell it what to do, then you can use that name to make it run whenever you need it.',
      videoId: 'dpR4w1CMbnw',
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
      videoId: 'kTUJ6T6fKmo',
      color: '#00BCD4'
    },
    {
      term: 'Algorithm',
      difficulty: 'Intermediate',
      definition:
        'An algorithm is a step-by-step set of instructions for solving a problem or completing a task. It is like a recipe for your code!',
      videoId: '6F9sIC8jV5s',
      color: '#E53935'
    },
    {
      term: 'Object-Oriented Programming',
      difficulty: 'Advanced',
      definition:
        'Object-oriented programming is a way of organizing code using "objects" that represent real-world things. Each object can have its own properties and actions, making it easier to manage complex programs.',
      videoId: 'fOZQuoGGB6U',
      color: '#00BCD4'
    },
    {
      term: 'Recursion',
      difficulty: 'Advanced',
      definition:
        'Recursion is when a function calls itself in order to solve a problem. It can be a powerful way to write code, but it can also be tricky to understand at first!',
      videoId: 'dBwHJedxJ28',
      color: '#E53935'
    },
    {
      term: 'API',
      difficulty: 'Advanced',
      definition:
        'An API (Application Programming Interface) is a way for different software programs to talk to each other. It allows you to use features or data from another service in your own code.',
      videoId: '-JMmNCYZaYA',
      color: '#00BCD4'
    },
    {
      term: 'Application Software',
      difficulty: 'Beginner',
      definition:
        'Software, made up of code, that allows you to perform specific tasks. For example, you use the Messages app to send and receive messages.',
      videoId: 'Kvssxva_osQ',
      color: '#00BCD4'
    },
    {
      term: 'Argument',
      difficulty: 'Beginner',
      definition:
        'An input value passed into a function to customize its behavior. For example, in move(distance: 3), 3 is an argument.',
      videoId: 'JP6mZ1wBJ0w',
      color: '#E53935'
    },
    {
      term: 'Arithmetic Operator',
      difficulty: 'Beginner',
      definition:
        'A symbol, such as +, -, *, or /, that performs a basic mathematical operation on one or more numbers.',
      videoId: 'XND61OaEbFs',
      color: '#00BCD4'
    },
    {
      term: 'Assignment',
      difficulty: 'Beginner',
      definition: 'An action that sets the value of a variable or constant.',
      videoId: 'FDwx3pmsOhE',
      color: '#E53935'
    },
    {
      term: 'Assignment Operator',
      difficulty: 'Beginner',
      definition:
        'The = symbol used to set the value of a variable. For example, greeting = "hello" sets the value of greeting to "hello".',
      videoId: 'FDwx3pmsOhE',
      color: '#00BCD4'
    },
    {
      term: 'Boolean',
      difficulty: 'Beginner',
      definition: 'A type that has a value of either true or false.',
      videoId: 'GTN_y5zVFOs',
      color: '#E53935'
    },
    {
      term: 'Bug and Debugging',
      difficulty: 'Beginner',
      definition: 'Bug is an error in code that prevents an application from running as expected. Debugging is the process of finding and fixing these errors. It is like being a detective, looking for clues to figure out why your program isn\'t working the way you want it to.',
      videoId: 'Q4XAvmpamQ0',
      color: '#00BCD4'
    },
    {
      term: 'Call',
      difficulty: 'Beginner',
      definition:
        'To call a function in code is to instruct that function to run, performing the actions defined inside it.',
      videoId: 'JHJbpuJmHUI',
      color: '#E53935'
    },
    {
      term: 'camelCase',
      difficulty: 'Beginner',
      definition:
        'A style of writing compound words in which each new word begins with a capital letter and contains no spaces. In lower camel case, the first letter is lowercase.',
      videoId: 'kSmi2myNQ3k',
      color: '#00BCD4'
    },
    {
      term: 'Comparison Operator',
      difficulty: 'Beginner',
      definition:
        'A symbol, such as ==, !=, <, >, <=, or >=, used to compare two values and return whether the comparison is true.',
      videoId: 'x38IGElwEyE',
      color: '#E53935'
    },
    {
      term: 'Composition',
      difficulty: 'Intermediate',
      definition: 'The process of combining small parts of an application to solve a larger problem.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Compound Assignment Operator',
      difficulty: 'Intermediate',
      definition:
        'An operator that combines assignment with another operation, such as addition or subtraction, for example += or -=.',
      videoId: 'LbezQ7-S3sk',
      color: '#E53935'
    },
    {
      term: 'Conditional Code',
      difficulty: 'Beginner',
      definition:
        'Code that runs only when specific conditions are met, such as in if statements or while loops.',
      videoId: '6QVRb7197uA',
      color: '#00BCD4'
    },
    {
      term: 'Constant',
      difficulty: 'Beginner',
      definition: 'A named container that stores a value that cannot be changed.',
      videoId: 'Q2YfMhH7XtY',
      color: '#E53935'
    },
    {
      term: 'Declaration',
      difficulty: 'Beginner',
      definition:
        'A piece of code that creates something new in your application, such as a function, variable, or custom type.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Decomposition',
      difficulty: 'Intermediate',
      definition: 'The process of breaking a large problem into smaller, more manageable pieces.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Define',
      difficulty: 'Beginner',
      definition:
        'To provide the explicit value or behavior of a newly created piece of code, such as a function, variable, or custom type.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Dot Notation',
      difficulty: 'Beginner',
      definition:
        'A syntax style used to access properties or call methods on an instance, such as expert.toggleSwitch().',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Else Block',
      difficulty: 'Beginner',
      definition: 'The last block of code in an if statement that runs if all earlier conditions are false.',
      videoId: 'J3P82fy_QxM',
      color: '#E53935'
    },
    {
      term: 'Else If Block',
      difficulty: 'Beginner',
      definition:
        'A block in an if statement used to check an additional condition not handled by earlier if or else if blocks.',
      videoId: 'ZctuVt7E8aU',
      color: '#00BCD4'
    },
    {
      term: 'Enumeration',
      difficulty: 'Intermediate',
      definition:
        'A type that defines a fixed set of related values called cases, where one case is chosen at a time.',
      videoId: 'SIpxi-tbo4E',
      color: '#E53935'
    },
    {
      term: 'For Loop',
      difficulty: 'Beginner',
      definition: 'A block of repeated code that runs a set number of times.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'If Block',
      difficulty: 'Beginner',
      definition: 'The first block in an if statement that runs when the condition is true.',
      videoId: 'lL7nfPu95rw',
      color: '#E53935'
    },
    {
      term: 'If Statement',
      difficulty: 'Beginner',
      definition: 'A code structure used to run code based on one or more conditions.',
      videoId: 'bLoclyPZ7zY',
      color: '#00BCD4'
    },
    {
      term: 'Index',
      difficulty: 'Beginner',
      definition: 'A number that represents the position of an item in an array. Indices start at 0.',
      videoId: 'hJalwNqhBVg',
      color: '#E53935'
    },
    {
      term: 'Index Out of Range Error',
      difficulty: 'Beginner',
      definition: 'An error caused by trying to access an array with an index outside its valid range.',
      videoId: 'ChQHJwNBD7M',
      color: '#00BCD4'
    },
    {
      term: 'Initialization',
      difficulty: 'Intermediate',
      definition:
        'The act of creating a new instance of a type, including setting initial values for its properties.',
      videoId: 'w7n7QY3zPcs',
      color: '#E53935'
    },
    {
      term: 'Inner Loop',
      difficulty: 'Intermediate',
      definition: 'A loop that is nested inside another loop.',
      videoId: 'g26mGWNrMx4',
      color: '#00BCD4'
    },
    {
      term: 'Instance',
      difficulty: 'Intermediate',
      definition: 'A value created from a particular type.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Int',
      difficulty: 'Beginner',
      definition: 'A type that stores a whole number, such as 10 or -42.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Iteration',
      difficulty: 'Beginner',
      definition: 'The act of repeating a process, such as performing an action on each item in an array.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Local Variable',
      difficulty: 'Beginner',
      definition:
        'A variable declared inside a function, loop, or other statement that cannot be accessed outside that scope.',
      videoId: 'qvXTcr1XDdEQ',
      color: '#00BCD4'
    },
    {
      term: 'Logical AND Operator',
      difficulty: 'Intermediate',
      definition: 'The && operator combines two Boolean values and is true only when both values are true.',
      videoId: 'AwQIMyVHT-c',
      color: '#E53935'
    },
    {
      term: 'Logical NOT Operator',
      difficulty: 'Intermediate',
      definition: 'The ! operator inverts a Boolean value, changing true to false and false to true.',
      videoId: 'zlY1i4MA-to',
      color: '#00BCD4'
    },
    {
      term: 'Logical Operator',
      difficulty: 'Intermediate',
      definition: 'A symbol such as &&, ||, or ! that modifies or combines Boolean values.',
      videoId: '12ygXhuxwJs',
      color: '#E53935'
    },
    {
      term: 'Logical OR Operator',
      difficulty: 'Intermediate',
      definition: 'The || operator combines two Boolean values and is true if at least one value is true.',
      videoId: 'YAxfd0ztjQc',
      color: '#00BCD4'
    },
    {
      term: 'Method',
      difficulty: 'Intermediate',
      definition: 'A function that is defined inside a type.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Nest',
      difficulty: 'Intermediate',
      definition: 'To place one loop or statement inside another.',
      videoId: 'W76Z6MpgZNQ',
      color: '#00BCD4'
    },
    {
      term: 'Operator',
      difficulty: 'Beginner',
      definition: 'A symbol, such as +, -, or &&, that represents an action on one or more values.',
      videoId: '4a8fPYdVZc8',
      color: '#E53935'
    },
    {
      term: 'Outer Loop',
      difficulty: 'Intermediate',
      definition: 'A loop that contains another loop inside it.',
      videoId: 'QZrxwf41KhY',
      color: '#00BCD4'
    },
    {
      term: 'Parameter',
      difficulty: 'Beginner',
      definition: 'The named input in a function definition that receives a value when the function is called.',
      videoId: 'JP6mZ1wBJ0w',
      color: '#E53935'
    },
    {
      term: 'Pattern',
      difficulty: 'Beginner',
      definition: 'A repeating set of circumstances or data.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Property',
      difficulty: 'Beginner',
      definition: 'A variable defined inside a type that stores part of that type\'s data.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Pseudocode',
      difficulty: 'Beginner',
      definition:
        'An easy-to-read description of an algorithm, often written in a mix of everyday language and code-like structure.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Reusability',
      difficulty: 'Intermediate',
      definition: 'A characteristic of code that allows it to be used in different situations in an application.',
      videoId: 'BeuiP38OnMQ',
      color: '#E53935'
    },
    {
      term: 'Right-Hand Rule',
      difficulty: 'Intermediate',
      definition:
        'A maze-solving rule where a character follows along the wall on its right-hand side.',
      videoId: '4BO9PmavqU8',
      color: '#00BCD4'
    },
    {
      term: 'Sequence',
      difficulty: 'Beginner',
      definition: 'The specific order in which code statements are executed in an application.',
      videoId: 'yST50K_7LhQ?si=p8HbP06V2C5Mk269',
      color: '#E53935'    
    },
    {
      term: 'State',
      difficulty: 'Beginner',
      definition: 'The stored information of a variable, application, or system at a given time.',
      videoId: 'f7_1rFCsJbw',
      color: '#E53935'
    },
    {
      term: 'Statement',
      difficulty: 'Beginner',
      definition: 'A structure, such as a loop or if statement, that organizes code in an application.',
      videoId: 'mdEw6Oq5VhA?si=Qz0i4Laozrn8RWxf',
      color: '#00BCD4'
    },
    {
      term: 'String',
      difficulty: 'Beginner',
      definition: 'A type that stores a series of characters, such as "Hello, world!".',
      videoId: 'evKGaIYVNcs?si=7Lmm42KH5LdHjoxV',
      color: '#E53935'
    },
    {
      term: 'Swift',
      difficulty: 'Beginner',
      definition:
        'Apple\'s programming language used for writing apps for iPhone, iPad, Mac, Apple Watch, and Apple TV.',
      videoId: 'aijgLE35mzo?si=ABXtuCCP2t0js6X7',
      color: '#00BCD4'
    },
    {
      term: 'Syntax',
      difficulty: 'Beginner',
      definition: 'The rules for writing code that computers can understand and run.',
      videoId: 'dmRr4rwDZB0?si=r9dsldfjvzvkPWwj',
      color: '#E53935'
    },
    {
      term: 'Type',
      difficulty: 'Beginner',
      definition: 'A named grouping of properties and methods that describes a kind of data.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'While Loop',
      difficulty: 'Beginner',
      definition: 'A block of code that runs as long as a condition is true and stops when it becomes false.',
      videoId: 'L0LNFNEYxgo',
      color: '#E53935'
    },
    {
      term: 'Wireframe',
      difficulty: 'Beginner',
      definition:
        'An outline of an item in the puzzle world used to indicate that it may randomly appear each time the puzzle runs.',
      videoId: 'P07IAu2QAgQ',
      color: '#00BCD4'
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
