import BusinessCardBuilder from '@/components/BusinessCardBuilder';
import { Sidebar } from '@/components/Sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <BusinessCardBuilder />
      </div>
    </div>
  );
};

export default Index;
