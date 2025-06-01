import Layout from './components/Layout';
import ProjectCard from './components/ProjectCard';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: "DealtrackR",
    description: "A comprehensive dashboard that allows crypto investors to track all their OTC purchases and private token allocations The tracker provides live price monitoring and real-time performance analytics. Keeping track of token unlock dates, cliff periods, and release timelines displayed through interactive charts.",
    image: "/dealtrackr.png",
    link: "https://dealtrackr.com",
    tech: ["React", "Node.js", "Express", "Stripe", "Firebase"]
  },
   {
    id: 2,
    title: "Blockchain Explorer",
    description: "A real-time Ethereum blockchain explorer that lets users monitor live blocks, analyze transactions with automatic token detection, and investigate addresses with detailed analytics. Features a unique on-chain activity logging system where users can permanently record their exploration activities using a custom smart contract on Sepolia testnet.",
    image: "/BlockchainExplorer.png",
    link: "https://web3-explorer-cyan.vercel.app/",
    tech: ["Next.js", "Typescript","Ethers.js", "Solidity", "Foundry","Tailwind CSS", "EVM"]
  },
  {
    id: 3,
    title: "AI Bartender",
    description: "Cyber Mixologist is your personal AI bartender that takes whatever spirits, mixers, and garnishes you have on hand and creates sophisticated cocktail recipes just for you.",
    image: "/cybermixologist.png",
    link: "https://cyber-mixologist.vercel.app/",
    tech: ["Next.js", "Typescript", "Tailwind", "AI", "LLM"]
  },
  {
    id: 4,
    title: "Cydonia Staking Protocol",
    description: "DeFI protocol where the user can stake ETH,USDC,USDT and a custom Cydonia (CDN) token to earn yield in the form of CDN tokens. Dynamic rewards depending on the asset and staking duration. Contracts are deployed on the Sepolia testnet.",
    image: "/CydoniaStaking.png",
    link: "https://cydonia-staking.vercel.app/",
    tech: ["Next.js", "Typescript", "Solidity", "Foundry", "wagmi", "Tailwind", "EVM"]
  },
 
  {
    id: 5,
    title: "Under Construction...",
    description: "Currently working on a new project. Stay tuned for updates!",
    image: "/api/placeholder/300/200",
    link: "",
    tech: ["???", "???", "???"]
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