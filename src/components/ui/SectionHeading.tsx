
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
  subtitle?: string;
  actionButton?: React.ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  className,
  actionButton 
}: SectionHeadingProps) => {
  return (
    <div className={cn("flex items-center justify-between mb-6", className)}>
      <div className="space-y-1 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {actionButton && (
        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          {actionButton}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
