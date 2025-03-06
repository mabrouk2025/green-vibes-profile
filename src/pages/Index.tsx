
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sage-50 to-white dark:from-sage-950 dark:to-background p-6">
      <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
        <div className="inline-block mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
            تطبيق التلاوات القرآنية
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          استمع واستمتع بالتلاوات القرآنية
        </h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          منصة متكاملة لاكتشاف واستماع ومشاركة التلاوات القرآنية
          من أشهر القراء حول العالم
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full text-lg px-8">
            <Link to="/profile">
              الملف الشخصي
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8">
            <a href="#">استكشف التلاوات</a>
          </Button>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-muted-foreground">تم تطويره بواسطة Lovable</p>
      </div>
    </div>
  );
};

export default Index;
