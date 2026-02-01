import React from 'react';
import { DayCounter } from './components/DayCounter';
import { ComplimentMachine } from './components/ComplimentMachine';
import { ScrabbleName } from './components/ScrabbleName';
import { Gallery } from './components/Gallery';
import { Plane, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-pink-500/30">

      {/* Decorative Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 gap-16">

        {/* Header Section */}
        <header className="flex flex-col items-center gap-6 animate-fade-in">
          <ScrabbleName name="BIYONA" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </header>

        {/* Main Counter */}
        <DayCounter />

        {/* Compliments */}
        <ComplimentMachine />

        {/* Long Distance Connection Animation */}
        <div className="w-full max-w-md mx-auto px-8 relative h-24 flex items-center justify-between text-white/50">
          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-6 h-6 text-indigo-400" />
            <span className="text-xs tracking-wider">NY</span>
          </div>

          <div className="flex-1 h-px bg-gradient-to-r from-indigo-400/20 via-pink-400/20 to-indigo-400/20 relative mx-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3 animate-shimmer" />
            <Plane className="absolute top-1/2 -translate-y-1/2 text-white/80 w-4 h-4 animate-float" style={{ offsetPath: 'path("M0,0 L100%,0")', offsetDistance: '0%' }} />
          </div>

          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-6 h-6 text-pink-400" />
            <span className="text-xs tracking-wider">CHI</span>
          </div>
        </div>

        {/* Gallery */}
        <Gallery />

        {/* Footer */}
        <footer className="text-center text-white/20 text-sm pb-8">
          <p>© {new Date().getFullYear()} • Built with ❤️ for my future wife</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
