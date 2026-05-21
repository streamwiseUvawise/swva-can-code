const excludedShowcaseAssetNames = new Set([
  'banner.png',
  'canCodeLogo.png',
  'canCreateLogo.png',
  'swift.svg'
]);

const showcaseAssetModules = import.meta.glob('../assets/showcase/*.{png,jpg,jpeg,avif,webp,gif}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

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
    .replace(/\.(avif|webp|png|jpe?g|gif)$/i, '')
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
  .map(({ src, alt, fit }) => ({ src, alt, fit }));

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
  // TODO (after next camp): Replace demo entries below with real student projects.
  // Keep each object shape the same so the existing Showcase grid design continues to work.
  // Example template:
  // {
  //   id: 101,
  //   title: 'Project Title',
  //   student: 'Student Name',
  //   age: 14,
  //   description: '1-2 sentence summary of the project and problem solved.',
  //   skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  //   image: 'https://...',
  //   projectUrl: 'https://...' // optional (leave blank if no link yet)
  // }
  projects: [] as Array<{
    id: number;
    title: string;
    student: string;
    age: number;
    description: string;
    skills: string[];
    image: string;
    projectUrl?: string;
  }>,
  projectsEmptyMessage: 'Student project highlights will be posted here after camp judging is complete.',
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
