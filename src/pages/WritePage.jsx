import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const WritePage = () => {
  const [wordCount, setWordCount] = useState(0);
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    const text = e.target.value;
    setContent(text);
    // Basic word count logic
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount(words);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Sub-Header / Editor Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Writing</p>
              <h2 className="text-sm font-bold text-gray-900">Untitled Novel</h2>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-gray-500">{wordCount} words</span>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Assist
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 flex items-center gap-2 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              Save
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Novel Details Card */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="font-bold text-gray-900">Novel Details</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-tight mb-2">Novel Title</label>
              <input 
                type="text" 
                placeholder="Enter novel title..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-tight mb-2">Genre</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all appearance-none cursor-pointer">
                <option>Fantasy</option>
                <option>Romance</option>
                <option>Action</option>
                <option>Scifi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-tight mb-2">Chapter Title</label>
              <input 
                type="text" 
                placeholder="Enter chapter title..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>

            <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-sm font-bold hover:border-gray-400 hover:text-gray-600 transition-all flex items-center justify-center gap-2">
              <span className="text-xl">+</span> New Chapter
            </button>
          </div>
        </section>

        {/* Writing Tips Card */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="font-bold text-gray-900">Writing Tips</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
            {["Start with a strong hook", "Show, don't tell emotions", "Vary sentence length", "Use vivid descriptions", "Keep dialogue natural"].map(tip => (
              <li key={tip} className="flex items-center gap-2 text-xs text-gray-600">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Editor Area */}
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Start writing your story here..."
          className="w-full min-h-[500px] bg-white rounded-2xl border border-gray-200 shadow-sm p-8 focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none text-gray-700 leading-relaxed placeholder:text-gray-300"
        ></textarea>
      </main>

      {/* Footer Status Bar */}
      <footer className="bg-white border-t border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
          <div className="flex gap-6">
            <span>{wordCount} words</span>
            <span>{content.length} characters</span>
            <span>~{Math.ceil(wordCount / 200)} min read</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Auto-save enabled
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WritePage;