import React, { useState } from 'react';

// Reusing the same data structure and genre colors from your homepage
const novelsData = [
  { id: 1, title: "Hearts Across Time", author: "Elena Rodriguez", genre: "Romance", description: "A modern architect discovers a century-old love letter...", cover: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop", views: 18200 },
  { id: 2, title: "Summer in Paris", author: "Elena Rodriguez", genre: "Romance", description: "Two strangers meet in a Parisian café and spend one perfect summer...", cover: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=600&fit=crop", views: 16800 },
  { id: 3, title: "The Last Kingdom of Shadows", author: "Sarah Mitchell", genre: "Fantasy", description: "In a realm where darkness threatens to consume all light...", cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop", views: 15420 },
  { id: 4, title: "Blade of Vengeance", author: "James Harrison", genre: "Action", description: "A former special forces operative comes out of retirement...", cover: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop", views: 14500 },
  { id: 5, title: "The Cipher Protocol", author: "James Harrison", genre: "Thriller", description: "A cryptographer stumbles upon a government conspiracy...", cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop", views: 13400 },
  { id: 6, title: "Whispers in the Dark", author: "James Harrison", genre: "Mystery", description: "Detective Sarah Blake investigates a series of mysterious disappearances...", cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop", views: 12850 },
  { id: 7, title: "The Forgotten Crown", author: "Sarah Mitchell", genre: "Fantasy", description: "An orphan discovers she is the last heir to a fallen kingdom...", cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop", views: 11200 },
  { id: 8, title: "Echoes of Tomorrow", author: "Marcus Chen", genre: "Scifi", description: "In 2157, humanity has colonized Mars, but when strange signals emerge...", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop", views: 9800 }
];

const genreColors = {
  Romance: 'bg-pink-50 text-pink-600 border-pink-200',
  Fantasy: 'bg-purple-50 text-purple-600 border-purple-200',
  Action: 'bg-red-50 text-red-600 border-red-200',
  Thriller: 'bg-teal-50 text-teal-600 border-teal-200',
  Mystery: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  Scifi: 'bg-blue-50 text-blue-600 border-blue-200',
  Historical: 'bg-amber-50 text-amber-600 border-amber-200'
};

const Genres = ["All Genres", "Action", "Romance", "Fantasy", "Mystery", "Scifi", "Thriller", "Historical"];

const ExplorePage = () => {
  const [activeGenre, setActiveGenre] = useState("All Genres");
  const [sortBy, setSortBy] = useState("Popular");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Explore Novels</h1>
        <p className="text-gray-600">Discover your next favorite story</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8 max-w-xl">
        <input 
          type="text" 
          placeholder="Search by title or author..."
          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filter & Sort Controls */}
      <div className="flex flex-col gap-6 mb-10">
        {/* Genre Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <div className="p-2 bg-gray-50 border border-gray-200 rounded-lg shrink-0">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
             </svg>
          </div>
          {Genres.map(genre => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all border ${
                activeGenre === genre 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-900'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Sort Toggles */}
        <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
          <span className="text-sm text-gray-500">Sort by:</span>
          <div className="flex bg-gray-100 p-1 rounded-lg">
            {["Popular", "Recent", "Title"].map(option => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  sortBy === option ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="ml-auto text-sm text-gray-500">
            {novelsData.length} novels found
          </div>
        </div>
      </div>

      {/* Grid - Reusing your existing NovelCard logic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {novelsData.map(novel => (
          <div key={novel.id} className="cursor-pointer group">
            <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100 aspect-[2/3]">
              <img
                src={novel.cover}
                alt={novel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-[10px] flex items-center gap-1">
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
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">{novel.title}</h3>
            <p className="text-xs text-gray-500 mb-2">by {novel.author}</p>
            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{novel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;