import React from 'react';
import Image from 'next/image';


const ProfileSection: React.FC = () => {
  return (
    <section className="text-center py-12 border-b border-gray-800">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image with Cyberpunk Glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 blur-sm animate-pulse"></div>
          <div className="relative w-40 h-40 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-400/50">
            <Image 
              src="/ProfilePicture.png"  
              alt="Profile"
              width={150}
              height={150}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
            Robin Oppenstam
          </h1>
          <p className="text-xl text-pink-400 font-medium">
            Full Stack Developer & Web3 Fanatic
          </p>
          <p className="text-gray-400 max-w-md mx-auto">
            From sales to code, building dApps and learning something new every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;