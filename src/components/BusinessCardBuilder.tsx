import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Share, 
  Download, 
  MessageSquare,
  Sparkles,
  Train,
  TrendingUp,
  Twitter,
  Linkedin,
  Globe,
  Calendar,
  FileImage
} from 'lucide-react';
import defaultAvatar from '@/assets/default-avatar.jpg';

interface BusinessCardData {
  fullName: string;
  jobTitle: string;
  company: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  profilePhoto: string;
  website: string;
  linkedin: string;
  twitter: string;
}

const BusinessCardBuilder = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [cardData, setCardData] = useState<BusinessCardData>({
    fullName: 'John Doe',
    jobTitle: 'Senior Product Manager',
    company: 'Stripe',
    email: 'john@stripe.com',
    phone: '+1 (555) 123-4567',
    bio: 'I help teams build products that customers love. With 8+ years in product management, I specialize in fintech solutions, user experience design, and scaling growth initiatives. Always passionate about innovation...',
    location: 'San Francisco, CA',
    profilePhoto: defaultAvatar,
    website: 'johndoe.com',
    linkedin: 'linkedin.com/in/johndoe',
    twitter: '@johndoe'
  });

  const updateCardData = (field: keyof BusinessCardData, value: string) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl text-foreground">Leo Business Cards</h1>
            <div className="flex items-center gap-3">
              <Button className="bg-gradient-primary hover:opacity-90 text-white border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                Build
              </Button>
              <Button variant="outline">
                <Train className="w-4 h-4 mr-2" />
                Train
              </Button>
              <Button variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                Improve
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="space-y-6">
            <Card className="p-6 shadow-form border-0 bg-gradient-card">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="about" className="text-sm">About</TabsTrigger>
                  <TabsTrigger value="design" className="text-sm">Design</TabsTrigger>
                  <TabsTrigger value="contact" className="text-sm">Contact Capture</TabsTrigger>
                  <TabsTrigger value="share" className="text-sm">Share</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <p className="text-sm text-muted-foreground mb-6">Essential details that will appear on your card</p>
                  
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={cardData.fullName}
                            onChange={(e) => updateCardData('fullName', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle" className="text-sm font-medium">Job Title *</Label>
                          <Input
                            id="jobTitle"
                            value={cardData.jobTitle}
                            onChange={(e) => updateCardData('jobTitle', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                        <Input
                          id="company"
                          value={cardData.company}
                          onChange={(e) => updateCardData('company', e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={cardData.email}
                            onChange={(e) => updateCardData('email', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                          <Input
                            id="phone"
                            value={cardData.phone}
                            onChange={(e) => updateCardData('phone', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-sm font-medium">Location</Label>
                        <Input
                          id="location"
                          value={cardData.location}
                          onChange={(e) => updateCardData('location', e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
                        <Textarea
                          id="bio"
                          value={cardData.bio}
                          onChange={(e) => {
                            if (e.target.value.length <= 500) {
                              updateCardData('bio', e.target.value)
                            }
                          }}
                          className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                          placeholder="Tell people about yourself and what you do..."
                        />
                        <p className={`text-xs ${cardData.bio.length > 450 ? 'text-destructive' : 'text-muted-foreground'}`}>
                          {cardData.bio.length}/500 characters
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Profile Photo</h4>
                    <p className="text-sm text-muted-foreground mb-4">A professional photo makes your card more memorable</p>
                    
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={cardData.profilePhoto} alt={cardData.fullName} />
                        <AvatarFallback>{cardData.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm">
                          <FileImage className="w-4 h-4 mr-2" />
                          Upload Photo
                        </Button>
                        <p className="text-xs text-muted-foreground">JPG, PNG up to 5MB</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="design" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Card Design</h3>
                    <p className="text-sm text-muted-foreground mb-6">Customize the look and feel of your business card</p>
                    
                    <div className="space-y-6">
                      <div>
                        <Label className="text-sm font-medium mb-3 block">Card Templates</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {['Modern', 'Classic', 'Creative'].map((template) => (
                            <div
                              key={template}
                              className="p-4 border-2 border-primary rounded-lg cursor-pointer hover:shadow-card transition-all duration-200"
                            >
                              <div className="w-full h-20 bg-gradient-primary rounded mb-3"></div>
                              <p className="text-sm font-medium text-center">{template}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium mb-3 block">Color Scheme</Label>
                        <div className="flex gap-2">
                          {[
                            'hsl(25 95% 53%)',
                            'hsl(217 91% 60%)',
                            'hsl(142 71% 45%)',
                            'hsl(262 83% 58%)'
                          ].map((color, index) => (
                            <div
                              key={index}
                              className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-primary ring-offset-2 transition-all hover:scale-110"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Capture Settings</h3>
                    <p className="text-sm text-muted-foreground mb-6">Configure how visitors can connect with you</p>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="website" className="text-sm font-medium">Website</Label>
                          <Input
                            id="website"
                            value={cardData.website}
                            onChange={(e) => updateCardData('website', e.target.value)}
                            placeholder="your-website.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn</Label>
                          <Input
                            id="linkedin"
                            value={cardData.linkedin}
                            onChange={(e) => updateCardData('linkedin', e.target.value)}
                            placeholder="linkedin.com/in/yourname"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twitter" className="text-sm font-medium">Twitter</Label>
                        <Input
                          id="twitter"
                          value={cardData.twitter}
                          onChange={(e) => updateCardData('twitter', e.target.value)}
                          placeholder="@yourhandle"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="share" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Share Your Card</h3>
                    <p className="text-sm text-muted-foreground mb-6">Get your card out there and start networking</p>
                    
                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                        <Share className="w-4 h-4 mr-2" />
                        Generate Share Link
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                        <Button variant="outline">
                          <Calendar className="w-4 h-4 mr-2" />
                          Add to Calendar
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Mobile Preview */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 rounded-3xl">
              <div className="relative mx-auto w-80 h-[640px] bg-gradient-mobile rounded-[3rem] p-2 shadow-mobile">
                {/* Phone Frame */}
                <div className="w-full h-full bg-white rounded-[2.5rem] relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2">
                    <div className="text-xs font-medium">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                      <div className="w-1 h-2 bg-black rounded-sm"></div>
                      <div className="w-6 h-2 bg-black rounded-sm"></div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-6 py-4 space-y-6">
                    {/* Profile Section */}
                    <div className="text-center space-y-3">
                      <div className="relative inline-block">
                        <Avatar className="w-24 h-24 mx-auto shadow-lg">
                          <AvatarImage src={cardData.profilePhoto} alt={cardData.fullName} />
                          <AvatarFallback className="text-xl">
                            {cardData.fullName.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-primary rounded-full flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{cardData.fullName}</h2>
                        <p className="text-orange-primary font-medium">{cardData.jobTitle}</p>
                      </div>

                      <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          <span>{cardData.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{cardData.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="text-center">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {cardData.bio.length > 120 ? `${cardData.bio.slice(0, 120)}...` : cardData.bio}
                      </p>
                    </div>

                    {/* AI Button */}
                    <div className="flex justify-center">
                      <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-3 rounded-full shadow-lg animate-pulse-glow">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Ask AI
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 justify-center">
                      <Button variant="outline" className="flex-1 rounded-full">
                        <Share className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" className="flex-1 rounded-full">
                        <Download className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 pt-4">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Twitter className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Mail className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Globe className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Powered By */}
                    <div className="text-center pt-4">
                      <p className="text-xs text-gray-400">
                        powered by <span className="font-medium text-orange-primary">🦁 leo</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardBuilder;