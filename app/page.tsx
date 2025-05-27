import Layout from './components/Layout';
import ProjectCard from './components/ProjectCard';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: "DealtrackR",
    description: "Interactive portfolio tracker for crypto investors with real-time analytics",
    image: "/dealtrackr.png",
    link: "https://dealtrackr.com",
    tech: ["React", "Node.js"]
  },
  {
    id: 2,
    title: "Crypto Trading Dashboard",
    description: "Real-time cryptocurrency trading interface with advanced analytics",
    image: "/api/placeholder/300/200",
    link: "https://crypto-dash.demo.com",
    tech: ["Next.js", "WebSocket", "Chart.js"]
  },
  {
    id: 3,
    title: "AI Code Assistant",
    description: "VS Code extension that provides intelligent code suggestions",
    image: "/api/placeholder/300/200",
    link: "https://ai-code.demo.com",
    tech: ["TypeScript", "VS Code API", "OpenAI"]
  },
  {
    id: 4,
    title: "Blockchain Explorer",
    description: "Ethereum blockchain explorer with transaction visualization",
    image: "/api/placeholder/300/200",
    link: "https://chain-explorer.demo.com",
    tech: ["Vue.js", "Web3.js", "Node.js"]
  },
  {
    id: 5,
    title: "Quantum Simulator",
    description: "Web-based quantum circuit simulator for educational purposes",
    image: "/api/placeholder/300/200",
    link: "https://quantum-sim.demo.com",
    tech: ["React", "WebGL", "Mathematical.js"]
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  );
}