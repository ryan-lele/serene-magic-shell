import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <main className="pt-20 pb-32 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </main>
  );
};

export default ContentContainer;