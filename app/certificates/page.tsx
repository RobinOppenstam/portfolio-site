'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certificates: Certificate[] = [
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

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
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
              <div className="p-4 text-center border-t border-gray-700">
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
