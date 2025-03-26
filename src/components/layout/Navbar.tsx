
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Search, Compass, Heart, User, PlusSquare, MessageSquare, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { label: 'Home', icon: <Home size={20} />, path: '/' },
    { label: 'Search', icon: <Search size={20} />, path: '/search' },
    { label: 'Explore', icon: <Compass size={20} />, path: '/explore' },
    { label: 'Messages', icon: <MessageSquare size={20} />, path: '/chat' },
    { label: 'Notifications', icon: <Heart size={20} />, path: '/notifications' },
    { label: 'Profile', icon: <User size={20} />, path: '/profile' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-2 sm:py-3 px-3 sm:px-4 md:px-6 lg:px-8',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg sm:text-xl font-semibold">
            {isMobile ? 'IG' : 'Instagram'}
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map(item => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => cn(
                'flex items-center gap-2 nav-link transition-opacity duration-200 opacity-80 hover:opacity-100',
                isActive ? 'opacity-100 font-medium' : ''
              )}
            >
              {item.icon}
              <span className="hidden lg:inline text-sm">{item.label}</span>
            </NavLink>
          ))}
          <Button className="flex items-center gap-2 md:ml-2 lg:ml-4">
            <PlusSquare size={20} />
            <span className="hidden lg:inline">Create</span>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 md:hidden pt-16 overflow-y-auto">
            <nav className="flex flex-col items-center space-y-4 p-4 sm:p-6">
              {navItems.map(item => (
                <NavLink 
                  key={item.path} 
                  to={item.path}
                  className={({ isActive }) => cn(
                    'flex items-center gap-3 py-2 w-full max-w-xs justify-center sm:justify-start',
                    isActive ? 'text-black font-medium' : 'text-gray-600'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
              <Button className="mt-4 w-full max-w-xs flex items-center justify-center gap-2">
                <PlusSquare size={20} />
                <span>Create Post</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
