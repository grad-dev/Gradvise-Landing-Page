import { blogs } from '@/lib/blogs';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = blogs.map((post) => ({
    url: `https://plateio.in/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: 'https://plateio.in', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: 'https://plateio.in/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: 'https://plateio.in/services', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://plateio.in/menu', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://plateio.in/restaurant', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://plateio.in/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://plateio.in/integrations', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://plateio.in/features/smart-kds', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://plateio.in/features/marketing-engine', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://plateio.in/features/guest-profiles', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://plateio.in/careers', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://plateio.in/about', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://plateio.in/privacy', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://plateio.in/terms', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://plateio.in/cookies', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    ...blogRoutes,
  ];
}
