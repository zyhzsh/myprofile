import desitnaImg from '../assets/projects/desitna-draft.png';
import bike from '../assets/projects/bike.mp4';
import voucker from '../assets/projects/voucker.png';
import seethrough from '../assets/projects/seethrough.png';
import climbtrain from '../assets/projects/climbtrain.mp4';
import dx from '../assets/projects/dx.png';
import blog from '../assets/projects/blog.png';
import glow from '../assets/projects/glow.png';
import ehealth from '../assets/projects/e-health.png';
import syncEngine from '../assets/projects/sync-engine.jpg';
import op from '../assets/projects/op.png';
import lfdemo from '../assets/projects/lfdemo.png';
import wjmPImg from '../assets/projects/wejustmatchImg.png';
import compliance from '../assets/projects/compliance.png';
import discountapp from '../assets/projects/item-discount.mp4';
import docScanner from '../assets/projects/docScanner.mp4';
import marketingDashboard from '../assets/projects/marketing-dashboard.png';
import menumorrow from '../assets/projects/menumorrow-preview.png';
import oncoprotocol from '../assets/projects/oncoprotocol-assist.webp';
export const HERO_CONTENT =
  "I'm Shenghang, a full-stack developer based in the Netherlands. I enjoy taking an idea, figuring out how it could work, and building something people can try.";

export const ABOUT_TEXT =
  'I like having a say in what we build, not just how we build it. That might mean trying a different interaction, asking why a business rule exists, or realising that clearer instructions would help more than another feature. My own projects give me room to try those ideas and find out what happens when people use them.';

export const EXPERIENCES = [
  {
    year: 'Mar 2025 - Present',
    role: 'Full-Stack Software Developer',
    image: op,
    company: 'Objective Platform',
    description:
      'I work on marketing analytics and forecasting software, across the interface, backend and deployment. A lot of the job is understanding what the numbers should mean to the person using them.',
    highlights: [
      'Built scenario versioning and saved optimization results, so users can return to the same result later rather than see it change underneath them.',
      'Took an AI agent from prototype to a deployed service, including its deployment pipeline, and built features connecting it to existing product workflows.',
      'Worked with product and data science colleagues on clearer interactions, business rules and production issues. I also built UI prototypes to try ideas before committing to them.',
    ],
    technologies: [
      'TypeScript',
      'Angular',
      'Java / Spring Boot',
      'PostgreSQL',
      'MongoDB',
      'Google ADK',
      'GCP',
      'DuckDB',
    ],
  },
  {
    year: 'Sep 2023 - Feb 2024',
    role: 'Software Engineer Intern',
    image: syncEngine,
    company: 'byCape BV',
    description:
      'Built a synchronization prototype for collaborative editing, where people could change the same content without overwriting each other. I tested it in two editing modules, ran load tests and documented the design and integration steps for the team.',
    technologies: [
      'TypeScript',
      'Node.js',
      'Y.js / CRDTs',
      'WebSockets',
      'Redis',
      'Cypress',
    ],
  },
  {
    year: 'Feb 2022 - Jul 2022',
    role: 'Software Engineer Intern',
    image: compliance,
    company: 'Bosch Security and Safety Systems BV',
    description:
      'Worked on the React interface for an internal product-compliance tool. I interviewed compliance managers and engineers to understand their work, then adjusted the screens and workflows with the product owner and backend developer.',
    technologies: ['React', 'Redux', 'MUI', 'C#', 'MySQL'],
  },
];

