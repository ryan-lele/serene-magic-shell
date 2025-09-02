import { User, Settings } from "lucide-react";

const TopNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/30">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary font-nunito">
            XHGD
          </h1>
          <span className="ml-2 text-sm text-muted-foreground font-medium">
            每一步，都神奇
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-accent/20 transition-colors duration-200">
            <User className="w-5 h-5 text-muted-foreground hover:text-primary" />
          </button>
          <button className="p-2 rounded-full hover:bg-accent/20 transition-colors duration-200">
            <Settings className="w-5 h-5 text-muted-foreground hover:text-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;