import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-brand-bg-alt border-t border-brand-border py-16 px-6 lg:px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl tracking-[0.3em] mb-6 font-light">NUSANTARA</h3>
            <p className="text-brand-text-subtle text-sm leading-relaxed">
              Connecting Indonesian textile manufacturers directly with customers worldwide
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-wide mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-brand-text-muted">
              <li><Link to="/about" className="hover:text-brand-text transition-colors">How It Works</Link></li>
              <li><Link to="/for-manufacturers" className="hover:text-brand-text transition-colors">For Manufacturers</Link></li>
              <li><Link to="/collections" className="hover:text-brand-text transition-colors">For Customers</Link></li>
              <li><a href="#" className="hover:text-brand-text transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-wide mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-brand-text-muted">
              <li><Link to="/about" className="hover:text-brand-text transition-colors">About Indonesian Textiles</Link></li>
              <li><a href="#" className="hover:text-brand-text transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-brand-text transition-colors">Shipping Guide</a></li>
              <li><a href="#" className="hover:text-brand-text transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-wide mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-brand-text-muted">
              <li><a href="#" className="hover:text-brand-text transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-text transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-text transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-text-faint">
          <p>© 2026 Nusantara. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
