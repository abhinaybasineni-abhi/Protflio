/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Abhinay Basineni',
  pageTitle: 'Abhinay Basineni – Full Stack Developer',
  role: 'Aspiring Full Stack Developer',
  email: 'abhinaybasineni@gmail.com',
  phone: '+91 9581889452',
  whatsappMessage: 'Hi Abhinay, I visited your portfolio and would like to connect.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'CSE STUDENT • FULL STACK DEVELOPMENT',
  headline: 'ABHINAY BASINENI',
  roles: ['FULL STACK DEVELOPER', 'WEB DEVELOPER'] as [string, string],
  tagline: 'Building responsive and user-friendly web applications through modern frontend and backend technologies.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'GET IN TOUCH',
  image: '/assets/hero-red-bg.jpg',
  imageAlt: 'Professional portrait of Abhinay Basineni',
  imagePosition: '69% center',
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'YOUR ONE LINE STATEMENT GOES RIGHT HERE',
  redWords: ['STATEMENT', 'HERE'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Aspiring Full Stack Developer · CSE Student · Technology Enthusiast',

  portrait: '/media/profile.png',

  portraitAlt: 'Portrait of Abhinay Basineni',

  portraitCaption: 'Aspiring Full Stack Developer',

  paragraphs: [
    'Hi, I am Abhinay Basineni, a Computer Science Engineering student at Annamacharya University in collaboration with NIAT. I am passionate about developing modern web applications and exploring the world of software engineering.',

    'I enjoy working with frontend and backend technologies, building real-world projects, and solving programming challenges. I continuously improve my technical skills through hands-on learning, hackathons, workshops, and collaborative experiences. My goal is to become a skilled Full Stack Developer and create meaningful digital solutions.',
  ],

  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Tailwind CSS',
    'Bootstrap',
    'Python',
    'Node.js',
  ],

  focus: [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
  ],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */

export const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/abhinaybasineni-abhi',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abhinay-basineni-87678b3a9/',
  },
] as const;


/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */

export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  {
    name: 'Frontend Development',
    category: 'HTML · CSS · JavaScript',
    level: 'Proficient',
  },
  {
    name: 'React Development',
    category: 'React.js · Components',
    level: 'Learning & Building',
  },
  {
    name: 'CSS Frameworks',
    category: 'Tailwind CSS · Bootstrap',
    level: 'Proficient',
  },
  {
    name: 'Backend Development',
    category: 'Node.js · Express.js',
    level: 'Foundational',
  },
  {
    name: 'Programming',
    category: 'Python · C · JavaScript',
    level: 'Learning & Practicing',
  },
  {
    name: 'Developer Tools',
    category: 'Git · GitHub · VS Code',
    level: 'Practicing',
  },
];


/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'React',
  'JavaScript',
  'Python',
  'Three.js',
  'GSAP',
  'HTML',
  'CSS',
  'Node.js',
];
/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}


export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'talkify',
    kind: 'software',
    title: 'Talkify',
    subtitle: 'English Learning & Interview Practice Platform',
    category: 'Web Development',
    poster: '/assets/thumbnails/project-1-1.jpg',
    liveUrl: 'https://talkify-dusky.vercel.app/',
    description:
      'A web application designed to help users improve their English communication and prepare for HR interviews through interactive practice experiences.',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Application'],
  },
  {
    id: 'wayfare',
    kind: 'software',
    title: 'Wayfare',
    subtitle: 'Smart Carpooling Platform',
    category: 'Full Stack Development',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'A smart carpooling platform concept that helps users connect and coordinate shared rides through a user-friendly web application.',
    tags: ['React', 'Supabase', 'JavaScript', 'Full Stack'],
  },
  {
    id: 'campusconnect',
    kind: 'software',
    title: 'CampusConnect',
    subtitle: 'Smart Campus Management Portal',
    category: 'Internship Project · In Progress',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'An internship project focused on building a responsive campus management portal with student services, notices, attendance and campus information.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
  },
];


/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Service One', priceLabel: 'Starts from', price: '₹0,000', featured: true },
  { id: 'service-2', title: 'Service Two', priceLabel: 'Starts from', price: '₹0,000', featured: false },
  { id: 'service-3', title: 'Service Three', priceLabel: 'From – to', price: '₹0,000 – ₹0,000', featured: false },
  { id: 'service-4', title: 'Service Four', priceLabel: 'From – to', price: '₹0,000 – ₹0,000', featured: false },
  { id: 'service-5', title: 'Service Five', priceLabel: 'From – to', price: '₹0,000 – ₹0,000', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 3, suffix: '+', label: 'PROJECTS BUILT' },
  { id: 'stat-2', value: 4, suffix: '+', label: 'HACKATHONS & EVENTS' },
  { id: 'stat-3', value: 8, suffix: '+', label: 'TECHNOLOGIES' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