export const PROJECTS = [
  {
    title: 'MenuMorrow',
    status: 'In development',
    website: 'https://menumorrow.com/',
    linkLabel: 'Project site',
    image: menumorrow,
    imageAlt: 'MenuMorrow landing page preview for the product in development',
    caption: 'Landing page preview',
    description:
      "I'm building an ordering tool for independent food makers and small shops. The idea is to give them one link for a batch of preorders or a regular menu, instead of piecing orders together from messages.",
    details: [
      "I've built sign-up, a flow for sellers to register their kitchen, and the deployment setup. Menu management is in progress; ordering and payments are still to come.",
      "I'm working through the product scope as well as the code, keeping each step small enough to test before adding the next one.",
    ],
    technologies: [
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'GCP',
      'Cloudflare',
    ],
  },
  {
    title: 'OncoProtocol-Assist',
    status: 'One-day hackathon, team of five',
    image: oncoprotocol,
    imageAlt:
      'OncoProtocol-Assist answering a neuroblastoma staging question. Each statement has a numbered citation, and the cited protocol page is open on the right with the quoted passage highlighted.',
    caption: 'An answer with its cited protocol page open and the quote highlighted',
    description:
      "At a BSPHO and Google Cloud hackathon in Ghent (Oct 2026), five of us from Objective Platform built a search assistant for paediatric cancer clinicians working through thousands of pages of trial protocols. Doctors won't trust an answer they can't check, so every statement links to its page.",
    details: [
      'I built the interface and the answer pipeline. Before an answer is shown, each statement needs a quote found on the cited page, and any dose or number must appear in that quote; anything that fails is dropped.',
      "We split the work by area and built in parallel. Early on I listed what the screens needed from the backend, so teammates knew what to build first. They later added follow-up questions and subprotocol search on top of my pipeline, and I plugged a teammate's Vertex AI RAG search into it.",
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind',
      'Shadcn/UI',
      'Python / FastAPI',
      'Claude',
      'GCS',
      'Pub/Sub',
      'Vertex AI RAG Engine',
      'Cloud Run',
    ],
  },
  {
    title: 'WeJustMatch',
    status: 'Used across three events',
    website: 'https://we-just-match.com/?lang=en',
    image: wjmPImg,
    description:
      'A friend asked whether his manually organised matchmaking event could become a product. I built the platform, from the event format and UX to matching, chat, payments and deployment.',
    details: [
      'It reached 80 registered users, with around 60 people taking part across three events.',
      'Real use changed the product: I added exclusions for friends attending together and removed age from the first match screen. Sometimes the useful change was better event instructions, not more code.',
    ],
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'DestinaDraft',
    status: 'Independent project',
    website: 'https://www.destinadraft.com/',
    image: desitnaImg,
    description:
      'A personal project for collecting notes and references and organising ideas visually. I designed and built it to explore how a writing workspace could connect scattered material.',
    technologies: [
      'React',
      'TypeScript',
      'GCP',
      'NestJS',
      'PostgreSQL',
      'Vercel',
      'OpenAI',
      'MongoDB',
      'Stripe',
      'Tailwind',
      'Shadcn/UI',
    ],
  },
  {
    title: 'LazyFinder',
    status: 'Personal tool / product exploration',
    image: lfdemo,
    description:
      'When my wife and I were looking for a home, comparing listings and preparing for viewings took a lot of time. I built an AI-assisted workflow that collected and filtered listings, then turned them into reports based on what mattered to us.',
    details: [
      'We used it to narrow our viewing list during the search that led to our home. I later explored how the same approach could help buying agents; that version remains a prototype.',
    ],
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'AI agents'],
  },
  {
    title: 'Marketing Campaign Management System',
    image: marketingDashboard,
    github: 'https://github.com/zyhzsh/marketing-management',
    description:
      'A six-hour coding challenge for managing campaigns, advertising channels and budgets. I connected the React forms to a NestJS API and added validation, including checks that channel dates stay within the campaign dates.',
    technologies: [
      'React',
      'Typescript',
      'Nest',
      'PostgreSQL',
      'Tailwind',
      'Shadcn/UI',
    ],
  },
  {
    title: 'Inventory and discount tool',
    video: discountapp,
    description:
      'A coding challenge project to design a solution that can quickly apply discount rules dynamically to the items in the inventory.',
    technologies: [
      'Typescript',
      'Node.js/NestJs',
      'Docker',
      'PostgreSQL',
      'Tailwind',
      'Shadcn/UI',
    ],
  },
  {
    title: 'Letter translator',

    video: docScanner,
    description:
      'An AI assistant helps non-native speakers quickly understand documentation, letters, and emails. It also provides a user-friendly way to manage their history of translated files.',
    technologies: ['Flutter/Dart', 'Camera/OCR', 'OPEN AI'],
  },
  {
    title: 'Bike Crossing - Bike rental and donation platform',
    video: bike,
    description:
      'The project focuses on creating a bicycle rental and donation platform that encourages the reuse of idle resources. The platform provides a unique identity for each bike and includes self-monitoring mechanisms and community-building features. By promoting ownership awareness and encouraging responsible use, the app aims to reduce incidents of abuse and increase sustainability in the shared mobility industry and beyond.',
    technologies: [
      'Flutter/Dart',
      'UI/UX - Design thinking, Gamification, etc',
    ],
  },
  {
    title: 'Climb Trainer - A training application for bouldering enthusiasts',
    video: climbtrain,
    description:
      'The project aims to provide climbers (bouldering enthusiasts) with an application that connects to an external device, allowing them to access well-crafted training content created by researchers and professionals. The objective is to enhance their finger strength and climbing knowledge.',
    technologies: ['Dart/Flutter', 'Bluetooth', 'Supabase', 'HeadlessCMS'],
  },
  {
    title: 'Voucker - A platform for promoting vouchers',
    image: voucker,
    description:
      'Voucker is a project exploring voucher sales for small local businesses, with a web platform for connecting them with customers.',
    technologies: [
      'Next.js',
      'RabbitMq',
      'GCP',
      'Typescript',
      'Linux',
      'Serverless',
      'K8s',
      'AWS',
      'NestJs',
      'PostgreSQL',
      'Nginx',
      'Docker',
      'Github Action',
      'Stripe',
    ],
  },
  {
    title: 'See-through Q&A Platform for visually impaired individuals',
    image: seethrough,
    description:
      'A team research project at Fontys exploring a Q&A community for visually impaired people with questions about relationships and sexual development. I worked on data models, APIs and the interface, and shared research, documentation and code reviews with the team.',
    technologies: [
      'C#/.Net',
      'RabbitMq',
      'Typescript',
      'Azure',
      'K8s',
      'Github Action',
      'Mysql',
      'API gateway',
      'Docker',
      'CI/CD',
      'Next.js',
    ],
  },
  {
    title: 'Decision Matrix - A small weighted decision-making tool',
    image: dx,
    website: 'https://d-x-zyhzsh.vercel.app/',
    description:
      'A small React tool for comparing options against weighted criteria. I built it to make the trade-offs in a decision easier to see.',
    technologies: ['React'],
  },
  {
    title: 'CMS blog',
    image: blog,
    website: 'https://grapgcms-react-blog.vercel.app/',
    description:
      'Completed a sample project to reinforce knowledge of React.js through an intensive course.',
    technologies: ['React', 'CMS'],
  },
  {
    title: 'De Nederlandse Voetafdruk APP - For Glow (Eindhoven Light event)',
    image: glow,
    website:
      'https://www.fontys.nl/nieuws/beleef-je-ecologische-voetdruk-tijdens-glow/',
    description:
      'Part of a development team that utilized the Flutter Framework to create a fully functional mobile application for Android. The project consisted of two versions: the original aimed to develop a mobile application for the Glow event, allowing visitors to engage with glow lighting art displays. The second version involved modifying the solution for educational purposes. Further information can be accessed through the provided link.',
    technologies: ['Dart/Flutter', 'GPS/Geofence'],
  },
  {
    title: 'Healthcare data conversion prototype',
    image: ehealth,
    description:
      'Worked in a team on a backend proof of concept for exchanging data between a healthcare data provider and a mobile application. I helped design and implement the API for translating and caching the data.',
    technologies: ['Java/SpringBoot', 'Mysql', 'Docker', 'CI/CD', 'Github'],
  },
];

export const CONTACT = {
  address: 'Lelystad, Netherlands',
  email: 'zhushenghang@hotmail.com',
};
