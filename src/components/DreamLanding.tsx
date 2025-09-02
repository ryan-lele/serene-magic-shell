import { Moon, Sparkles, Star } from "lucide-react";

const DreamLanding = () => {
  return (
    <div className="text-center space-y-8">
      {/* Magical Header with Dream Guardian Bear */}
      <div className="relative mb-12">
        {/* Moon Background */}
        <div className="w-40 h-40 mx-auto mb-8 relative">
          <Moon className="w-full h-full text-primary gentle-float" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl" />
          
          {/* Dream Guardian Bear on Moon */}
          <div className="absolute inset-0 flex items-center justify-center bear-float">
            <div className="relative">
              {/* Bear Body - represented by circle */}
              <div className="w-16 h-20 bg-gradient-to-b from-accent/60 to-accent/40 rounded-full relative">
                {/* Bear Face */}
                <div className="w-12 h-12 bg-gradient-to-b from-accent/70 to-accent/50 rounded-full absolute -top-6 left-2">
                  {/* Ears */}
                  <div className="w-3 h-3 bg-accent/60 rounded-full absolute -top-1 left-1"></div>
                  <div className="w-3 h-3 bg-accent/60 rounded-full absolute -top-1 right-1"></div>
                  {/* Eyes (closed peaceful) */}
                  <div className="w-1 h-0.5 bg-primary/60 rounded-full absolute top-4 left-3"></div>
                  <div className="w-1 h-0.5 bg-primary/60 rounded-full absolute top-4 right-3"></div>
                  {/* Nose */}
                  <div className="w-1 h-1 bg-primary/40 rounded-full absolute top-5 left-1/2 transform -translate-x-1/2"></div>
                </div>
                {/* Arms holding star */}
                <div className="w-3 h-8 bg-accent/50 rounded-full absolute top-4 -left-2 rotate-12"></div>
                <div className="w-3 h-8 bg-accent/50 rounded-full absolute top-4 -right-2 -rotate-12"></div>
                {/* Glowing Star in bear's arms */}
                <Star className="w-6 h-6 text-primary absolute top-6 left-1/2 transform -translate-x-1/2 star-breathe" fill="currentColor" />
              </div>
            </div>
          </div>
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
          {/* Story Card 1 */}
          <div className="magic-card w-64 h-80 relative overflow-hidden group cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* 80% Illustration Area */}
            <div className="h-4/5 relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <Star className="w-16 h-16 text-primary mx-auto mb-2 star-twinkle" fill="currentColor" />
                <Moon className="w-8 h-8 text-accent/60 mx-auto gentle-float" />
              </div>
            </div>
            
            {/* 20% Text Area */}
            <div className="h-1/5 p-4 relative z-10 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-foreground font-nunito mb-1">
                星空下的小熊
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent font-medium">15分钟</span>
                <span className="text-muted-foreground">安眠故事</span>
              </div>
            </div>
          </div>

          {/* Story Card 2 */}
          <div className="magic-card w-64 h-80 relative overflow-hidden group cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="h-4/5 relative bg-gradient-to-br from-accent/5 via-primary/5 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-14 h-14 text-accent mx-auto mb-3 star-breathe" />
                <div className="flex gap-2">
                  <div className="w-3 h-8 bg-accent/30 rounded-full"></div>
                  <div className="w-3 h-10 bg-accent/40 rounded-full"></div>
                  <div className="w-3 h-6 bg-accent/30 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="h-1/5 p-4 relative z-10 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-foreground font-nunito mb-1">
                魔法森林的秘密
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent font-medium">12分钟</span>
                <span className="text-muted-foreground">魔法冒险</span>
              </div>
            </div>
          </div>

          {/* Story Card 3 */}
          <div className="magic-card w-64 h-80 relative overflow-hidden group cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="h-4/5 relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <Moon className="w-12 h-12 text-primary mx-auto mb-4 breathe" />
                <div className="flex justify-center gap-1">
                  <Sparkles className="w-2 h-2 text-accent star-breathe" style={{ animationDelay: '0s' }} />
                  <Sparkles className="w-3 h-3 text-primary star-breathe" style={{ animationDelay: '0.5s' }} />
                  <Sparkles className="w-2 h-2 text-accent star-breathe" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
            
            <div className="h-1/5 p-4 relative z-10 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-foreground font-nunito mb-1">
                云朵上的旅行
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent font-medium">18分钟</span>
                <span className="text-muted-foreground">温柔冒险</span>
              </div>
            </div>
          </div>

          {/* Story Card 4 */}
          <div className="magic-card w-64 h-80 relative overflow-hidden group cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="h-4/5 relative bg-gradient-to-br from-accent/5 via-primary/5 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <div className="relative">
                  <Star className="w-10 h-10 text-accent mx-auto star-twinkle" fill="currentColor" />
                  <Star className="w-6 h-6 text-primary absolute -top-2 -right-2 star-breathe" fill="currentColor" />
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full gentle-float"></div>
                </div>
              </div>
            </div>
            
            <div className="h-1/5 p-4 relative z-10 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-foreground font-nunito mb-1">
                彩虹桥的约定
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent font-medium">20分钟</span>
                <span className="text-muted-foreground">友谊故事</span>
              </div>
            </div>
          </div>

          {/* Story Card 5 */}
          <div className="magic-card w-64 h-80 relative overflow-hidden group cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="h-4/5 relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 flex items-center justify-center">
              <div className="text-center">
                <div className="relative">
                  <Moon className="w-8 h-8 text-primary mx-auto gentle-float" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-accent/60 rounded-full bear-float"></div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-2">
                  <Sparkles className="w-2 h-2 text-accent/60 star-breathe" style={{ animationDelay: '0s' }} />
                  <Sparkles className="w-2 h-2 text-primary/60 star-breathe" style={{ animationDelay: '1s' }} />
                  <Sparkles className="w-2 h-2 text-accent/60 star-breathe" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>
            
            <div className="h-1/5 p-4 relative z-10 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-foreground font-nunito mb-1">
                海洋深处的摇篮曲
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-accent font-medium">22分钟</span>
                <span className="text-muted-foreground">深度安眠</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamLanding;