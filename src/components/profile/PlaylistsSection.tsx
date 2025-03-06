
import React from 'react';
import PlaylistCard, { PlaylistCardProps } from '@/components/ui/PlaylistCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface PlaylistsSectionProps {
  playlists: Omit<PlaylistCardProps, 'onClick'>[];
  onPlaylistClick?: (id: string) => void;
  onCreatePlaylist?: () => void;
}

const PlaylistsSection = ({
  playlists,
  onPlaylistClick,
  onCreatePlaylist,
}: PlaylistsSectionProps) => {
  const actionButton = onCreatePlaylist ? (
    <Button variant="outline" size="sm" onClick={onCreatePlaylist}>
      <PlusCircle className="h-4 w-4 mr-2" />
      New Playlist
    </Button>
  ) : undefined;

  return (
    <section className="mt-12">
      <SectionHeading 
        title="Saved Playlists" 
        subtitle="Your curated collections of recitations"
        actionButton={actionButton}
      />

      {playlists.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-muted-foreground mb-4">You haven't created any playlists yet</p>
          {actionButton}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={playlist.id}
              {...playlist}
              className="animate-fade-in-up"
              style={{ animationDelay: `${100 + index * 50}ms` }}
              onClick={() => onPlaylistClick?.(playlist.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PlaylistsSection;
