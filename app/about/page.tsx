import Layout from '../components/Layout';

const skills: string[] = [
  "JavaScript/TypeScript", "React/Next.js", "Node.js", "Solidity",
  "Web3/DeFi", "Smart Contracts", "Blockchain", "Frontend Development"
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
            I&apos;m a passionate developer driven by the endless possibilities of technology. My journey 
            into coding began with curiosity and has evolved into a deep fascination with building 
            innovative digital experiences that can reshape how we interact with the web.
          </p>
          
          <p>
            Blockchain sparked my interest in 2021 and I&apos;ve been deep in the trenches ever since. 
            What started as fascination with decentralized technology quickly became a core focus 
            of my development work. I specialize in Solidity smart contract development and building 
            decentralized applications that push the boundaries of what&apos;s possible in Web3.
          </p>
          
          <p>
            On the frontend, I craft responsive and dynamic user interfaces using React and Next.js, 
            creating seamless experiences that bridge traditional web development with blockchain 
            technology. Whether it&apos;s building DeFi protocols, NFT marketplaces, or innovative dApps, 
            I thrive at the intersection of cutting-edge frontend development and blockchain innovation.
          </p>
          
          <p>
            Every project is an opportunity to dive deeper into emerging technologies and solve complex 
            problems. I believe in the transformative power of decentralized technology and am committed 
            to building the infrastructure and applications that will define the future of the internet. 
            When I&apos;m not coding, you&apos;ll find me researching the latest blockchain developments, contributing 
            to open-source projects, and connecting with the vibrant Web3 community.
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