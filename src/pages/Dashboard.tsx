
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, FolderTree, MessageSquare, Search, Bell, PlusSquare, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Dashboard = () => {
  const [showChat, setShowChat] = useState(false);
  const isMobile = useIsMobile();

  // Sample posts for the feed
  const posts = [
    { 
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80', 
      alt: 'User post 1',
      username: 'photography_lover',
      location: 'New York',
      likes: 234,
      caption: 'Exploring the city streets and finding beauty in the urban landscape. #photography #urban #cityscape',
      timeAgo: '2 HOURS AGO',
      comments: 42
    },
    { 
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80', 
      alt: 'User post 2',
      username: 'tech_enthusiast',
      location: 'Silicon Valley',
      likes: 876,
      caption: 'New tech setup complete! This coding environment is perfect for late night sessions. #coding #tech #workspace',
      timeAgo: '5 HOURS AGO',
      comments: 63
    },
    { 
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', 
      alt: 'User post 3',
      username: 'fitness_journey',
      location: 'Home Gym',
      likes: 532,
      caption: "Today's workout was intense but worth it! Remember consistency is key. #fitness #workout #motivation",
      timeAgo: '1 DAY AGO',
      comments: 28
    },
    { 
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80', 
      alt: 'User post 4',
      username: 'digital_artist',
      location: 'Creative Studio',
      likes: 1243,
      caption: 'My latest digital art piece exploring themes of technology and nature. #digitalart #creative #artwork',
      timeAgo: '2 DAYS AGO',
      comments: 95
    },
  ];

  const sidebarLinks = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/community', label: 'Community', icon: <Users className="h-5 w-5" /> },
    { path: '/category', label: 'Categories', icon: <FolderTree className="h-5 w-5" /> },
    { path: '/chat', label: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
    { path: '/profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
  ];

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen w-full bg-gray-50">
        {/* Sidebar - reduced width */}
        <Sidebar className="border-r border-gray-200 z-30" style={{width: 'var(--sidebar-width)', '--sidebar-width': '14rem'} as React.CSSProperties}>
          <SidebarHeader className="p-4 border-b">
            <h1 className="text-xl font-semibold">Instagram</h1>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {sidebarLinks.map((link) => (
                <SidebarMenuItem key={link.path}>
                  <SidebarMenuButton asChild tooltip={link.label}>
                    <NavLink to={link.path} className={({ isActive }) => 
                      isActive ? "text-black font-medium" : "text-gray-600"
                    }>
                      {link.icon}
                      <span>{link.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top navigation */}
          <div className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between sticky top-0 z-20">
            <div className="relative w-full max-w-xs">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={() => setShowChat(!showChat)}
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
              </Button>
              <NavLink to="/profile" className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0"></NavLink>
            </div>
          </div>

          {/* Flexible content area with separate scrolling */}
          <div className="flex flex-1 overflow-hidden">
            {/* Feed with its own scroll area */}
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-[calc(100vh-4rem)]">
                <div className="max-w-xl mx-auto px-4 py-6">
                  {/* Create post button */}
                  <Card className="mb-6 shadow-sm">
                    <CardContent className="p-4">
                      <Button className="w-full flex items-center justify-center gap-2">
                        <PlusSquare className="h-5 w-5" />
                        Create Post
                      </Button>
                    </CardContent>
                  </Card>
                  
                  {/* Stories */}
                  <Card className="mb-6 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex space-x-4 overflow-x-auto pb-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 p-0.5">
                              <div className="w-full h-full bg-white rounded-full p-0.5">
                                <div className="w-full h-full bg-gray-200 rounded-full"></div>
                              </div>
                            </div>
                            <span className="text-xs mt-1">user_{i}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Posts with improved structure */}
                  <div className="space-y-6">
                    {posts.map((post, idx) => (
                      <Card key={idx} className="overflow-hidden shadow-sm">
                        <CardHeader className="p-4 flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{post.username}</p>
                            <p className="text-xs text-gray-500">{post.location}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </Button>
                        </CardHeader>
                        
                        <img src={post.src} alt={post.alt} className="w-full aspect-square object-cover" />
                        
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4 mb-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                              </svg>
                            </Button>
                          </div>
                          <p className="font-medium text-sm mb-1">{post.likes} likes</p>
                          <p className="text-sm">
                            <span className="font-medium">{post.username}</span> {post.caption}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">View all {post.comments} comments</p>
                          <p className="text-xs text-gray-400 mt-2">{post.timeAgo}</p>
                        </CardContent>
                        
                        <CardFooter className="px-4 py-3 border-t border-gray-100">
                          <div className="flex items-center w-full">
                            <input
                              type="text"
                              placeholder="Add a comment..."
                              className="w-full text-sm bg-transparent focus:outline-none"
                            />
                            <Button variant="ghost" size="sm" className="text-blue-500 font-medium">Post</Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
            
            {/* Chat sidebar with its own scroll area - conditionally shown and fixed position */}
            {showChat && (
              <div className={`w-72 border-l border-gray-200 bg-white flex-shrink-0 overflow-hidden
                ${isMobile ? 'fixed right-0 top-0 h-full z-40' : 'h-[calc(100vh-4rem)]'}
              `}>
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="font-semibold">Messages</h2>
                  {isMobile && (
                    <Button variant="ghost" size="sm" onClick={() => setShowChat(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <ScrollArea className="h-full">
                  <div className="divide-y">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-sm">user_{i}</p>
                              <span className="text-xs text-gray-400">2h</span>
                            </div>
                            <p className="text-xs text-gray-500 truncate">Last message preview...</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
