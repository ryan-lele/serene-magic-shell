import { Star, Wand2, Compass } from "lucide-react";
import { useState } from "react";

const BottomTabBar = () => {
  const [activeTab, setActiveTab] = useState("dreams");

  const tabs = [
    {
      id: "dreams",
      label: "梦境",
      icon: Star,
      description: "极致哄睡"
    },
    {
      id: "create",
      label: "创造", 
      icon: Wand2,
      description: "AI共创绘本工坊"
    },
    {
      id: "explore",
      label: "探索",
      icon: Compass,
      description: "十万个为什么先生"
    }
  ];

  return (
    <div className="tab-bar">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="group flex flex-col items-center gap-1 p-2"
            aria-label={tab.description}
          >
            <Icon 
              className={`tab-icon ${isActive ? 'active' : ''}`}
            />
            <span 
              className={`text-xs font-medium transition-colors duration-200 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground group-hover:text-primary'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomTabBar;