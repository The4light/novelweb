import React from 'react';
import Navbar from '../components/Navbar';
import { novelsData, genreColors } from '../data/novels';

const ProfilePage = () => {
  // Filtering novels specifically by Sarah Mitchell for this profile view
  const authorNovels = novelsData.filter(n => n.author === "Sarah Mitchell");

  const authorStats = [
    { label: 'novels', value: '2', icon: '📚' },
    { label: 'chapters', value: '12', icon: '📝' },
    { label: 'total views', value: '26,620', icon: '👁️' },
    { label: 'Joined January 2023', value: '', icon: '📅' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Profile Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                alt="Sarah Mitchell" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Sarah Mitchell</h1>
            <p className="text-gray-600 max-w-2xl mb-6">
              Fantasy author with a passion for creating immersive worlds. Published 12 novels.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
              {authorStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <span>{stat.icon}</span>
                  <span className="text-gray-900 font-bold">{stat.value}</span>
                  <span className="capitalize">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Visitor Actions */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <button className="px-8 py-2 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all active:scale-95 shadow-sm">
                Follow
              </button>
              <button className="px-8 py-2 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all active:scale-95 shadow-sm">
                Message
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-16 border-gray-100" />
      </div>

      {/* Published Novels Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">Published Novels</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {authorNovels.map((novel) => (
            <div key={novel.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gray-100 mb-4 shadow-sm">
                <img 
                  src={novel.cover} 
                  alt={novel.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {novel.views.toLocaleString()}
                </div>
              </div>
              
              <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-2 border ${genreColors[novel.genre]}`}>
                {novel.genre.toUpperCase()}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                {novel.title}
              </h3>
              
              <p className="text-sm text-gray-500 mb-3 font-medium">
                by {novel.author}
              </p>
              
              <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                {novel.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;