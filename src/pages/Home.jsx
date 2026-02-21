import React from 'react';
import { novelsData, genreColors } from '../data/novel';
import Navbar from '../components/Navbar';

// Reusable Local Icons for UI elements specific to Home
const HomeIcons = {
  Eye: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Book: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
};

const NovelCard = ({ novel }) => (
  <div className="cursor-pointer group">
    <div className="relative overflow-hidden rounded-xl mb-3 bg-gray-100 shadow-sm aspect-[2/3]">
      <img
        src={novel.cover}
        alt={novel.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] flex items-center gap-1">
        <HomeIcons.Eye />
        {novel.views.toLocaleString()}
      </div>
    </div>
    <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-2 border ${genreColors[novel.genre]}`}>
      {novel.genre.toUpperCase()}
    </div>
    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors line-clamp-1">{novel.title}</h3>
    <p className="text-xs text-gray-500 mb-2 font-medium">by {novel.author}</p>
    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{novel.description}</p>
  </div>
);

const FeaturedSection = () => {
  const featured = novelsData[2]; // The Last Kingdom of Shadows
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-purple-50/40 to-white py-12 lg:py-20 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white rounded-full shadow-sm border border-purple-100">
              <span className="text-purple-600 text-[10px] font-bold uppercase tracking-wider">Featured Story</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 text-[10px] font-bold">{featured.genre.toUpperCase()}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight">
              {featured.title}
            </h1>
            <p className="text-gray-600 mb-8 text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {featured.description}
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95">
                <HomeIcons.Book />
                Start Reading
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm">
                Add to Library
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-purple-500/10 rounded-[2rem] blur-2xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
            <img
              src={featured.cover}
              alt={featured.title}
              className="w-64 lg:w-[400px] rounded-2xl shadow-2xl relative z-10 transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const trending = novelsData.slice(0, 4);
  const recent = novelsData.slice(4, 8);

  return (
    <>
      <Navbar/>
      <div className="bg-white">
      <FeaturedSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-50 rounded-lg text-orange-500">
              <HomeIcons.TrendingUp />
            </div>
            <h2 className="text-3xl font-black text-gray-900">Trending Now</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trending.map(novel => <NovelCard key={novel.id} novel={novel} />)}
        </div>
      </div>

      <div className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
              <HomeIcons.Clock />
            </div>
            <h2 className="text-3xl font-black text-gray-900">Recently Published</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recent.map(novel => <NovelCard key={novel.id} novel={novel} />)}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-black rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <HomeIcons.Star />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Your Story Starts Here</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
              Join a global community of writers and readers. Turn your imagination into a masterpiece.
            </p>
            <button className="bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-xl">
              Start Writing Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default HomePage;