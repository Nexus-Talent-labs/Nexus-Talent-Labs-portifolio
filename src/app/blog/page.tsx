'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeuralCanvas from '@/components/NeuralCanvas';
import MouseSpotlight from '@/components/MouseSpotlight';
import ApplicationModal from '@/components/ApplicationModal';
import BlogModal from '@/components/BlogModal';
import AskAIWidget from '@/components/AskAIWidget';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ShinyText from '@/components/reactbits/ShinyText';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import { 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Filter, 
  Star, 
  Flame, 
  BookOpen, 
  ArrowUpDown
} from 'lucide-react';

export default function BlogPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'latest' | 'trending' | 'readTime' | 'rating'>('latest');

  // Filter & Sort Logic
  const processedPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'trending') {
        return b.viewsCount - a.viewsCount;
      }
      if (sortBy === 'readTime') {
        return a.readMinutes - b.readMinutes; // Shortest read first
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating; // Highest rated first
      }
      return 0; // Default latest
    });
  }, [searchTerm, selectedCategory, sortBy]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-hidden selection:bg-blue-600/30 selection:text-cyan-300">
      <NeuralCanvas />
      <MouseSpotlight />
      <Navbar onOpenApply={() => setIsApplyOpen(true)} />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-extrabold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <ShinyText text="ENGINEERING INSIGHTS & PAPERS" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-['Outfit']">
            Nexus Tech Magazine & Research Papers
          </h1>

          <p className="text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Filter technical breakdowns by technology tracks, trending research papers, shortest read times, and student reviews.
          </p>
        </div>

        {/* SEARCH, CATEGORY FILTERS & SORT CONTROLS */}
        <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-6">
          
          {/* Top Control Bar: Search & Sort Dropdown */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search AI, RAG, Next.js, eBPF, System Design..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Sort Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-zinc-400 flex items-center gap-1 mr-2">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort By:
              </span>
              {[
                { id: 'latest', label: 'Latest Published' },
                { id: 'trending', label: '🔥 Trending & Views' },
                { id: 'readTime', label: '⏱️ Shortest Read Time' },
                { id: 'rating', label: '⭐ Highest Reviews' }
              ].map((sortOption) => (
                <button
                  key={sortOption.id}
                  onClick={() => setSortBy(sortOption.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    sortBy === sortOption.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white/5 text-zinc-400 hover:text-white'
                  }`}
                >
                  {sortOption.label}
                </button>
              ))}
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
            <span className="text-xs font-bold text-zinc-400 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" /> Technology:
            </span>
            {['All', 'AI & ML', 'Full Stack with AI', 'Cloud & DevOps', 'Career Guide', 'UI/UX Design'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Featured Article Card (Visible when filter is set to All and no search active) */}
        {selectedCategory === 'All' && !searchTerm && featuredPost && (
          <button
            onClick={() => setSelectedPost(featuredPost)}
            className="w-full text-left group transition-all"
          >
            <SpotlightCard className="p-8 sm:p-12 border-blue-500/30 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-500/10 border border-blue-500/20 text-cyan-300">
                    Featured Paper • {featuredPost.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center gap-1">
                    <Flame className="w-3 h-3" /> Trending Paper
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-zinc-400">
                  <span className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> {featuredPost.rating} ({featuredPost.reviewsCount} reviews)
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> {featuredPost.readTime}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] group-hover:text-cyan-300 transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-xs sm:text-base text-zinc-300 leading-relaxed max-w-4xl">
                {featuredPost.excerpt}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs border border-white/20">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <span className="text-white font-semibold text-xs block">{featuredPost.author.name}</span>
                    <span className="text-zinc-500 text-[10px]">{featuredPost.author.role} • {featuredPost.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </SpotlightCard>
          </button>
        )}

        {/* Grid Articles */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="text-2xl font-bold text-white font-['Outfit']">
              Research Articles ({processedPosts.length})
            </h2>
            <span className="text-xs text-zinc-400">Click any card to open full article</span>
          </div>

          {processedPosts.length === 0 ? (
            <div className="glass-panel rounded-3xl p-12 text-center space-y-4 border border-white/10">
              <BookOpen className="w-8 h-8 text-zinc-500 mx-auto" />
              <h3 className="text-lg font-bold text-white">No research articles match your filter</h3>
              <p className="text-xs text-zinc-400">Try adjusting your search query or selecting a different technology category.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSortBy('latest');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processedPosts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="text-left group h-full"
                >
                  <SpotlightCard className="h-full p-7 space-y-4 flex flex-col justify-between border-white/10 group-hover:border-cyan-500/40">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-white/5 border border-white/10 text-cyan-300">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-zinc-400">
                          <span className="flex items-center gap-1 text-amber-400 font-semibold text-[11px]">
                            <Star className="w-3 h-3 fill-amber-400" /> {post.rating}
                          </span>
                          <span className="flex items-center gap-1 text-[11px]">
                            <Clock className="w-3 h-3 text-cyan-400" /> {post.readTime}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-['Outfit'] leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-500/30 flex items-center justify-center text-[10px] font-bold text-purple-300">
                          {post.author.avatar}
                        </div>
                        <span className="text-zinc-300 font-semibold">{post.author.name}</span>
                      </div>

                      <span className="text-cyan-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </SpotlightCard>
                </button>
              ))}
            </div>
          )}
        </div>

      </main>

      <Footer />

      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenApply={() => setIsApplyOpen(true)}
      />

      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />
      <AskAIWidget />
    </div>
  );
}
