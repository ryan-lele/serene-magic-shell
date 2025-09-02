import TopNavigation from "@/components/TopNavigation";
import BottomTabBar from "@/components/BottomTabBar";
import ContentContainer from "@/components/ContentContainer";
import DreamLanding from "@/components/DreamLanding";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Main Content Container */}
      <ContentContainer>
        {/* Dream Landing Content */}
        <DreamLanding />
      </ContentContainer>
      
      {/* Bottom Tab Bar */}
      <BottomTabBar />
    </div>
  );
};

export default Index;
