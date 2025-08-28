import React from 'react';
import { LayoutGrid, Users, BarChart3, Settings, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navigationItems = [
  { name: 'Cards', icon: LayoutGrid, active: true },
  { name: 'Contacts', icon: Users, active: false },
  { name: 'Analytics', icon: BarChart3, active: false },
  { name: 'Settings', icon: Settings, active: false },
];

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-border shadow-sm z-40 flex flex-col">
      {/* Top Section - Logo */}
      <div className="p-6 flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/default-avatar.jpg" alt="Leo" />
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            L
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold text-foreground">leo</h2>
          <p className="text-sm text-muted-foreground">AI Business Cards</p>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex-1 px-4">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-muted-foreground px-2 mb-3">
            Personal Workspace
          </h3>
          
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 h-9 ${
                    item.active 
                      ? "bg-secondary text-secondary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Section - Earn with Leo */}
      <div className="p-4">
        <div className="bg-muted/30 rounded-lg p-4 border">
          <div className="flex items-start gap-3 mb-3">
            <div className="bg-primary/10 p-2 rounded-md">
              <DollarSign className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm text-foreground">Earn with Leo</h4>
              <p className="text-xs text-muted-foreground mt-1">
                20% lifetime commission
              </p>
            </div>
          </div>
          <Button 
            size="sm" 
            className="w-full text-xs h-8"
            variant="default"
          >
            Start Earning →
          </Button>
        </div>
      </div>
    </div>
  );
};