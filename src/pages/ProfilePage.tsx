
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, FolderTree, MessageSquare, Grid, Bookmark, Settings, User, Edit3, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const isMobile = useIsMobile();

  const sidebarLinks = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/community', label: 'Community', icon: <Users className="h-5 w-5" /> },
    { path: '/category', label: 'Categories', icon: <FolderTree className="h-5 w-5" /> },
    { path: '/chat', label: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
    { path: '/profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
  ];

  // Sample data
  const userStats = [
    { label: 'Posts', value: '142' },
    { label: 'Followers', value: '2.5K' },
    { label: 'Following', value: '568' },
  ];

  const posts = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    image: `https://images.unsplash.com/photo-${1550000000 + i * 100}?auto=format&fit=crop&w=800&q=80`,
    likes: Math.floor(Math.random() * 1000) + 100,
    comments: Math.floor(Math.random() * 50) + 5,
  }));

  const savedPosts = posts.slice(0, 6);
  const categoryPosts = [
    { name: "Photography", count: 24, image: posts[0].image },
    { name: "Travel", count: 18, image: posts[1].image },
    { name: "Food", count: 12, image: posts[2].image },
    { name: "Technology", count: 8, image: posts[3].image },
  ];

  const activities = [
    { type: "like", user: "sarah_92", content: "liked your photo", time: "2h" },
    { type: "comment", user: "john_doe", content: "commented: 'Amazing shot!'", time: "5h" },
    { type: "follow", user: "travel_enthusiast", content: "started following you", time: "1d" },
    { type: "mention", user: "photo_gallery", content: "mentioned you in a comment", time: "2d" },
  ];

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen w-full bg-gray-50">
        {/* Sidebar */}
        <Sidebar className="border-r border-gray-200 z-30">
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
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1">
            {/* Profile Header */}
            <div className="bg-white border-b border-gray-200 p-6 md:p-10">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 p-1">
                      <div className="w-full h-full bg-white rounded-full p-0.5">
                        <div className="w-full h-full bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-white shadow-md border border-gray-200 w-8 h-8">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <h1 className="text-2xl font-semibold">alex_designer</h1>
                      <div className="flex gap-2 justify-center md:justify-start">
                        <Button className="px-4">Edit Profile</Button>
                        <Button variant="outline" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center md:justify-start gap-8 mb-4">
                      {userStats.map((stat, idx) => (
                        <div key={idx} className="text-center md:text-left">
                          <div className="font-semibold">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Bio */}
                    <div className="max-w-lg">
                      <p className="font-medium">Alex Johnson</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Digital designer and photographer sharing creativity and inspiration.
                        Let's connect and collaborate! 📷 ✨
                      </p>
                      <p className="text-sm text-blue-600 mt-1">www.alexdesigns.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs and Content */}
            <div className="max-w-5xl mx-auto w-full pt-4 px-4">
              <Tabs defaultValue="posts" className="w-full">
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="posts"><Grid className="h-4 w-4 mr-2" /> Posts</TabsTrigger>
                  <TabsTrigger value="saved"><Bookmark className="h-4 w-4 mr-2" /> Saved</TabsTrigger>
                  <TabsTrigger value="categories"><FolderTree className="h-4 w-4 mr-2" /> Categories</TabsTrigger>
                  <TabsTrigger value="activity"><Users className="h-4 w-4 mr-2" /> Activity</TabsTrigger>
                </TabsList>

                {/* Posts Tab */}
                <TabsContent value="posts">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {posts.map((post) => (
                      <Card key={post.id} className="overflow-hidden">
                        <div className="aspect-square bg-gray-200 relative overflow-hidden">
                          <img 
                            src={`https://source.unsplash.com/random/800x800?sig=${post.id}`} 
                            alt={`Post ${post.id}`}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <div className="flex gap-4 text-white">
                              <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                {post.likes}
                              </div>
                              <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                {post.comments}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Saved Tab */}
                <TabsContent value="saved">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {savedPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden">
                        <div className="aspect-square bg-gray-200 relative overflow-hidden">
                          <img 
                            src={`https://source.unsplash.com/random/800x800?sig=${post.id + 20}`} 
                            alt={`Saved post ${post.id}`}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                          <div className="absolute top-2 right-2">
                            <Button variant="ghost" size="icon" className="bg-white bg-opacity-70 rounded-full h-8 w-8">
                              <Bookmark className="h-4 w-4 fill-current" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Categories Tab */}
                <TabsContent value="categories">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {categoryPosts.map((category, idx) => (
                      <Card key={idx} className="overflow-hidden">
                        <div className="flex h-32">
                          <div className="w-1/3 bg-gray-200">
                            <img 
                              src={`https://source.unsplash.com/random/300x300?sig=${idx + 40}`} 
                              alt={category.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="w-2/3 flex flex-col justify-center">
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                            <p className="text-sm text-gray-500">{category.count} posts</p>
                            <Button variant="link" className="p-0 mt-2 h-auto text-blue-600 justify-start">
                              View Category
                            </Button>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Activity Tab */}
                <TabsContent value="activity">
                  <div className="mt-6 space-y-4">
                    {activities.map((activity, idx) => (
                      <Card key={idx}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            <div className="flex-1">
                              <p className="text-sm">
                                <span className="font-medium">{activity.user}</span> {activity.content}
                              </p>
                              <p className="text-xs text-gray-500">{activity.time} ago</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              {activity.type === 'follow' ? 'Follow Back' : 'View'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProfilePage;
