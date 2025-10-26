import Layout from '../components/Layout';

const skills: string[] = [
  "JavaScript/TypeScript", "React/Next.js", "Node.js", "Solidity","Ethers.js","wagmi","Foundry","Tailwind",
 "Smart Contracts", "Blockchain", "postgreSQL",
];

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I&apos;m a Swedish developer with a background in sales who discovered blockchain in 2021 and quickly became fascinated by its potential to reshape how we interact online. That curiosity led me to take a major leap, leaving my sales career to dedicate myself fully to learning how to code. It has been a challenging yet incredibly rewarding journey of constant growth and discovery.
          </p>

          <p>
            Over the past year, I&apos;ve focused on developing full-stack Web3 projects that integrate Solidity smart contracts with modern, responsive frontends built in React and Next.js. My portfolio includes several demo applications and a SaaS product, each designed to deepen my technical expertise and explore practical blockchain use cases. I enjoy working across the stack and thrive where traditional web development meets decentralized innovation.
          </p>

          <p>
            I&apos;m now looking to collaborate on projects, either as part of a development team or with clients seeking freelance support, where I can contribute to meaningful, high-impact work while continuing to grow as a developer. I bring curiosity, adaptability, and a strong work ethic to every project, along with a passion for creating solutions that are both functional and forward-thinking.
          </p>

          <p>
            Beyond coding, I&apos;m deeply interested in decentralization, privacy, and emerging tech trends in AI. I also enjoy fitness, biohacking, and traveling, always looking for new ideas and perspectives to bring into my work.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-semibold text-pink-400 mb-4">Core Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded-full text-sm font-medium hover:bg-pink-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}