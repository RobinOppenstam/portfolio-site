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
            I’m a Swedish developer who discovered blockchain in 2021 and quickly became captivated by its potential to change how we interact online. That curiosity became a turning point nine months ago when I decided to leave my sales career to dedicate myself to learning how to code — a leap that’s been both challenging and deeply rewarding.
          </p>
          
          <p>
            In the past year, I’ve focused on building projects that combine Solidity smart contracts with responsive, user-friendly frontends using React and Next.js. My portfolio includes several demo projects and one SaaS product, each created to push my skills further and explore what’s possible in Web3. I enjoy working across the stack and thrive at the intersection of traditional web development and blockchain innovation.
          </p>
          
          <p>
            I’m now seeking a position where I can continue growing as a developer, gain knowledge from more experienced teammates, and contribute meaningfully to projects that have real impact. My strengths lie in learning quickly, adapting to new challenges, and staying curious — qualities that have helped me progress rapidly in my journey so far.
          </p>
          
          <p>
            Outside of coding, I’m passionate about decentralization and privacy, following market trends, and staying up to date with emerging technologies, especially in AI. I also enjoy fitness, biohacking, and traveling to explore new places and perspectives.
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