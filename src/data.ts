export type HistoryItem = {
  company: string;
  position: string;
  start: string;
  end: string;
  description: string;
  tags: string[];
};

const POSITIONS = {
  FRONTEND: "Frontend Developer",
  FULLSTACK: "Fullstack Developer",
};

export const meta = {
  name: "Stijn Tytgat",
  title: "Fullstack Developer",
  location: "2800 Mechelen",
  phone: "(+32) 476 90 11 49",
  email: "stijn@stinodes.dev",
  education: [
    {
      name: "Multimedia- & Communication Technology",
      institution: "EHB",
      period: "2013 - 2016",
      type: "Bachelor's degree",
    },
  ],
  languages: ["English", "Dutch"],
  profile: `
I am a fullstack developer with nearly 10 years of experience building 
interactive and data-driven user interfaces and am specialized in 
creating web applications using typescript in combination with react and many 
more UI-libraries and frameworks.
I have experience with many different stacks in various contexts, including
IOT, AI and data visualization.
  `,
};

export const history: HistoryItem[] = [
  {
    company: "Immoscoop",
    position: POSITIONS.FRONTEND,
    start: "2024",
    end: "2025",
    description: `
Development of the Immoscoop website and its secondary applications, with great 
focus on SEO and SSR together with a diverse team of designers and developers.
`,
    tags: ["react", "nextjs", "typescript", "aws", "docker", "agile", "cicd"],
  },
  {
    company: "Promogoten",
    position: POSITIONS.FULLSTACK,
    start: "2024",
    end: "2025",
    description: `
Designing and implementing internal tooling for managing tasks, clients and supporting workflows 
for a business growth partner.
      `,
    tags: ["react", "retool", "typescript", "golang", "rest", "postgres"],
  },
  {
    company: "VMM",
    position: POSITIONS.FRONTEND,
    start: "2024",
    end: "2024",
    description: `
Developing a new website powered by the open-source Plone CMS using
React in its front-end Volto framework.
      `,
    tags: ["react", "volto", "plone", "typescript", "datavis"],
  },
  {
    company: "Brussels Airport",
    position: POSITIONS.FRONTEND,
    start: "2024",
    end: "2024",
    description: `
Migrating an internal application for platformization, moving from in-house 
cloud solutions to AWS.
      `,
    tags: ["aws", "vuejs", "typescript", "aws"],
  },
  {
    company: "Vlaamse Overheid",
    position: POSITIONS.FRONTEND,
    start: "2023",
    end: "2024",
    description: `
Creating a set of data-visualization platforms, powered by Drupal and Gatsby.
      `,
    tags: ["react", "gatsby", "typescript", "datavis"],
  },
  {
    company: "Optios",
    position: POSITIONS.FRONTEND,
    start: "2022",
    end: "2023",
    description: `
Development of a booking and register application for hairdressers
      `,
    tags: ["react", "reactnative", "typescript", "docker"],
  },
  {
    company: "Digitaal Vlaanderen",
    position: POSITIONS.FRONTEND,
    start: "2021",
    end: "2022",
    description: `
I worked on the frontend of the Digitaal Vlaanderen website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the user 
interface, as well as implementing the backend functionality using Node.js and Express.js.
      `,
    tags: ["vuejs", "typescript"],
  },
  {
    company: "Nationale Loterij",
    position: POSITIONS.FRONTEND,
    start: "2021",
    end: "2021",
    description: `
I worked on the frontend of the Nationale Loterij website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the user 
interface, as well as implementing the backend functionality using Node.js and Express.js.
      `,
    tags: ["react", "typescript"],
  },
  {
    company: "Volvo Financial Services",
    position: POSITIONS.FULLSTACK,
    start: "2020",
    end: "2021",
    description: `
I worked on the backend of the Volvo Financial Services website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the backend 
functionality using Node.js and Express.js. I also implemented the frontend using React.js.
      `,
    tags: ["react", "mysql", "typescript", "azure", "datavis"],
  },
  {
    company: "Ixor",
    position: POSITIONS.FULLSTACK,
    start: "2016",
    end: "2020",
    description: `
I worked on the backend of the Ixor website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the backend 
functionality using Node.js and Express.js. I also implemented the frontend using React.js.
      `,
    tags: [
      "react",
      "reactnative",
      "typescript",
      "java",
      "spring",
      "postgres",
      "datavis",
      "iot",
      "android",
    ],
  },
];
