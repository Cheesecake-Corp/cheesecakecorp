import { Heart, Coffee, Trophy, Cake } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white backdrop-blur-sm rounded-3xl p-10 border-2 border-amber-200 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Cake className="w-10 h-10 text-orange-600" />
            <h2 className="text-5xl font-black text-center bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
              About Us
            </h2>
          </div>
          
          <p className="text-xl text-amber-900 text-center mb-8 leading-relaxed">
            We're a bunch of friends who bonded over video games and questionable life choices. 
            What started as late-night gaming sessions evolved into making our own games, 
            and somehow we're still having fun.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-red-50 rounded-2xl border-2 border-red-200">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-amber-900 mb-2">Made with Love</h3>
              <p className="text-amber-800">Every game is a labor of love (and caffeine)</p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-2xl border-2 border-amber-300">
              <Coffee className="w-12 h-12 text-amber-700 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-amber-900 mb-2">Fueled by Snacks</h3>
              <p className="text-amber-800">Especially cheesecake. Obviously.</p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-300">
              <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-amber-900 mb-2">Game Jam Warriors</h3>
              <p className="text-amber-800">48 hours? Plenty of time to panic.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-amber-800 mb-4">Want to play with us or collaborate?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}