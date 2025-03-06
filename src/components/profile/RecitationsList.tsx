
import React from 'react';
import RecitationCard, { RecitationCardProps } from '@/components/ui/RecitationCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';

interface RecitationsListProps {
  title: string;
  subtitle?: string;
  recitations: Omit<RecitationCardProps, 'onPlay' | 'onFavorite'>[];
  emptyMessage?: string;
  actionLabel?: string;
  onAction?: () => void;
  onPlayRecitation?: (id: string) => void;
  onToggleFavorite?: (id: string, isFavorite: boolean) => void;
}

const RecitationsList = ({
  title,
  subtitle,
  recitations,
  emptyMessage = "No recitations found",
  actionLabel,
  onAction,
  onPlayRecitation,
  onToggleFavorite,
}: RecitationsListProps) => {
  let actionButton;
  if (actionLabel && onAction) {
    actionButton = (
      <Button variant="outline" size="sm" onClick={onAction}>
        {actionLabel}
      </Button>
    );
  }

  return (
    <section className="mt-8">
      <SectionHeading 
        title={title} 
        subtitle={subtitle} 
        actionButton={actionButton}
      />

      {recitations.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-muted-foreground mb-4">{emptyMessage}</p>
          {actionButton}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {recitations.map((recitation, index) => (
            <RecitationCard
              key={recitation.id}
              {...recitation}
              className="animate-fade-in-up"
              style={{ animationDelay: `${100 + index * 50}ms` }}
              onPlay={() => onPlayRecitation?.(recitation.id)}
              onFavorite={() => onToggleFavorite?.(recitation.id, !recitation.isFavorite)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecitationsList;
