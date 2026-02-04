import { Gamepad2, Sparkles } from 'lucide-react';
import { CheesecakeLogo } from './CheesecakeLogo';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <CheesecakeLogo className="w-20 h-20" />
        </div>
        
        <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
          cheesecakecorp
        </h1>
        
        <p className="text-xl md:text-2xl text-amber-900 mb-8 max-w-2xl mx-auto">
          A group of friends making games, breaking games, and eating cheesecake
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
            View Our Games
          </button>
          <button className="px-8 py-4 bg-amber-900/10 hover:bg-amber-900/20 text-amber-900 rounded-full font-semibold backdrop-blur-sm transition-all border-2 border-amber-700/30">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
}