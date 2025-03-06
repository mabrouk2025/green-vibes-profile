
import React, { useState } from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import RecitationsList from '@/components/profile/RecitationsList';
import PlaylistsSection from '@/components/profile/PlaylistsSection';
import UploadedRecitations from '@/components/profile/UploadedRecitations';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for demonstration
const mockUser = {
  username: "أحمد محمد",
  bio: "عاشق التلاوات القرآنية والتجويد",
  avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
};

const mockRecentRecitations = [
  {
    id: "rec1",
    title: "سورة البقرة",
    reciter: "مشاري العفاسي",
    duration: "2:30:15",
    coverImage: "https://images.unsplash.com/photo-1597016368323-34b1767d7833?q=80&w=300&auto=format&fit=crop",
    isFavorite: true,
  },
  {
    id: "rec2",
    title: "سورة آل عمران",
    reciter: "عبد الباسط عبد الصمد",
    duration: "1:45:20",
    coverImage: "https://images.unsplash.com/photo-1608158432290-9239ad39f581?q=80&w=300&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: "rec3",
    title: "سورة النساء",
    reciter: "ماهر المعيقلي",
    duration: "2:10:05",
    coverImage: "https://images.unsplash.com/photo-1606684260800-ee9966acd095?q=80&w=300&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: "rec4",
    title: "سورة المائدة",
    reciter: "سعد الغامدي",
    duration: "1:55:40",
    coverImage: "https://images.unsplash.com/photo-1597245621924-af248572e68b?q=80&w=300&auto=format&fit=crop",
    isFavorite: true,
  },
  {
    id: "rec5",
    title: "سورة الأنعام",
    reciter: "ياسر الدوسري",
    duration: "2:20:15",
    coverImage: "https://images.unsplash.com/photo-1602697775137-f13d8e9044b7?q=80&w=300&auto=format&fit=crop",
    isFavorite: false,
  },
];

const mockPlaylists = [
  {
    id: "pl1",
    name: "تلاوات الصباح",
    recitationsCount: 12,
    coverImage: "https://images.unsplash.com/photo-1601887839660-74821c3bb8a4?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "pl2",
    name: "تلاوات المساء",
    recitationsCount: 8,
    coverImage: "https://images.unsplash.com/photo-1518481048195-3e51dd5f91bd?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "pl3",
    name: "مختارات المعيقلي",
    recitationsCount: 15,
    coverImage: "https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "pl4",
    name: "سور القرآن كاملة",
    recitationsCount: 114,
    coverImage: "https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=300&auto=format&fit=crop",
  },
];

const mockUploads = [
  {
    id: "upl1",
    title: "تلاوتي لسورة يس",
    reciter: "أنا",
    duration: "20:15",
    coverImage: "https://images.unsplash.com/photo-1584278860437-41a969d208f7?q=80&w=300&auto=format&fit=crop",
    isFavorite: false,
  },
  {
    id: "upl2",
    title: "تلاوتي لسورة الرحمن",
    reciter: "أنا",
    duration: "15:30",
    coverImage: "https://images.unsplash.com/photo-1501263418545-8792a5c7aca1?q=80&w=300&auto=format&fit=crop",
    isFavorite: false,
  },
];

const Profile = () => {
  const [userData, setUserData] = useState(mockUser);
  const [recitations, setRecitations] = useState(mockRecentRecitations);
  const [playlists, setPlaylists] = useState(mockPlaylists);
  const [uploads, setUploads] = useState(mockUploads);
  const [playingRecitation, setPlayingRecitation] = useState<string | null>(null);
  const [isPlayDialogOpen, setIsPlayDialogOpen] = useState(false);
  
  const handleEditProfile = (data: typeof userData) => {
    setUserData(data);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
    });
  };
  
  const handleToggleFavorite = (id: string, isFavorite: boolean) => {
    setRecitations(prev => 
      prev.map(rec => 
        rec.id === id ? { ...rec, isFavorite } : rec
      )
    );
    
    toast({
      title: isFavorite ? "Added to favorites" : "Removed from favorites",
      duration: 2000,
    });
  };
  
  const handlePlayRecitation = (id: string) => {
    setPlayingRecitation(id);
    setIsPlayDialogOpen(true);
    
    // In a real app, you would play the recitation here
    console.log(`Playing recitation ${id}`);
  };
  
  const handleCreatePlaylist = () => {
    // In a real app, you would show a dialog to create a new playlist
    toast({
      title: "Create playlist",
      description: "This would open a dialog to create a new playlist",
    });
  };
  
  const handleUploadRecitation = () => {
    // In a real app, you would show a dialog to upload a new recitation
    toast({
      title: "Upload recitation",
      description: "This would open a dialog to upload a new recitation",
    });
  };

  return (
    <div className="min-h-screen container pb-20">
      <div className="max-w-6xl mx-auto">
        <ProfileHeader 
          username={userData.username}
          avatarUrl={userData.avatarUrl}
          bio={userData.bio}
          onEditProfile={() => {
            // In a real app, you would open the edit profile dialog
            toast({
              title: "Edit profile",
              description: "This would open the edit profile dialog",
            });
          }}
        />

        <Tabs defaultValue="recent" className="mt-10">
          <TabsList className="mx-auto max-w-lg grid grid-cols-3 h-12">
            <TabsTrigger value="recent" className="text-base">الاستماع الأخير</TabsTrigger>
            <TabsTrigger value="playlists" className="text-base">قوائم التشغيل</TabsTrigger>
            <TabsTrigger value="uploads" className="text-base">التلاوات المرفوعة</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent" className="mt-8 animate-fade-in">
            <RecitationsList
              title="Recently Played"
              subtitle="Your recently played recitations"
              recitations={recitations}
              actionLabel="View All"
              onAction={() => {
                // In a real app, you would navigate to the full history
                toast({
                  title: "View all",
                  description: "This would show your full listening history",
                });
              }}
              onPlayRecitation={handlePlayRecitation}
              onToggleFavorite={handleToggleFavorite}
            />
          </TabsContent>
          
          <TabsContent value="playlists" className="mt-8 animate-fade-in">
            <PlaylistsSection
              playlists={playlists}
              onPlaylistClick={(id) => {
                // In a real app, you would navigate to the playlist
                toast({
                  title: "Open playlist",
                  description: `Opening playlist ${id}`,
                });
              }}
              onCreatePlaylist={handleCreatePlaylist}
            />
          </TabsContent>
          
          <TabsContent value="uploads" className="mt-8 animate-fade-in">
            <UploadedRecitations
              recitations={uploads}
              onUploadRecitation={handleUploadRecitation}
              onPlayRecitation={handlePlayRecitation}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Player Dialog (simplified) */}
      <Dialog open={isPlayDialogOpen} onOpenChange={setIsPlayDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Now Playing</DialogTitle>
          </DialogHeader>
          <div className="py-6">
            {playingRecitation && (
              <div className="text-center">
                <p>
                  Playing recitation: {
                    [...recitations, ...uploads].find(r => r.id === playingRecitation)?.title
                  }
                </p>
                <p className="text-muted-foreground mt-2">
                  By: {
                    [...recitations, ...uploads].find(r => r.id === playingRecitation)?.reciter
                  }
                </p>
                <div className="mt-4 h-1 w-full bg-muted overflow-hidden rounded-full">
                  <div className="bg-primary h-full w-1/3 animate-pulse"></div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
