import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaMobile,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaProjectDiagram,
  FaSearch,
  FaStream,
  FaBook,
  FaUserShield,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiDaisyui,
  SiTypescript,
  SiPython,
  SiSharp,
  SiPostgresql,
  SiSequelize,
  SiFlask,
  SiSqlite,
  SiPrisma,
  SiCheckmarx,
  SiMocha,
  SiJasmine,
  SiFastapi,
  SiOllama,
} from "react-icons/si";
import {
  TbBrandVscode,
  TbApi,
  TbTerminal2,
  TbMessageChatbot,
} from "react-icons/tb";
import type { IconType } from "react-icons";

export type SkillLevel = "Proficient" | "Experienced" | "Intermediate";

export type Skill =
  | { kind: "icon"; Icon: IconType; name: string; level: SkillLevel }
  | { kind: "image"; src: string; name: string; level: SkillLevel };

export const frontEndSkills: Skill[] = [
  { kind: "icon", Icon: FaReact, name: "React.js", level: "Proficient" },
  { kind: "icon", Icon: SiNextdotjs, name: "Next.js", level: "Experienced" },
  { kind: "icon", Icon: SiRedux, name: "Redux", level: "Proficient" },
  { kind: "icon", Icon: SiJavascript, name: "JavaScript", level: "Proficient" },
  { kind: "icon", Icon: FaHtml5, name: "HTML5", level: "Intermediate" },
  { kind: "icon", Icon: FaCss3Alt, name: "CSS3", level: "Intermediate" },
  { kind: "icon", Icon: SiBootstrap, name: "Bootstrap", level: "Proficient" },
  {
    kind: "icon",
    Icon: SiTailwindcss,
    name: "TailwindCSS",
    level: "Intermediate",
  },
  { kind: "icon", Icon: SiDaisyui, name: "DaisyUI", level: "Experienced" },
  {
    kind: "icon",
    Icon: FaMobile,
    name: "Responsive Design",
    level: "Intermediate",
  },
  { kind: "icon", Icon: FaGitAlt, name: "Git", level: "Proficient" },
  { kind: "icon", Icon: FaGithub, name: "Github", level: "Proficient" },
  { kind: "icon", Icon: TbBrandVscode, name: "VSCode", level: "Proficient" },
];

export const backEndSkills: Skill[] = [
  {
    kind: "icon",
    Icon: SiTypescript,
    name: "TypeScript",
    level: "Intermediate",
  },
  { kind: "icon", Icon: SiPython, name: "Python", level: "Experienced" },
  { kind: "icon", Icon: SiSharp, name: "C#", level: "Experienced" },
  { kind: "icon", Icon: TbTerminal2, name: "PowerShell", level: "Experienced" },
  { kind: "icon", Icon: FaNodeJs, name: "Node.js", level: "Proficient" },
  { kind: "icon", Icon: FaServer, name: "Express.js", level: "Intermediate" },
  { kind: "icon", Icon: TbApi, name: "RESTful API", level: "Proficient" },
  { kind: "icon", Icon: SiPostgresql, name: "PostgreSQL", level: "Proficient" },
  { kind: "icon", Icon: SiSequelize, name: "Sequelize", level: "Proficient" },
  { kind: "icon", Icon: SiFlask, name: "Flask", level: "Experienced" },
  { kind: "icon", Icon: SiSqlite, name: "SQLite", level: "Experienced" },
  { kind: "icon", Icon: SiPrisma, name: "Prisma", level: "Experienced" },
  { kind: "icon", Icon: SiCheckmarx, name: "OOP", level: "Proficient" },
  {
    kind: "icon",
    Icon: FaDatabase,
    name: "Database Management",
    level: "Proficient",
  },
  { kind: "icon", Icon: SiMocha, name: "Mocha", level: "Experienced" },
  { kind: "icon", Icon: SiJasmine, name: "Jasmine", level: "Experienced" },
  {
    kind: "image",
    src: "/icons/pytest.svg",
    name: "Pytest",
    level: "Experienced",
  },
];

export const aiRagSkills: Skill[] = [
  {
    kind: "icon",
    Icon: FaProjectDiagram,
    name: "RAG System Design",
    level: "Experienced",
  },
  {
    kind: "icon",
    Icon: FaSearch,
    name: "Semantic Search",
    level: "Experienced",
  },
  {
    kind: "icon",
    Icon: FaDatabase,
    name: "Vector Databases (pgvector)",
    level: "Experienced",
  },
  {
    kind: "icon",
    Icon: FaStream,
    name: "Embedding Pipelines",
    level: "Experienced",
  },
  { kind: "icon", Icon: SiFastapi, name: "FastAPI", level: "Experienced" },
  {
    kind: "icon",
    Icon: SiOllama,
    name: "Local LLM Serving (Ollama)",
    level: "Experienced",
  },
  {
    kind: "icon",
    Icon: FaServer,
    name: "On-Prem AI Deployment",
    level: "Experienced",
  },
  {
    kind: "icon",
    Icon: TbMessageChatbot,
    name: "Prompt Engineering",
    level: "Intermediate",
  },
  {
    kind: "icon",
    Icon: FaBook,
    name: "Knowledge Base Architecture",
    level: "Experienced",
  },
  {
    kind: "icon",
    Icon: FaUserShield,
    name: "Secure Internal AI Workflows",
    level: "Experienced",
  },
];
