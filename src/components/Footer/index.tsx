import Link from 'next/link';

export default function MainFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-20 pb-10 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 group mb-6">
                 <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-primary transition-colors shadow-lg">G</div>
                 <span className="text-2xl font-black tracking-tighter text-black">Plateio.</span>
              </Link>
              <p className="text-gray-500 max-w-sm font-medium leading-relaxed mb-8">
                The ultimate revenue operating system for modern restaurants. Stop juggling tablets and start filling tables.
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-black mb-6 uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4">
                <li><Link href="/features/smart-kds" className="text-gray-500 hover:text-primary transition-colors font-medium">Smart KDS</Link></li>
                <li><Link href="/features/marketing-engine" className="text-gray-500 hover:text-primary transition-colors font-medium">Marketing Engine</Link></li>
                <li><Link href="/features/guest-profiles" className="text-gray-500 hover:text-primary transition-colors font-medium">Guest Profiles</Link></li>
                <li><Link href="/integrations" className="text-gray-500 hover:text-primary transition-colors font-medium">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-500 hover:text-primary transition-colors font-medium">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-500 hover:text-primary transition-colors font-medium">Careers</Link></li>
                <li><Link href="/blog" className="text-gray-500 hover:text-primary transition-colors font-medium">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-500 hover:text-primary transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors font-medium">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-500 hover:text-primary transition-colors font-medium">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-500 hover:text-primary transition-colors font-medium">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100">
             <p className="text-gray-400 font-medium text-sm mb-4 md:mb-0">
               © {year} Plateio Inc. All rights reserved.
             </p>
          </div>
        </div>
      </footer>
  );
}
