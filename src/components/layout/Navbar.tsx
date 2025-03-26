
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Search, Compass, Heart, User } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
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
    { label: 'Home', icon: <Home size={22} />, path: '/' },
    { label: 'Search', icon: <Search size={22} />, path: '/search' },
    { label: 'Explore', icon: <Compass size={22} />, path: '/explore' },
    { label: 'Notifications', icon: <Heart size={22} />, path: '/notifications' },
    { label: 'Profile', icon: <User size={22} />, path: '/profile' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-3 px-4 md:px-6 lg:px-8',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">Instagram</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
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
        </nav>
        
        <nav className="md:hidden flex items-center space-x-5">
          {navItems.map(item => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => cn(
                'transition-opacity duration-200 opacity-80 hover:opacity-100',
                isActive ? 'opacity-100' : ''
              )}
            >
              {item.icon}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
