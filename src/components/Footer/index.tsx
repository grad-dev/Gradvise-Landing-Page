import Link from 'next/link';

export default function MainFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-16 border-t border-(--border)">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-lg font-semibold font-serif tracking-tight text-(--foreground)">
                Gradvise
              </span>
            </Link>
            <p className="text-sm text-(--muted-foreground) max-w-xs leading-relaxed">
              QR-first restaurant operations. Built for restaurants that care
              about the details.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-(--muted-foreground) mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors">Pricing</Link></li>
              <li><Link href="/demo" className="text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors">Demo</Link></li>
              <li><Link href="/login" className="text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors">Sign In</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-(--muted-foreground) mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors">Terms</Link></li>
              <li><Link href="/contact" className="text-sm text-(--muted-foreground) hover:text-(--foreground) transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-(--border) flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-(--muted-foreground)">
          <span>&copy; {year} Gradvise. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-(--foreground) transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-(--foreground) transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-(--foreground) transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
