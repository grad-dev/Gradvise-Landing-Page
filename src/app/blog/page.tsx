import Link from 'next/link';
import { blogs } from '@/lib/blogs';
import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Blog | Gradvise',
  description: 'Practical guides, case studies, and data-driven strategies to help restaurant operators increase revenue, reduce costs, and build lasting guest loyalty.',
  keywords: ['restaurant blog', 'restaurant management tips', 'restaurant marketing guide', 'restaurant operations', 'increase restaurant revenue'],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Restaurant Blog | Gradvise',
    description: 'Practical guides and strategies to help restaurant operators grow revenue and reduce costs.',
    type: 'website',
    url: 'https://gradvise.com/blog',
  },
};

const categoryColors: Record<string, string> = {
  Operations: 'bg-red-50 text-red-600',
  Technology: 'bg-red-50 text-red-600',
  Marketing: 'bg-red-50 text-red-600',
  Analytics: 'bg-red-50 text-red-600',
  'Guest Experience': 'bg-red-50 text-red-600',
  Growth: 'bg-red-50 text-red-600',
};

const [featured, ...rest] = blogs;

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto pt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Gradvise Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            Grow your restaurant{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">with better data.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Practical, data-driven guides on operations, marketing, analytics, and guest experience — written for independent restaurant operators.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="block mb-10 group">
          <div className="w-full bg-black rounded-[40px] overflow-hidden border border-gray-900 hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500">
            <div className="p-10 md:p-16 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent" />
              <div className="relative z-10 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
                    <Tag className="w-3 h-3" /> {featured.category}
                  </span>
                  <span className="text-white/40 text-xs font-semibold px-2 py-1 rounded-full bg-white/5 border border-white/10">Featured</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-white/60 font-medium text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-white/40 text-sm font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featured.readTime}</span>
                  <span className="mx-1">·</span>
                  <span>{featured.date}</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-gray-100 rounded-[24px] p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${categoryColors[post.category] || 'bg-red-50 text-primary'}`}>
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 font-medium flex items-center gap-1 ml-auto">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>

              <h3 className="text-[15px] font-black text-black tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors flex-1 line-clamp-3">
                {post.title}
              </h3>

              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-5 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-black rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="relative z-10">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Stay Ahead</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
              Get the weekly restaurant playbook.
            </h2>
            <p className="text-white/50 font-medium mb-8 max-w-md mx-auto text-sm">
              Join 6,000+ restaurant operators who get our best guides, case studies, and strategies every Tuesday.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 text-white placeholder-white/30 font-medium focus:outline-none focus:border-primary transition-colors"
              />
              <button className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-full px-6 py-3 hover:bg-red-600 transition-colors whitespace-nowrap group">
                Subscribe <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
