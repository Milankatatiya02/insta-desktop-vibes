
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import ImageGrid from '@/components/ui/ImageGrid';
import FadeInSection from '@/components/ui/FadeInSection';
import { cn } from '@/lib/utils';

const Index = () => {
  // Sample images for the grid
  const images = [
    { 
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80', 
      alt: 'Woman using laptop' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80', 
      alt: 'Laptop on desk' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', 
      alt: 'Woman with laptop' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80', 
      alt: 'Laptop on desk' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80', 
      alt: 'Person using laptop' 
    },
    { 
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', 
      alt: 'Code on screen' 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="pt-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <FadeInSection direction="left">
                <div className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full mb-4">
                  Share your moments
                </div>
              </FadeInSection>
              
              <FadeInSection direction="left" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
                  Capture and share the world's moments
                </h1>
              </FadeInSection>
              
              <FadeInSection direction="left" delay={400}>
                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                  A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.
                </p>
              </FadeInSection>
              
              <FadeInSection direction="left" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-black/90 transition-colors">
                    Download the app
                  </button>
                  <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    Learn more
                  </button>
                </div>
              </FadeInSection>
            </div>
            
            <div className="w-full md:w-1/2">
              <FadeInSection direction="right" delay={300}>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white rounded-lg overflow-hidden subtle-shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" 
                      alt="Instagram App"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </section>
          
          {/* Featured Section */}
          <section className="py-16 md:py-24">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Explore trending content</h2>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Discover photos and videos from creators around the world
              </p>
            </FadeInSection>
            
            <ImageGrid images={images} className="mt-8" />
          </section>
          
          {/* Features Section */}
          <section className="py-16 md:py-24">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">Why people love our platform</h2>
            </FadeInSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Share with Friends",
                  description: "Connect with friends and share your favorite moments instantly",
                  delay: 100
                },
                {
                  title: "Discover Content",
                  description: "Explore and discover content from creators around the world",
                  delay: 300
                },
                {
                  title: "Create Stories",
                  description: "Create and share stories that disappear after 24 hours",
                  delay: 500
                }
              ].map((feature, i) => (
                <FadeInSection key={i} delay={feature.delay}>
                  <div className="glass-card rounded-xl p-6 h-full">
                    <div className="h-12 w-12 bg-black text-white rounded-md flex items-center justify-center mb-4">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 md:py-24">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
              <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 text-center">
                <FadeInSection>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to get started?</h2>
                </FadeInSection>
                
                <FadeInSection delay={200}>
                  <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                    Join millions of people who organize work and life with our app.
                  </p>
                </FadeInSection>
                
                <FadeInSection delay={400}>
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
                    Download now
                  </button>
                </FadeInSection>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold">Instagram</h2>
              <p className="text-gray-600 mt-2">Share your moments with the world</p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              {["About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms", "Locations"].map((link, i) => (
                <a key={i} href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Instagram. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
