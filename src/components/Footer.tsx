import { Github, Twitter, Twitch, Mail } from 'lucide-react';
import { CheesecakeLogo } from './CheesecakeLogo';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t-2 border-amber-200 relative z-10 bg-amber-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex items-center gap-4">
            <CheesecakeLogo className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-2">
                cheesecakecorp
              </h3>
              <p className="text-amber-800">Making games, one slice at a time 🍰</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all hover:scale-110 border-2 border-amber-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-amber-800" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all hover:scale-110 border-2 border-amber-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-amber-800" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all hover:scale-110 border-2 border-amber-300"
              aria-label="Twitch"
            >
              <Twitch className="w-5 h-5 text-amber-800" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition-all hover:scale-110 border-2 border-amber-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-amber-800" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t-2 border-amber-200 text-center text-amber-700 text-sm">
          © 2026 cheesecakecorp. All games are bug-free* (*bugs may be features)
        </div>
      </div>
    </footer>
  );
}