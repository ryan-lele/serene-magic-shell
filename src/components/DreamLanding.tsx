import { Moon, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import storiesData from "@/data/stories.json";

interface Story {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  audioUrl: string;
  cardIconType: string;
  playerImageUrl: string;
}

const DreamLanding = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    // Load stories from JSON data
    setStories(storiesData);
  }, []);

  const handleStoryClick = (story: Story) => {
    navigate(`/player/${story.id}`, {
      state: {
        title: story.title,
        description: story.description,
        duration: story.duration,
        category: story.category,
        id: story.id,
        audioUrl: story.audioUrl,
        playerImageUrl: story.playerImageUrl
      }
    });
  };

  const renderStoryIcon = (iconType: string, index: number) => {
    switch (iconType) {
      case "star":
        return (
          <>
            <Star className="w-16 h-16 text-primary mx-auto mb-2 star-twinkle" fill="currentColor" />
            <Moon className="w-8 h-8 text-accent/60 mx-auto gentle-float" />
          </>
        );
      case "sparkles":
        return (
          <>
            <Sparkles className="w-14 h-14 text-accent mx-auto mb-3 star-breathe" />
            <div className="flex gap-2">
              <div className="w-3 h-8 bg-accent/30 rounded-full"></div>
              <div className="w-3 h-10 bg-accent/40 rounded-full"></div>
              <div className="w-3 h-6 bg-accent/30 rounded-full"></div>
            </div>
          </>
        );
      case "moon":
        return (
          <>
            <Moon className="w-12 h-12 text-primary mx-auto mb-4 breathe" />
            <div className="flex justify-center gap-1">
              <Sparkles className="w-2 h-2 text-accent star-breathe" />
              <Sparkles className="w-3 h-3 text-primary star-breathe" style={{ animationDelay: '0.5s' }} />
              <Sparkles className="w-2 h-2 text-accent star-breathe" style={{ animationDelay: '1s' }} />
            </div>
          </>
        );
      case "rainbow":
        return (
          <>
            <div className="relative">
              <Star className="w-10 h-10 text-accent mx-auto star-twinkle" fill="currentColor" />
              <Star className="w-6 h-6 text-primary absolute -top-2 -right-2 star-breathe" fill="currentColor" />
            </div>
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full gentle-float"></div>
            </div>
          </>
        );
      case "ocean":
        return (
          <>
            <div className="relative">
              <Moon className="w-8 h-8 text-primary mx-auto gentle-float" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-accent/60 rounded-full bear-float"></div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              <Sparkles className="w-2 h-2 text-accent/60 star-breathe" />
              <Sparkles className="w-2 h-2 text-primary/60 star-breathe" style={{ animationDelay: '1s' }} />
              <Sparkles className="w-2 h-2 text-accent/60 star-breathe" style={{ animationDelay: '2s' }} />
            </div>
          </>
        );
      case "snowflake":
        return (
          <>
            <div className="relative">
              <Sparkles className="w-12 h-12 text-primary mx-auto star-twinkle" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-accent/40 rounded-full gentle-float"></div>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-1">
              <div className="w-1 h-1 bg-accent/60 rounded-full star-breathe"></div>
              <div className="w-1 h-1 bg-primary/60 rounded-full star-breathe" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-1 h-1 bg-accent/60 rounded-full star-breathe" style={{ animationDelay: '1s' }}></div>
            </div>
          </>
        );
      default:
        return <Star className="w-16 h-16 text-primary mx-auto mb-2 star-twinkle" fill="currentColor" />;
    }
  };
  return (
    <div className="text-center space-y-8">
      {/* Magical Header with Dream Guardian Bear */}
      <div className="relative mb-12">
        {/* Moon Background */}
        <div className="w-40 h-40 mx-auto mb-8 relative">
          <Moon className="w-full h-full text-primary gentle-float" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl" />
          
         {/* Dream Guardian Bear on Moon - Using Image Asset */}
<div className="absolute inset-0 flex items-center justify-center">
  <img 
    src="/images/ip/dream-guardian-bear.png" 
    alt="Dream Guardian Bear Logo"
    className="w-28 h-28 object-contain bear-float" 
  />
</div>
        
        {/* Background Stars with Breathing Effect */}
        <Sparkles className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 text-accent star-breathe" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-12 right-1/4 w-3 h-3 text-primary star-breathe" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-16 left-1/5 w-3 h-3 text-accent/70 star-breathe" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-8 right-1/3 w-2 h-2 text-primary/60 star-breathe" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute bottom-12 left-1/3 w-2 h-2 text-accent/60 star-breathe" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Welcome Title */}
      <div className="space-y-4 mb-12">
        <h1 className="text-3xl font-bold text-foreground font-nunito">
          选择你的梦境
        </h1>
        <p className="text-lg text-muted-foreground font-nunito">
          和梦境守护者小熊一起，在宁静的魔法世界中找到属于你的安眠故事
        </p>
      </div>

      {/* Dream Stories Horizontal Scroll */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-4 min-w-max px-2">
          {stories.map((story, index) => (
          <div 
            key={story.id}
            onClick={() => handleStoryClick(story)}
            className="magic-card w-64 h-80 relative overflow-hidden group cursor-pointer flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* 80% Illustration Area */}
            <div className="h-4/5 relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                {renderStoryIcon(story.cardIconType, index)}
              </div>
            </div>
            
            {/* 20% Text Area */}
            <div className="h-1/5 p-4 relative z-10 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-foreground font-nunito mb-1">
                {story.title}
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent font-medium">{story.duration}</span>
                <span className="text-muted-foreground">{story.category}</span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DreamLanding;
