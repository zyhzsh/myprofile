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
import dd from '../assets/projects/dd.png';
import compliance from '../assets/projects/compliance.png';
import discountapp from '../assets/projects/item-discount.mp4';
import docScanner from '../assets/projects/docScanner.mp4';
import marketingDashboard from '../assets/projects/marketing-dashboard.png';
export const HERO_CONTENT = `
Driven by curiosity, fueled by passion. A Software Engineer with experience in frontend, backend, and mobile development. Skilled in JavaScript/TypeScript, Dart, and Java. 
`;

export const ABOUT_TEXT = `
I thrive on turning ideas into reality and enjoy tackling complex challenges. Now, I’m eager to contribute to meaningful projects and collaborate with like-minded teams to drive positive change.
`;

export const EXPERIENCES = [
  {
    year: 'Mar 2025 - Present',
    role: 'Fullstack Software Developer/Engineer',
    image: op,
    company: 'Objective Platform',
    description: ``,
    technologies: [],
  },
  {
    website: 'https://www.destinadraft.com/',
    year: 'Aug 2024 - Present',
    role: 'Founder & Developer',
    image: dd,
    company: 'DestinaDraft',
    description:
      'Designed and developed DestinaDraft from concept to implementation as a personal project.',
    technologies: [
      'React',
      'Typescript',
      'GCP',
      'Nest',
      'PostgreSQL',
      'Vercel',
      'OpenAI',
      'MongoDb',
      'Stripe',
      'Tailwind',
      'Shadcn/UI',
    ],
  },
  {
    year: 'Sep 2023 - Feb 2024',
    role: 'Software Engineer Intern',
    image: syncEngine,
    company: 'byCape BV',
    description: `Conducted an in-depth analysis of the existing system to design and implement an in-house data synchronization solution, enabling real-time collaboration features for the software system. This initiative involved comprehensive stages, from research and design to development and testing, resulting in the successful delivery of an innovative mechanism that unlocks the product’s real-time collaboration capabilities. The process included researching and analyzing existing systems to balance innovation and constraints, conducting usability tests to validate solutions and improve design, performing load tests to identify and address bottlenecks, and delivering and testing integration documentation for the development team to ensure proper solution handover.`,
    technologies: [
      'GCP',
      'Docker',
      'GitLab',
      'CRDTs',
      'Cypress',
      'React',
      'Redux',
      'Node',
      'Express.js',
      'WebRTC',
      'WebSockets',
      'TypeScript',
    ],
  },
  {
    year: 'Feb 2022 - Jul 2022',
    role: 'Software Engineer Intern',
    image: compliance,
    company: 'Bosch Security and Safety Systems BV',
    description:
      'Contributed to a project aimed at developing an automated tool for internal product compliance checking, with responsibilities spanning both frontend development and backend support. Redesigned the user interface and workflow based on design principles to significantly enhance user experience, which involved refactoring the existing codebase and streamlining user interaction. Conducted thorough domain research by interviewing compliance managers, engineers, and collaborating with the backend developer to gather requirements and translate them into actionable tasks. Adopted an agile workflow with iterative releases and regular testing with the product owner, ensuring timely and user-focused improvements.',
    technologies: ['C#', 'React', 'Redux', 'MUI', 'MySQL', 'Windows server'],
  },
];

export const PROJECTS = [
  {
    title:
      'DestinaDraft - Personal Note,Project,Idea vidualization management library tools',
    website: 'https://www.destinadraft.com/',
    image: desitnaImg,
    description:
      'A writing mindmap management solution designed to streamline how individuals and teams capture, organize, and share knowledge. It provides a comprehensive personal idea library and reference management system, allowing users to effortlessly record and access ideas in any format, manage writing materials based on their preferences, and seamlessly generate structured profiles. By offering a central hub for study notes, inspirational references, and visualized idea resources, it ensures that every piece of information is goal-oriented and efficiently organized',
    technologies: [
      'React',
      'Typescript',
      'GCP',
      'Nest',
      'PostgreSQL',
      'Vercel',
      'OpenAI',
      'MongoDb',
      'Stripe',
      'Tailwind',
      'Shadcn/UI',
    ],
  },
  {
    title: 'Marketing Campaign Management System',
    image: marketingDashboard,
    github: 'https://github.com/zyhzsh/marketing-management',
    description:
      'A full-stack web application designed to streamline the creation and management of marketing campaigns. The system enables businesses to create campaigns, manage advertising channels, and track budget allocation. It ensures data integrity with strict validation rules, preventing any advertising channel from exceeding the campaign timeframe. Built as part of a 6-hour case study challenge, the project demonstrates efficient full-stack development, incorporating dynamic form validation, API-driven architecture, and comprehensive test coverage.',
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
    title: 'Product, Inventory, Discount Mangement tool',
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
    title: 'Letter tranlator, manager App',

    video: docScanner,
    description:
      'An AI assistant helps non-native speakers quickly understand documentation, letters, and emails. It also provides a user-friendly way to manage their history of translated files.',
    technologies: ['Flutter/Dart', 'Camera/OCR', 'OPEN AI'],
  },
  {
    title: 'Bike Corssing - Bike rental and donation platform',
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
      'Voucher is a web platform that specializes in the sales of vouchers, aimed at promoting and expanding the reach of small, locally-owned businesses by connecting them to a larger customer base.',
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
      'As part of a research program at Fontys, participated in a conceptual project aimed at addressing the challenges faced by visually impaired individuals in their relationships and sexual development through the creation of a supportive online community platform. Utilized technologies including C# and .Net Core API, RabbitMQ, Typescript, Next.js, React.js, and Azure. Conducted comprehensive research and shared outcomes with the team and stakeholders. Responsible for designing and implementing software solutions while maintaining comprehensive documentation to support future development and scalability. Performed code reviews to ensure the highest quality of development, adherence to best practices, and the implementation of efficient code. Acted as a full-stack engineer, handling tasks from data modeling to system design and feature implementation.',
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
      'Ideas are ignited when analyzing and making decisions between different options, whether individually or in a team. To address these daily challenges, combined this with a previously learned concept to create a visualized weighted decision-making tool.',
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
    title: 'E-health Data Conversion BBF',
    image: ehealth,
    description:
      'Collaborated in a team of 5-8 software engineers to design, model, and implement a proof-of-concept backend API server for two clients, Asolution (a healthcare data provider) and Eurocom (a mobile application solution provider). The project aimed to expose, translate, convert, and cache data from Asolution to Eurocom, ensuring seamless data integration and efficient performance between the two companies. Responsible for designing a proof-of-concept solution for exchanging data between Asolution and Eurocom’s mobile application.',
    technologies: ['Java/SpringBoot', 'Mysql', 'Docker', 'CI/CD', 'Github'],
  },
];

export const CONTACT = {
  address: 'Amsterdam Netherlands',
  email: 'contact@shenghangzhu.com',
};
