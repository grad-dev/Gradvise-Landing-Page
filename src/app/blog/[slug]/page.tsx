import { notFound } from 'next/navigation';
import { blogs, getBlogPost, getRelatedPosts } from '@/lib/blogs';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      tags: post.keywords,
      url: `https://plateio.in/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">

      {/* Hero — black + red accent, no rainbow */}
      <div className="bg-black pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white font-semibold text-sm mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/40 text-xs font-semibold">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-white/40 text-xs font-semibold">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-white tracking-tight leading-[1.1] mb-5">
            {post.title}
          </h1>
          <p className="text-white/50 text-base leading-relaxed font-medium max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Article */}
      <div className="container mx-auto max-w-3xl px-4 py-14">

        {/* Article body */}
        <article>
          {post.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl md:text-2xl font-black text-black tracking-tight mb-4 leading-snug">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed font-medium text-[15px]">
                    {para}
                  </p>
                ))}
              </div>
              {i < post.sections.length - 1 && (
                <div className="h-px bg-gray-100 mt-10" />
              )}
            </section>
          ))}

          {/* Conclusion box */}
          <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-7 mt-4">
            <h2 className="text-base font-black text-black mb-3">Key Takeaway</h2>
            <p className="text-gray-600 leading-relaxed font-medium text-[15px]">{post.conclusion}</p>
          </div>

          {/* Keyword tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {post.keywords.map((kw) => (
              <span key={kw} className="px-3 py-1.5 bg-red-50 text-primary text-xs font-bold rounded-full border border-red-100">
                #{kw.replace(/\s+/g, '-')}
              </span>
            ))}
          </div>

          {/* CTA — red/black only */}
          <div className="bg-black rounded-[28px] p-8 md:p-10 mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent" />
            <div className="relative z-10">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Powered by Plateio</p>
              <h3 className="text-2xl font-black text-white tracking-tight mb-3 leading-tight">
                Ready to put this into practice?
              </h3>
              <p className="text-white/50 font-medium mb-6 text-sm leading-relaxed max-w-lg">
                Plateio gives you the tools to implement everything in this article — from smart inventory tracking to automated marketing and real-time analytics.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold rounded-full px-6 py-3 hover:bg-red-600 transition-colors group text-sm"
              >
                Start Free 30-Day Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="text-xl font-black text-black tracking-tight mb-6">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group block bg-white border border-gray-100 rounded-[20px] p-5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-50 text-primary mb-3">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-black text-black leading-snug group-hover:text-primary transition-colors line-clamp-3">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mt-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {rel.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
