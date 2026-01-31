import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">
              कसरी?
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              From Promise to Policy
            </p>
            <p className="text-gray-400 mb-4">
              A non-partisan civic awareness initiative empowering Nepali voters 
              to ask the right questions and hold candidates accountable.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="size-4" />
              <span>Serving all 77 districts of Nepal</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Policy Areas</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Resources</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-white mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Volunteer</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Partner With Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Submit Questions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Mail className="size-4" />
              <a href="mailto:hello@kasari.org.np" className="hover:text-white transition-colors">
                hello@kasari.org.np
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Kasari Initiative. All rights reserved. Non-partisan • Non-profit
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
