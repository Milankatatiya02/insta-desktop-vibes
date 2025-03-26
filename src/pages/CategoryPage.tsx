
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, FolderTree, MessageSquare, Search, Bell, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

const CategoryPage = () => {
  const sidebarLinks = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/community', label: 'Community', icon: <Users className="h-5 w-5" /> },
    { path: '/category', label: 'Categories', icon: <FolderTree className="h-5 w-5" /> },
    { path: '/chat', label: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
  ];

  const categories = [
    { id: 1, name: 'Photography', posts: 4560, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Travel', posts: 3210, image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Food', posts: 2130, image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Technology', posts: 6780, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80' },
    { id: 5, name: 'Art', posts: 3450, image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80' },
    { id: 6, name: 'Fitness', posts: 2890, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80' },
    { id: 7, name: 'Music', posts: 4230, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80' },
    { id: 8, name: 'Fashion', posts: 5670, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-gray-50">
        {/* Sidebar */}
        <Sidebar className="border-r border-gray-200">
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
          {/* Top navigation */}
          <div className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
            <div className="relative w-64">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories"
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            </div>
          </div>

          {/* Categories content */}
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Categories</h1>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Grid className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <List className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <div key={category.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{category.posts.toLocaleString()} posts</p>
                      <Button variant="secondary" className="w-full mt-3 text-sm">Browse</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CategoryPage;
