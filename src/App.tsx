import { Hero } from './components/Hero';
import { GamesGrid } from './components/GamesGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Hero />
      <GamesGrid />
      <About />
      <Footer />
    </div>
  );
}