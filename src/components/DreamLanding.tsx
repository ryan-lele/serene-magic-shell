import { Moon, Sparkles } from "lucide-react";

const DreamLanding = () => {
  return (
    <div className="text-center space-y-8">
      {/* Magical Moon Header */}
      <div className="relative">
        <div className="w-32 h-32 mx-auto mb-6 relative">
          <Moon className="w-full h-full text-primary gentle-float" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl" />
        </div>
        <Sparkles className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-6 h-6 text-accent star-twinkle" />
        <Sparkles className="absolute top-8 right-1/3 w-4 h-4 text-primary star-twinkle" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-12 left-1/4 w-5 h-5 text-accent/70 star-twinkle" style={{ animationDelay: '1s' }} />
      </div>

      {/* Welcome Title */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground font-nunito">
          选择你的梦境
        </h1>
        <p className="text-lg text-muted-foreground font-nunito">
          在宁静的魔法世界中，找到属于你的安眠故事
        </p>
      </div>

      {/* Dream Stories Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Story Card 1 */}
        <div className="magic-card p-6 h-48 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 text-foreground font-nunito">
                星空下的小熊
              </h3>
              <p className="text-muted-foreground text-sm font-nunito">
                和梦境守护者小熊一起，在繁星点点的夜空下开始一场温柔的冒险...
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-accent font-medium">15分钟</span>
              <div className="flex items-center gap-1">
                <Moon className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">安眠故事</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Card 2 */}
        <div className="magic-card p-6 h-48 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2 text-foreground font-nunito">
                魔法森林的秘密
              </h3>
              <p className="text-muted-foreground text-sm font-nunito">
                跟随萤火虫的光芒，走进一个充满奇迹和温暖的魔法森林...
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-accent font-medium">12分钟</span>
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">魔法冒险</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Magic Button */}
      <div className="pt-8">
        <button className="btn-magic">
          开始你的梦境之旅
        </button>
      </div>
    </div>
  );
};

export default DreamLanding;