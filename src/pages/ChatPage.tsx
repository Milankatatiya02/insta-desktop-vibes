
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, FolderTree, MessageSquare, Search, Bell, Send, Paperclip, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(2); // Default selected chat
  
  const sidebarLinks = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/community', label: 'Community', icon: <Users className="h-5 w-5" /> },
    { path: '/category', label: 'Categories', icon: <FolderTree className="h-5 w-5" /> },
    { path: '/chat', label: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
  ];

  const chats = [
    { id: 1, name: 'John Doe', message: 'Hey, how are you doing?', time: '2h', unread: 2, online: true },
    { id: 2, name: 'Jane Smith', message: 'Did you see that new post?', time: '3h', unread: 0, online: true },
    { id: 3, name: 'Photography Group', message: 'Alex: Check out my new camera!', time: '5h', unread: 5, online: false },
    { id: 4, name: 'Mike Johnson', message: 'Let\'s catch up tomorrow!', time: '1d', unread: 0, online: false },
    { id: 5, name: 'Sarah Williams', message: 'Thanks for the help!', time: '2d', unread: 0, online: false },
  ];

  const messages = [
    { id: 1, sender: 'them', text: 'Hey there!', time: '10:23 AM' },
    { id: 2, sender: 'me', text: 'Hi! How are you?', time: '10:24 AM' },
    { id: 3, sender: 'them', text: 'I\'m good, thanks for asking. Did you see that new post about photography techniques?', time: '10:25 AM' },
    { id: 4, sender: 'me', text: 'No, I haven\'t seen it yet. Can you send me the link?', time: '10:28 AM' },
    { id: 5, sender: 'them', text: 'Sure! Here it is: https://example.com/photography-tips', time: '10:30 AM' },
    { id: 6, sender: 'me', text: 'Thanks! I\'ll check it out.', time: '10:31 AM' },
    { id: 7, sender: 'them', text: 'Let me know what you think. I found it really helpful for improving my night photography.', time: '10:32 AM' },
    { id: 8, sender: 'me', text: 'Will do! I\'ve been wanting to get better at night shots.', time: '10:35 AM' },
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

        {/* Chat interface */}
        <div className="flex-1 flex">
          {/* Chat list */}
          <div className="w-80 border-r border-gray-200 bg-white">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold">Messages</h2>
            </div>
            
            {/* Search chats */}
            <div className="p-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>
            
            {/* Chat list */}
            <div className="divide-y">
              {chats.map((chat) => (
                <div 
                  key={chat.id} 
                  className={`p-4 hover:bg-gray-50 cursor-pointer ${selectedChat === chat.id ? 'bg-gray-100' : ''}`}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                      {chat.online && (
                        <div className="absolute bottom-0 right-3 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="font-medium text-sm truncate">{chat.name}</p>
                        <p className="text-xs text-gray-500">{chat.time}</p>
                      </div>
                      <div className="flex justify-between mt-1">
                        <p className="text-xs text-gray-500 truncate">{chat.message}</p>
                        {chat.unread > 0 && (
                          <span className="bg-red-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat content */}
          {selectedChat ? (
            <div className="flex-1 flex flex-col">
              {/* Chat header */}
              <div className="p-4 border-b border-gray-200 bg-white flex items-center">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div className="absolute bottom-0 right-3 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                </div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                <div className="max-w-3xl mx-auto space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'them' && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 mt-1"></div>
                      )}
                      <div className="max-w-xs">
                        <div 
                          className={`rounded-2xl px-4 py-2 ${
                            message.sender === 'me' 
                              ? 'bg-blue-500 text-white rounded-tr-none' 
                              : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Message input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-5 w-5 text-gray-500" />
                  </Button>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 py-2 px-4 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 mx-2"
                  />
                  <Button variant="ghost" size="icon">
                    <Smile className="h-5 w-5 text-gray-500" />
                  </Button>
                  <Button size="icon" className="rounded-full">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="h-16 w-16 mx-auto text-gray-300" />
                <h3 className="mt-4 text-lg font-medium">Your Messages</h3>
                <p className="mt-2 text-sm text-gray-500">Send private messages to a friend or group</p>
                <Button className="mt-4">Send Message</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ChatPage;
