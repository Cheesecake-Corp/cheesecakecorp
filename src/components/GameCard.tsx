import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Users, Zap } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
}

const imageMap: Record<string, string> = {
  "pixel art farming game": "https://images.unsplash.com/photo-1685045760522-ecf11c1ac862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMGZhcm1pbmclMjBnYW1lfGVufDF8fHx8MTc3MDIwMjM0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "dungeon crawler game": "https://images.unsplash.com/photo-1623355567927-7353ba0fcfc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9uJTIwY3Jhd2xlciUyMGdhbWV8ZW58MXx8fHwxNzcwMjAyMzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "racing cooking game": "https://images.unsplash.com/photo-1660915079947-00aac1bd820b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjb29raW5nJTIwZ2FtZXxlbnwxfHx8fDE3NzAyMDIzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "puzzle programming game": "https://images.unsplash.com/photo-1622617760286-e11b543f5ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXp6bGUlMjBwcm9ncmFtbWluZyUyMGdhbWV8ZW58MXx8fHwxNzcwMjAyMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "neon platformer game": "https://images.unsplash.com/photo-1632765743329-3b257fe779a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcGxhdGZvcm1lciUyMGdhbWV8ZW58MXx8fHwxNzcwMjAyMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "boss battle dessert game": "https://images.unsplash.com/photo-1724072013765-bb4773d63d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3NzJTIwYmF0dGxlJTIwZGVzc2VydCUyMGdhbWV8ZW58MXx8fHwxNzcwMjAyMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

const statusColors: Record<string, string> = {
  "Released": "bg-green-100 text-green-800 border-green-300",
  "In Development": "bg-yellow-100 text-yellow-800 border-yellow-300",
  "Prototype": "bg-orange-100 text-orange-800 border-orange-300"
};

export function GameCard({ title, description, image, tags, status }: GameCardProps) {
  const imageUrl = imageMap[image];
  
  return (
    <div className="group relative bg-white backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-amber-200 hover:border-amber-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-amber-900/50 to-transparent opacity-40"></div>
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border backdrop-blur-md text-sm font-semibold ${statusColors[status]}`}>
          {status}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-amber-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-700 group-hover:to-orange-700 group-hover:bg-clip-text transition-all">
          {title}
        </h3>
        <p className="text-amber-800 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm border border-amber-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}