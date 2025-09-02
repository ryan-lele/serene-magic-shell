import { ArrowLeft, Play, Pause, Clock } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";

const PlayerScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Get story data from navigation state
  const storyData = location.state || {
    title: "星空下的小熊",
    duration: "15分钟"
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBack = () => {
    navigate("/");
  };

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden cursor-pointer"
      onClick={toggleControls}
      style={{
        background: `
          linear-gradient(135deg, 
            hsl(222 47% 8%) 0%, 
            hsl(270 30% 15%) 30%, 
            hsl(222 47% 12%) 70%, 
            hsl(270 50% 20%) 100%
          ),
          radial-gradient(circle at 20% 80%, hsl(45 100% 70% / 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(270 50% 40% / 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, hsl(45 100% 70% / 0.05) 0%, transparent 50%)
        `
      }}
    >
      {/* Immersive Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full relative">
          {/* Floating Stars */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full star-breathe"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full star-breathe" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/60 rounded-full star-breathe" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent/60 rounded-full star-breathe" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-primary/40 rounded-full star-breathe" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Dreamy Clouds */}
          <div className="absolute top-1/4 right-1/5 w-24 h-12 bg-accent/10 rounded-full blur-sm gentle-float"></div>
          <div className="absolute bottom-1/3 left-1/6 w-32 h-16 bg-primary/10 rounded-full blur-sm gentle-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-20 h-10 bg-accent/10 rounded-full blur-sm gentle-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Story Title - Top */}
      <div className={`absolute top-0 left-0 right-0 z-30 pt-16 pb-8 bg-gradient-to-b from-background/40 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground font-nunito mb-2">
            {storyData.title}
          </h1>
          <p className="text-muted-foreground text-sm font-nunito">
            {storyData.duration} • 安眠故事
          </p>
        </div>
      </div>

      {/* Central Story Illustration Area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-8">
          {/* Main Story Visual */}
          <div className="relative">
            {/* Dream Guardian Bear Illustration */}
            <div className="w-48 h-48 mx-auto relative bear-float">
              <div className="w-full h-full bg-gradient-to-b from-accent/20 to-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/20">
                {/* Large Bear Representation */}
                <div className="relative">
                  {/* Bear Body */}
                  <div className="w-32 h-40 bg-gradient-to-b from-accent/40 to-accent/20 rounded-full relative">
                    {/* Bear Head */}
                    <div className="w-24 h-24 bg-gradient-to-b from-accent/50 to-accent/30 rounded-full absolute -top-12 left-4">
                      {/* Ears */}
                      <div className="w-6 h-6 bg-accent/40 rounded-full absolute -top-2 left-2"></div>
                      <div className="w-6 h-6 bg-accent/40 rounded-full absolute -top-2 right-2"></div>
                      {/* Peaceful closed eyes */}
                      <div className="w-2 h-1 bg-primary/60 rounded-full absolute top-8 left-6"></div>
                      <div className="w-2 h-1 bg-primary/60 rounded-full absolute top-8 right-6"></div>
                      {/* Gentle smile */}
                      <div className="w-4 h-2 border-b-2 border-primary/40 rounded-full absolute top-10 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    {/* Arms holding glowing star */}
                    <div className="w-6 h-16 bg-accent/30 rounded-full absolute top-8 -left-4 rotate-12"></div>
                    <div className="w-6 h-16 bg-accent/30 rounded-full absolute top-8 -right-4 -rotate-12"></div>
                    {/* Large Glowing Star */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-primary/60 rounded-full star-breathe flex items-center justify-center">
                        <div className="w-8 h-8 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Magical Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-3 h-3 bg-primary rounded-full absolute top-8 left-8 star-twinkle"></div>
              <div className="w-2 h-2 bg-accent rounded-full absolute top-16 right-12 star-twinkle" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full absolute bottom-12 left-16 star-twinkle" style={{ animationDelay: '1s' }}></div>
              <div className="w-3 h-3 bg-accent/60 rounded-full absolute bottom-8 right-8 star-twinkle" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className={`absolute bottom-0 left-0 right-0 z-30 pb-12 pt-8 bg-gradient-to-t from-background/60 to-transparent backdrop-blur-sm transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center justify-center gap-8 px-8">
          {/* Back Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleBack();
            }}
            className="p-4 bg-card/60 backdrop-blur-sm rounded-full border border-border/30 hover:bg-card/80 transition-all duration-200 hover:scale-105"
            aria-label="返回故事选择"
          >
            <ArrowLeft className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
            className="p-6 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-all duration-200 hover:scale-105 relative"
            aria-label={isPlaying ? "暂停" : "播放"}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
            {isPlaying ? (
              <Pause className="w-8 h-8 text-primary" fill="currentColor" />
            ) : (
              <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
            )}
          </button>

          {/* Sleep Timer Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Timer functionality placeholder
            }}
            className="p-4 bg-card/60 backdrop-blur-sm rounded-full border border-border/30 hover:bg-card/80 transition-all duration-200 hover:scale-105"
            aria-label="设置睡眠定时器"
          >
            <Clock className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
        
        {/* Playing Status */}
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground font-nunito">
            {isPlaying ? "正在播放..." : "点击播放开始你的梦境之旅"}
          </p>
        </div>
      </div>

      {/* Tap to show/hide controls hint */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-300 pointer-events-none ${showControls ? 'opacity-0' : 'opacity-60'}`}>
        <p className="text-muted-foreground text-sm font-nunito">
          轻触屏幕显示控件
        </p>
      </div>
    </div>
  );
};

export default PlayerScreen;