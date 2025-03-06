
import React from 'react';
import { User, MoreHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProfileHeaderProps {
  username: string;
  avatarUrl?: string;
  bio?: string;
  onEditProfile: () => void;
}

const ProfileHeader = ({ 
  username, 
  avatarUrl, 
  bio,
  onEditProfile 
}: ProfileHeaderProps) => {
  return (
    <div className="relative w-full animate-fade-in-up">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/10 to-transparent rounded-lg -z-10"></div>
      
      <div className="relative z-10 pt-12 px-6 md:px-8 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Avatar and username */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <div className="h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-4 border-white dark:border-black/40 shadow-soft bg-white dark:bg-black/20">
              {avatarUrl ? (
                <img 
                  src={avatarUrl} 
                  alt={username} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-muted">
                  <User className="h-12 w-12 text-muted-foreground/50" />
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{username}</h1>
            {bio && (
              <p className="mt-2 text-muted-foreground max-w-md">{bio}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            onClick={onEditProfile}
            variant="outline" 
            className="rounded-full font-medium"
          >
            Edit Profile
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreHorizontal className="h-5 w-5" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Share Profile</DropdownMenuItem>
              <DropdownMenuItem>Account Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
