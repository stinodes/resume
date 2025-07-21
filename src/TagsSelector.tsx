const tagNames = {
  react: "React",
  typescript: "TypeScript",
  nextjs: "Next.js",
  retool: "ReTool",
  volto: "Volto",
  plone: "Plone",
  aws: "AWS",
  vuejs: "Vue.js",
  gatsby: "Gatsby",
  golang: "Go",
  rest: "REST",
  postgres: "Postgres",
  reactnative: "React Native",
  mysql: "MySQL",
  azure: "Azure",
  datavis: "Data Visualization",
  iot: "IoT",
  android: "Android",
  ai: "AI",
  csharp: "C#",
  dotnetcore: ".NET Core",
  java: "Java",
  docker: "Docker",
  cicd: "CI/CD",
  agile: "Agile",
  spring: "Spring",
};

const tagTx = (tag: string) => {
  if (tagNames[tag]) {
    return tagNames[tag];
  }
  return `notfound:${tag}`;
};
type Tag = {
  tag: string;
  selected: boolean;
};

export const Tag = (props: {
  tag: string;
  selected: boolean;
  onSelect?: (tag: string, selected: boolean) => void;
}) => {
  return (
    <li
      class={`${props.selected ? "bg-slate-700" : "bg-slate-500"} text-slate-100 text-sm px-2 rounded-md cursor-pointer`}
      onClick={() => props.onSelect?.(props.tag, !props.selected)}
    >
      {tagTx(props.tag)}
    </li>
  );
};
export const TagsSelector = (props: {
  tags: Tag[];
  onTagSelect?: (tag: string, selected: boolean) => void;
}) => {
  return (
    <ul class="flex gap-1 flex-wrap">
      {props.tags.map((tag) => (
        <Tag {...tag} onSelect={props.onTagSelect} />
      ))}
    </ul>
  );
};
