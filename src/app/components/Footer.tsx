import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6 lg:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl tracking-[0.3em] mb-6 font-light">NUSANTARA</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Connecting Indonesian textile manufacturers directly with customers worldwide
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-wide mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/for-manufacturers" className="hover:text-white transition-colors">For Manufacturers</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">For Customers</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-wide mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">About Indonesian Textiles</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-wide mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Nusantara. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
