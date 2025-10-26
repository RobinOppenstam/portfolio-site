'use client';

import { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import ProjectCard from './components/ProjectCard';
import { Project, ContactLink } from '@/types';
import Image from 'next/image';
import { SiLinkedin, SiGithub, SiX } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

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
    description: "A fullscale SaaS helping crypto investors track seed rounds and manage their portfolio with 200+ registered users. Provides comprehensive tracking of vesting schedules, real-time price performance, and portfolio value through interactive dashboard and chart views. Features user authentication, project databases handled by Firebase, Stripe payment processing, and real-time price data via CoinMarketCap API. The frontend is built with Next.js, while the backend uses Node.js and Express.",
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
    tech: ["Next.js", "TypeScript", "Solidity", "Foundry", "wagmi", "Tailwind","IPFS", "ERC-721", "Avalanche"]
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

const skills: string[] = [
  "JavaScript/TypeScript", "React/Next.js", "Node.js", "Solidity","Ethers.js","wagmi","Foundry","Tailwind",
 "Smart Contracts", "Blockchain", "postgreSQL",
];

const certificates = [
  {
    id: 1,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '08/12/2024',
    image: '/cerficates/freeCodeCamp/freeCodeCamp.png'
  },
  {
    id: 2,
    title: 'Frontend Developer Path',
    issuer: 'Scrimba',
    date: '03/08/2025',
    image: '/cerficates/scrimba/Frontend Developer Path Scrimba.png'
  },
  {
    id: 3,
    title: 'Solidity Smart Contract Development',
    issuer: 'Cyfrin',
    date: '08/11/2024',
    image: '/cerficates/Cyfrin/Solidity Smart Contract Development TVK954SYD034 2024-11-8.png'
  },
  {
    id: 4,
    title: 'Full-Stack Web3 Development Crash Course',
    issuer: 'Cyfrin',
    date: '20/04/2025',
    image: '/cerficates/Cyfrin/Full-Stack Web3 Development Crash Course FZQ469WUA832 2025-4-20.png'
  },
  {
    id: 5,
    title: 'Aave V3 Protocol Development',
    issuer: 'Cyfrin',
    date: '12/09/2025',
    image: '/cerficates/Cyfrin/Aave V3 Protocol Development OQAO9FWSQR5O 2025-9-12.png'
  },
  {
    id: 6,
    title: 'Advanced Web3 Wallet Security',
    issuer: 'Cyfrin',
    date: '26/09/2025',
    image: '/cerficates/Cyfrin/Advanced Web3 Wallet Security Z3C67SSNRMBV 2025-9-26.png'
  }
];

const contactLinks: ContactLink[] = [
  {
    name: "Email",
    value: "robin.oppenstam@outlook.com",
    link: "mailto:robin.oppenstam@outlook.com",
    icon: HiOutlineMail,
    hoverColor: "hover:border-cyan-400 hover:shadow-cyan-400/50 hover:bg-cyan-400/5"
  },
  {
    name: "GitHub",
    value: "@RobinOppenstam",
    link: "https://github.com/RobinOppenstam",
    icon: SiGithub,
    hoverColor: "hover:border-purple-400 hover:shadow-purple-400/50 hover:bg-purple-400/5"
  },
  {
    name: "LinkedIn",
    value: "Robin Oppenstam",
    link: "https://www.linkedin.com/in/robin-oppenstam-487466151/",
    icon: SiLinkedin,
    hoverColor: "hover:border-blue-400 hover:shadow-blue-400/50 hover:bg-blue-400/5"
  },
  {
    name: "Twitter",
    value: "@Jiberish_eth",
    link: "https://twitter.com/Jiberish_eth",
    icon: SiX,
    hoverColor: "hover:border-sky-400 hover:shadow-sky-400/50 hover:bg-sky-400/5"
  }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => {
          if (el) sectionsRef.current.set('projects', el);
        }}
        className={`min-h-screen py-20 transition-all duration-1000 ${
          visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Portfolio Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => {
          if (el) sectionsRef.current.set('about', el);
        }}
        className={`min-h-screen py-20 transition-all duration-1000 ${
          visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I&apos;m a Swedish developer with a background in sales who discovered blockchain in 2021 and quickly became fascinated by its potential to reshape how we interact online. That curiosity led me to take a major leap, leaving my sales career to dedicate myself fully to learning how to code. It has been a challenging yet incredibly rewarding journey of constant growth and discovery.
            </p>

            <p>
              Over the past year, I&apos;ve focused on developing full-stack Web3 projects that integrate Solidity smart contracts with modern, responsive frontends built in React and Next.js. My portfolio includes testnet dApps and a SaaS product, each designed to deepen my technical expertise and explore practical blockchain use cases. I enjoy working across the stack and thrive where traditional web development meets decentralized innovation.
            </p>

            <p>
              I&apos;m now looking to collaborate on projects, either as part of a development team or with clients seeking freelance support, where I can contribute to meaningful, high-impact work while continuing to grow as a developer. I bring curiosity, adaptability, and a strong work ethic to every project, along with a passion for creating solutions that are both functional and forward-thinking.
            </p>

            <p>
              Beyond coding, I&apos;m deeply interested in decentralization, privacy, and emerging tech trends in AI. I also enjoy fitness, biohacking, and traveling, always looking for new ideas and perspectives to bring into my work.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-100 border border-gray-500 rounded-full text-sm font-medium hover:from-gray-600 hover:to-gray-500 hover:border-gray-400 hover:shadow-md hover:shadow-gray-400/20 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section
        id="certificates"
        ref={(el) => {
          if (el) sectionsRef.current.set('certificates', el);
        }}
        className={`min-h-screen py-20 transition-all duration-1000 ${
          visibleSections.has('certificates') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => openModal(cert.image)}
              >
                <div className="relative h-64 w-full group/image">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    fill
                    className="object-contain p-6 group-hover/image:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 text-sm bg-cyan-400/90 px-3 py-1 rounded">
                      Click to enlarge
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center border-t border-border">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 text-xs">
                    Completed: {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => {
          if (el) sectionsRef.current.set('contact', el);
        }}
        className={`min-h-screen py-20 bg-gray-900/30 transition-all duration-1000 ${
          visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Interested in working together? I&apos;m eager to contribute to meaningful projects and learn from experienced developers.
          </p>

          <div className="space-y-4">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  className={`flex items-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl text-white transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg ${contact.hoverColor} group backdrop-blur-sm`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-3xl mr-4 flex items-center justify-center p-2 rounded-lg bg-gray-700/50 group-hover:bg-gray-600/50 transition-colors">
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-lg group-hover:text-white transition-colors">{contact.name}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{contact.value}</p>
                  </div>
                  <div className="text-cyan-400 text-2xl font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Certificate enlarged view"
              fill
              className="object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-cyan-400/90 hover:bg-cyan-400 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}