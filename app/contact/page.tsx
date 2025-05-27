import Layout from '../components/Layout';
import { ContactLink } from '@/types';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

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
  }
];

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Ready to collaborate on the next big thing? Let&apos;s connect and build something amazing together.
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
    </Layout>
  );
}