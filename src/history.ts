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

export const history: HistoryItem[] = [
  {
    company: "Immoscoop",
    position: POSITIONS.FRONTEND,
    start: "2024",
    end: "2025",
    description: `
I worked on the frontend of the Immoscoop website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the user 
interface, as well as implementing the backend functionality using Node.js and Express.js.
`,
    tags: ["react", "nextjs", "typescript", "aws", "docker", "agile", "cicd"],
  },
  {
    company: "Promogoten",
    position: POSITIONS.FULLSTACK,
    start: "2024",
    end: "2025",
    description: `
I worked on the backend of the Promogoten website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the backend 
functionality using Node.js and Express.js. I also implemented the frontend using React.js.
      `,
    tags: ["react", "retool", "typescript", "golang", "rest", "postgres"],
  },
  {
    company: "VMM",
    position: POSITIONS.FRONTEND,
    start: "2024",
    end: "2024",
    description: `
I worked on the backend of the VMM website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the backend 
functionality using Node.js and Express.js. I also implemented the frontend using React.js.
      `,
    tags: ["react", "volto", "plone", "typescript", "datavis"],
  },
  {
    company: "Brussels Airport",
    position: POSITIONS.FRONTEND,
    start: "2024",
    end: "2024",
    description: `
I worked on the backend of the Brussels Airport website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the backend 
functionality using Node.js and Express.js. I also implemented the frontend using React.js.
      `,
    tags: ["aws", "vuejs", "typescript", "aws"],
  },
  {
    company: "Vlaamse Overheid",
    position: POSITIONS.FRONTEND,
    start: "2023",
    end: "2024",
    description: `
I worked on the frontend of the Vlaamse Overheid website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the user 
interface, as well as implementing the backend functionality using Node.js and Express.js.
      `,
    tags: ["react", "gatsby", "typescript", "datavis"],
  },
  {
    company: "Optios",
    position: POSITIONS.FRONTEND,
    start: "2022",
    end: "2023",
    description: `
I worked on the frontend of the Optios website, which was a platform for booking and 
managing vacation packages. I was responsible for designing and implementing the user 
interface, as well as implementing the backend functionality using Node.js and Express.js.
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
    tags: ["vuejs", "typescript", "csharp", "dotnetcore"],
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
      "ai",
    ],
  },
];
