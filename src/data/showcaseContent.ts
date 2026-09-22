const excludedShowcaseAssetNames = new Set([
  'banner.png',
  'canCodeLogo.png',
  'canCreateLogo.png',
  'swift.svg'
]);

const showcaseAssetModules = import.meta.glob('../assets/showcase/*.{png,jpg,jpeg,avif,webp,gif,pdf,PNG,JPG,JPEG,AVIF,WEBP,GIF,PDF}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const studentProjectAssetModules = import.meta.glob('../assets/student-projects/*.{png,jpg,jpeg,avif,webp,gif,pdf,PNG,JPG,JPEG,AVIF,WEBP,GIF,PDF}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const winnerAssetModules = import.meta.glob('../assets/winners/**/*.{png,jpg,jpeg,avif,webp,gif,PNG,JPG,JPEG,AVIF,WEBP,GIF}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

function buildProjectTitle(fileName: string) {
  return fileName
    .replace(/\.(avif|webp|png|jpe?g|gif|pdf)$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function inferProjectType(title: string): ShowcaseProjectType {
  if (/game/i.test(title)) {
    return 'Games';
  }
  if (/web|website/i.test(title)) {
    return 'Websites';
  }
  if (/art|animation/i.test(title)) {
    return 'Art & Animation';
  }
  return 'Apps';
}

const showcaseImageOverrides: Array<{
  matcher: (fileName: string) => boolean;
  alt: string;
  fit?: 'cover' | 'contain';
  priority?: number;
}> = [
  {
    matcher: (fileName) => /^(heather|heahter)\./i.test(fileName),
    alt: 'Heather Askea, Program Director for SWVA Can Code',
    fit: 'contain',
    priority: -1
  }
];

function buildGalleryAltText(fileName: string) {
  let label = fileName
    .replace(/\.(avif|webp|png|jpe?g|gif|pdf)$/i, '')
    .replace(/\.(png|jpe?g|webp|gif)$/i, '')
    .replace(/-[A-Za-z0-9]{8,}$/, '')
    .replace(/[_-]+/g, ' ')
    .trim();

  if (!label) {
    label = 'student project';
  }

  return `SWVA showcase photo: ${label}`;
}

const showcaseGalleryImages = Object.entries(showcaseAssetModules)
  .map(([path, src]) => {
    const fileName = path.split('/').pop() ?? '';
    return { fileName, src };
  })
  .filter(({ fileName }) => !excludedShowcaseAssetNames.has(fileName))
  .filter(({ fileName }) => !/(^|\W)(heather|heahter)\./i.test(fileName))
  .map(({ fileName, src }) => {
    const override = showcaseImageOverrides.find((item) => item.matcher(fileName));
    return {
      src,
      type: /\.pdf$/i.test(fileName) ? 'pdf' : 'image',
      alt: override?.alt ?? buildGalleryAltText(fileName),
      fit: override?.fit ?? 'cover',
      priority: override?.priority ?? 0,
      fileName
    };
  })
  .sort((left, right) => {
    if (left.priority !== right.priority) {
      return left.priority - right.priority;
    }
    return left.fileName.localeCompare(right.fileName);
  })
  .map(({ src, type, alt, fit }) => ({ src, type, alt, fit }));

export type ShowcaseProjectType = 'Games' | 'Websites' | 'Apps' | 'Art & Animation';

const uploadedStudentProjects = Object.entries(studentProjectAssetModules)
  .map(([path, src], index) => {
    const fileName = path.split('/').pop() ?? '';
    const title = buildProjectTitle(fileName);
    return {
      id: index + 1,
      title,
      type: inferProjectType(title),
      student: 'SWVA Can Code student project',
      description: 'Student project materials uploaded by the SWVA Can Code team.',
      skills: [],
      image: src,
      mediaType: /\.pdf$/i.test(fileName) ? 'pdf' as const : 'image' as const
    };
  })
  .sort((left, right) => left.title.localeCompare(right.title))
  .filter((project, index, projects) => (
    index === projects.findIndex((candidate) => candidate.title.toLowerCase() === project.title.toLowerCase())
  ));

const uploadedWinners = Object.entries(winnerAssetModules)
  .map(([path, src]) => {
    const pathParts = path.split('/');
    const fileName = pathParts.pop() ?? '';
    const folderYear = pathParts.pop() ?? '';
    const year = /^\d{4}$/.test(folderYear)
      ? folderYear
      : fileName.match(/(?:^|\D)(\d{4})(?:\D|$)/)?.[1] ?? '';
    return {
      src,
      year,
      title: buildProjectTitle(fileName),
      alt: `SWVA Can Code ${year} winner: ${buildProjectTitle(fileName)}`,
      fileName
    };
  })
  .filter((winner) => /^\d{4}$/.test(winner.year))
  .sort((left, right) => {
    const yearOrder = Number(right.year) - Number(left.year);
    return yearOrder || left.fileName.localeCompare(right.fileName);
  });

// Editable content for the Showcase page.
export const showcaseContent = {
  hero: {
    title: 'Student Showcase',
    subtitle:
      'Students from all over SWVA are rising to the challenge this summer to develop an app prototype that addresses a key economic or community need.'
  },
  eventDetails: {
    dateAndVenue: 'August 2026 @ the David J. Prior Convocation Center',
    campus: "on the Campus of The University of Virginia's College at Wise",
    celebrationTitle: 'Celebrating Student Achievements!',
    posterSessionText:
      'The top three projects from each camp will be shared in poster-style sessions.',
    pitchCompetitionText:
      'The top projects from each camp will be invited to pitch their prototypes in a rapid-fire pitch competition for prizes and accolades!'
  },
  filterTags: ['All Projects', 'Games', 'Websites', 'Apps', 'Art & Animation'],
  // Add optional student details to uploaded project entries when they are available.
  // Example template:
  // {
  //   id: 101,
  //   title: 'Project Title',
  //   type: 'Apps',
  //   student: 'Student Name',
  //   age: 14,
  //   description: '1-2 sentence summary of the project and problem solved.',
  //   skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  //   image: 'https://...',
  //   projectUrl: 'https://...' // optional (leave blank if no link yet)
  // }
  projects: uploadedStudentProjects as Array<{
    id: number;
    title: string;
    type: ShowcaseProjectType;
    student: string;
    description: string;
    skills: string[];
    image: string;
    mediaType: 'image' | 'pdf';
    projectUrl?: string;
  }>,
  projectsEmptyMessage: 'Student project highlights will be posted here after camp judging is complete.',
  winners: {
    title: 'Regional Showcase Winners',
    description: 'Celebrate the student teams whose ideas stood out at each regional showcase.',
    images: uploadedWinners,
    emptyMessage: 'Winner photos will be added here after each regional showcase. Add them to src/assets/winners/<year>/. '
  },
  gallery: {
    title: 'Student Showcase Gallery',
    // TODO (after next camp): Curate final event photos here.
    // Suggested sequence from the previous showcase format:
    // 1) Poster-style sessions (top three projects from each camp)
    // 2) Rapid-fire pitch competition highlights
    // 3) Awards and celebration moments
    description: 'Photos from camps, showcases, and project demos are curated by the SWVA Can Code team.',
    images: showcaseGalleryImages
  },
  submitCta: {
    title: 'Built Something Amazing?',
    description: "Share your project with the community! We'd love to feature your work in our showcase.",
    buttonLabel: 'Submit Your Project',
    buttonTo: '/contact'
  },
  stats: [
    { value: '50+', label: 'Projects Created', colorClass: 'text-[#00BCD4]' },
    { value: '15+', label: 'Camps Run', colorClass: 'text-[#E53935]' },
    { value: '20+', label: 'Awards Won', colorClass: 'text-[#00BCD4]' }
  ]
};
