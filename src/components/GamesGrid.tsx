import { GameCard } from './GameCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

const games = [
  {
    title: "Pixel Paradise",
    description: "A cozy farming simulator where pixels grow on trees and bugs are features",
    image: "pixel art farming game",
    tags: ["Simulation", "Cozy", "Multiplayer"],
    status: "Released"
  },
  {
    title: "Dungeon Dorks",
    description: "A chaotic roguelike where the dungeon master is just as confused as you are",
    image: "dungeon crawler game",
    tags: ["Roguelike", "Comedy", "Co-op"],
    status: "In Development"
  },
  {
    title: "Speedrun Snacks",
    description: "Race through kitchens collecting ingredients while avoiding angry chefs",
    image: "racing cooking game",
    tags: ["Racing", "Arcade", "Fast-paced"],
    status: "Released"
  },
  {
    title: "Code Breakers",
    description: "A puzzle game about debugging someone else's terrible code",
    image: "puzzle programming game",
    tags: ["Puzzle", "Educational", "Humor"],
    status: "Prototype"
  },
  {
    title: "Neon Nights",
    description: "A synthwave platformer where the beat controls your jump height",
    image: "neon platformer game",
    tags: ["Platformer", "Music", "Retro"],
    status: "In Development"
  },
  {
    title: "Boss Rush Buffet",
    description: "Fight epic bosses but they're all desserts. Yes, really.",
    image: "boss battle dessert game",
    tags: ["Action", "Boss Rush", "Sweet"],
    status: "Released"
  }
];

export function GamesGrid() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
          Our Games
        </h2>
        <p className="text-center text-amber-800 mb-16 text-lg">
          From game jams to full releases, here's what we've been cooking
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}