import Layout from './components/Layout';
import ProjectCard from './components/ProjectCard';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: "Predicton Market",
    description: "A decentralized prediction market platform where users bet on real-world events using blockchain technology. Features pool-based betting with dynamic odds, automated market resolution via Chainlink price feeds, and multiple market types including daily Bitcoin over/under and price race markets. Built with Solidity smart contracts using Foundry for testing and deployment. Frontend developed with Next.js and TypeScript for seamless Web3 betting interactions. Deployed on Sepolia testnet.",
    image: "/predictionmarket.png",
    link: "https://prediction-market-nu.vercel.app/",
    github: "https://github.com/RobinOppenstam/PredictionMarket",
    tech: ["Solidity", "Node.js", "Next.js", "Chainlink", "Foundry", "Wagmi", "Ethers.js"]
  }, {
    id: 2,
    title: "DealtrackR",
    description: "A fullscale SaaS helping crypto investors track OTC deals and vesting schedules with 200+ registered users. Features user authentication, project databases handled by Firebase, Stripe payment processing, and real-time price data via CoinMarketCap API. The frontend is built with Next.js and Tailwind CSS, while the backend uses Node.js and Express.",
    image: "/dealtrackr.png",
    link: "https://dealtrackr.com",
    tech: ["React", "Node.js", "Express", "Stripe", "Firebase"]
  }, {
    id: 3,
    title: "Cydonia Staking Protocol",
    description: "A demo DeFi staking protocol enabling users to stake multiple assets (ETH, USDC, USDT, and custom CDN token) to earn yield in CDN rewards. Features dynamic reward calculations based on asset type and staking duration, implemented through Solidity smart contracts with comprehensive testing via Foundry. Frontend built with Next.js, TypeScript, and wagmi for intuitive staking interactions. Deployed on Sepolia testnet.",
    image: "/CydoniaStaking.png",
    link: "https://cydonia-staking.vercel.app/",
    github: "https://github.com/RobinOppenstam/Cydonia-staking",
    tech: ["Next.js", "TypeScript", "Solidity", "Foundry", "wagmi", "Tailwind"]
  }, {
    id: 4,
    title: "Blacksmith NFT game",
    description: "A demo NFT crafting game where users can mint, trade, and combine NFTs to create new items. Built with Solidity smart contracts using Foundry for testing and deployment. Integrates Chainlink VRF for randomness in item crafting and OpenZeppelin libraries for secure NFT standards. Frontend developed with Next.js, TypeScript, and wagmi for seamless Web3 interactions. Deployed on Avalanche C-chain.",
    image: "/Blacksmithpic.png",
    link: "https://blacksmith-game.vercel.app/",
    github: "https://github.com/RobinOppenstam/blacksmith-game",
    tech: ["Next.js", "TypeScript", "Solidity", "Foundry", "wagmi", "Tailwind"]
  }, {
    id: 5,
    title: "Defi Lending Protocol",
    description: "A decentralized lending protocol demo enabling users to lend and borrow multiple assets (ETH, BTC, USDC, USDT) with cross-asset functionality. Built with Solidity smart contracts using Foundry for testing and deployment. Integrates Chainlink CCIP for cross-chain operations and Uniswap for automated token swaps. Frontend developed with Next.js, TypeScript, and wagmi for seamless Web3 interactions. Deployed on Sepolia testnet.",
    image: "/Defiprotocol-ss.png",
    link: "https://lending-protocol-liard.vercel.app",
    github: "https://github.com/RobinOppenstam/defi-lending-protocol",
    tech: ["Next.js", "Typescript", "Solidity", "Foundry", "wagmi", "Tailwind", "EVM"]
  }


];

export default function Projects() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Layout>
  );
}