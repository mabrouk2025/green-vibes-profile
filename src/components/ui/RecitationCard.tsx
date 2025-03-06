
import React from 'react';
import { Play, Clock, Heart } from 'lucide-react';
import { cn } from "@/lib/utils";

export interface RecitationCardProps {
  id: string;
  title: string;
  reciter: string;
  duration: string;
  coverImage: string;
  className?: string;
  isFavorite?: boolean;
  onPlay?: () => void;
  onFavorite?: () => void;
}

const RecitationCard = ({
  title,
  reciter,
  duration,
  coverImage,
  className,
  isFavorite = false,
  onPlay,
  onFavorite,
}: RecitationCardProps) => {
  return (
    <div 
      className={cn(
        "group relative rounded-lg overflow-hidden card-hover subtle-shadow bg-white/80 dark:bg-black/30 border border-border animate-fade-in-up",
        className
      )}
    >
      <div className="aspect-square w-full overflow-hidden rounded-md relative">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Play button overlay */}
        <button 
          onClick={onPlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 hover:bg-primary"
          aria-label="Play recitation"
        >
          <Play className="h-5 w-5 fill-current" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1 flex-1 min-w-0">
            <h3 className="font-medium text-base leading-tight truncate">{title}</h3>
            <p className="text-sm text-muted-foreground truncate">{reciter}</p>
          </div>
          
          {onFavorite && (
            <button 
              onClick={onFavorite}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className={cn(
                "h-5 w-5", 
                isFavorite ? "fill-primary text-primary" : ""
              )} />
            </button>
          )}
        </div>
        
        <div className="mt-3 flex items-center text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 mr-1" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default RecitationCard;
