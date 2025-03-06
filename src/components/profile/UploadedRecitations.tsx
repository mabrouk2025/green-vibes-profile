
import React from 'react';
import RecitationCard, { RecitationCardProps } from '@/components/ui/RecitationCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

interface UploadedRecitationsProps {
  recitations: Omit<RecitationCardProps, 'onPlay' | 'onFavorite'>[];
  onUploadRecitation?: () => void;
  onPlayRecitation?: (id: string) => void;
}

const UploadedRecitations = ({
  recitations,
  onUploadRecitation,
  onPlayRecitation,
}: UploadedRecitationsProps) => {
  const actionButton = onUploadRecitation ? (
    <Button variant="outline" size="sm" onClick={onUploadRecitation}>
      <Upload className="h-4 w-4 mr-2" />
      Upload New
    </Button>
  ) : undefined;

  return (
    <section className="mt-12 mb-16">
      <SectionHeading 
        title="Your Uploads" 
        subtitle="Recitations you've shared with the community"
        actionButton={actionButton}
      />

      {recitations.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-muted-foreground mb-4">You haven't uploaded any recitations yet</p>
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
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default UploadedRecitations;
