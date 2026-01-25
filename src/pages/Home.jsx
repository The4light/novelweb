import React, { useState } from 'react';

// ========== ICONS COMPONENT ==========
const Icons = {
  Book: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Search: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Tag: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  User: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Eye: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Menu: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  ),
  ChevronRight: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
};

// ========== GENRE COLORS ==========
const genreColors = {
  Romance: 'bg-pink-50 text-pink-600 border-pink-200',
  Fantasy: 'bg-purple-50 text-purple-600 border-purple-200',
  Action: 'bg-red-50 text-red-600 border-red-200',
  Thriller: 'bg-teal-50 text-teal-600 border-teal-200',
  Mystery: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  Scifi: 'bg-blue-50 text-blue-600 border-blue-200',
  Historical: 'bg-amber-50 text-amber-600 border-amber-200'
};

// ========== MOCK DATA ==========
const novelsData = [
  {
    id: 1,
    title: "Hearts Across Time",
    author: "Elena Rodriguez",
    genre: "Romance",
    description: "A modern architect discovers a century-old love letter that leads her on a journey through time, connecting her heart with a love story from the past.",
    cover: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
    views: 18200
  },
  {
    id: 2,
    title: "Summer in Paris",
    author: "Elena Rodriguez",
    genre: "Romance",
    description: "Two strangers meet in a Parisian café and spend one perfect summer together. Six months of love that will last a lifetime of memories.",
    cover: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=600&fit=crop",
    views: 16800
  },
  {
    id: 3,
    title: "The Last Kingdom of Shadows",
    author: "Sarah Mitchell",
    genre: "Fantasy",
    description: "In a realm where darkness threatens to consume all light, a young mage must master ancient powers to save her kingdom from eternal shadow.",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    views: 15420
  },
  {
    id: 4,
    title: "Blade of Vengeance",
    author: "James Harrison",
    genre: "Action",
    description: "A former special forces operative comes out of retirement to track down the shadowy group that killed his family.",
    cover: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop",
    views: 14500
  },
  {
    id: 5,
    title: "The Cipher Protocol",
    author: "James Harrison",
    genre: "Thriller",
    description: "A cryptographer stumbles upon a government conspiracy hidden in plain sight. Turns out truth is hidden in plain code.",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    views: 13400
  },
  {
    id: 6,
    title: "Whispers in the Dark",
    author: "James Harrison",
    genre: "Mystery",
    description: "Detective Sarah Blake investigates a series of mysterious disappearances in a small coastal town.",
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    views: 12850
  },
  {
    id: 7,
    title: "The Forgotten Crown",
    author: "Sarah Mitchell",
    genre: "Fantasy",
    description: "An orphan discovers she is the last heir to a fallen kingdom and must reclaim her throne from the usurpers.",
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    views: 11200
  },
  {
    id: 8,
    title: "Echoes of Tomorrow",
    author: "Marcus Chen",
    genre: "Scifi",
    description: "In 2157, humanity has colonized Mars, but when strange signals emerge from deep space, everything changes.",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop",
    views: 9800
  }
];

// ========== HEADER COMPONENT ==========
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Icons.Book />
            <span className="text-xl font-bold">NovelForge</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-900">Home</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Explore</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Write</a>
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Icons.Search />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Icons.Tag />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Icons.User />
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Share
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icons.Menu />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-gray-900">Home</a>
              <a href="#" className="text-sm font-medium text-gray-600">Explore</a>
              <a href="#" className="text-sm font-medium text-gray-600">Write</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// ========== NOVEL CARD COMPONENT ==========
const NovelCard = ({ novel }) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
        <img
          src={novel.cover}
          alt={novel.title}
          className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
          <Icons.Eye />
          {novel.views.toLocaleString()}
        </div>
      </div>
      <div className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 border ${genreColors[novel.genre] || 'bg-gray-100 text-gray-700'}`}>
        {novel.genre.toUpperCase()}
      </div>
      <h3 className="font-bold text-base sm:text-lg mb-1 line-clamp-1 text-gray-900">{novel.title}</h3>
      <p className="text-sm text-gray-600 mb-2">by {novel.author}</p>
      <p className="text-sm text-gray-500 line-clamp-2">{novel.description}</p>
    </div>
  );
};  

// ========== FEATURED SECTION ==========
const FeaturedSection = () => {
  const featuredNovel = novelsData[2]; // The Last Kingdom of Shadows

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 py-12 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase">Featured</span>
              <span className="text-gray-400">•</span>
              <span className={`px-2 py-1 rounded text-xs font-semibold border ${genreColors[featuredNovel.genre]}`}>
                {featuredNovel.genre.toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              {featuredNovel.title}
            </h1>
            
            <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {featuredNovel.description}
            </p>
            
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <img 
                src="https://i.pravatar.cc/40?img=5" 
                alt={featuredNovel.author} 
                className="w-10 h-10 rounded-full border-2 border-white shadow" 
              />
              <div className="text-left">
                <p className="font-semibold text-sm text-gray-900">{featuredNovel.author}</p>
                <p className="text-xs text-gray-500">Fantasy author • {featuredNovel.views.toLocaleString()} views</p>
              </div>
            </div>
            
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                <Icons.Book />
                Start Reading
              </button>
              <button className="border-2 border-gray-300 bg-white px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Add to Library
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center gap-2 mt-8 justify-center lg:justify-start">
              <div className="w-8 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:flex-shrink-0">
            <div className="relative">
              <img
                src={featuredNovel.cover}
                alt={featuredNovel.title}
                className="w-64 sm:w-80 lg:w-96 rounded-2xl shadow-2xl relative z-10"
              />
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
              <Icons.ChevronLeft />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
              <Icons.ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== HOME PAGE ==========
const HomePage = () => {
  const trendingNovels = novelsData.slice(0, 6);
  const recentNovels = novelsData;

  return (
    <div className="min-h-screen bg-white">
      {/* Featured Section */}
      <FeaturedSection />

      {/* Trending Now */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="flex items-center gap-2 mb-8">
          <Icons.TrendingUp />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trendingNovels.map(novel => (
            <NovelCard key={novel.id} novel={novel} />
          ))}
        </div>
      </div>

      {/* Recently Published */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Icons.Clock />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Recently Published</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentNovels.map(novel => (
              <NovelCard key={novel.id} novel={novel} />
            ))}
          </div>
        </div>
      </div>

      {/* Share Your Story CTA */}
      <div className="bg-black py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icons.Star />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Share Your Story</h2>
          <p className="text-gray-300 mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Join thousands of writers creating and sharing their stories with readers worldwide. Your next chapter begins here.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Start Writing
          </button>
        </div>
      </div>
    </div>
  );
};

// ========== MAIN APP ==========
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;