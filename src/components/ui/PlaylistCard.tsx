
import React from 'react';
import { PlayCircle, ListMusic } from 'lucide-react';
import { cn } from "@/lib/utils";

export interface PlaylistCardProps {
  id: string;
  name: string;
  recitationsCount: number;
  coverImage: string;
  className?: string;
  onClick?: () => void;
}

const PlaylistCard = ({
  name,
  recitationsCount,
  coverImage,
  className,
  onClick,
}: PlaylistCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "group relative rounded-lg overflow-hidden card-hover subtle-shadow cursor-pointer bg-white/80 dark:bg-black/30 border border-border animate-fade-in-up",
        className
      )}
    >
      <div className="aspect-square w-full overflow-hidden rounded-md relative">
        <img
          src={coverImage}
          alt={name}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
        
        {/* Overlay icon */}
        <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/50 backdrop-blur-sm text-primary p-2 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-300">
          <PlayCircle className="h-5 w-5" />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-base leading-tight truncate">{name}</h3>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          <ListMusic className="h-4 w-4 mr-1.5" />
          <span>{recitationsCount} {recitationsCount === 1 ? 'recitation' : 'recitations'}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
