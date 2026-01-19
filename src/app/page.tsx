'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Utensils, Wheat, MapPin, Clock, Sun, Trees, Building2, Users, CheckCircle, Menu, X, Heart, Instagram, Image as ImageIcon, Phone, MessageCircle, ChevronLeft, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const totalImages = 20;

  // Placeholder images
  const placeholderImages = [
    { url: '/placeholder-farm1.jpg', name: 'Farm View 1' },
    { url: '/placeholder-farm2.jpg', name: 'Farm View 2' },
    { url: '/placeholder-villa.jpg', name: 'Mud Villa' },
    { url: '/placeholder-dining.jpg', name: 'Dining Area' },
    { url: '/placeholder-nature.jpg', name: 'Nature Walk' },
    { url: '/placeholder-sunset.jpg', name: 'Sunset View' },
  ];

  const whatsappNumber = '919420479673';
  const whatsappMessage = encodeURIComponent('Hi! I would like to book a stay at The Peepal Farm Stay.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const whatsappNumber2 = '919561590211';
  const whatsappLink2 = `https://wa.me/${whatsappNumber2}?text=${whatsappMessage}`;
  const phoneNumber = '+91 94204 79673';
  const phoneNumber2 = '+91 95615 90211';
  const locationLink = 'https://maps.app.goo.gl/2fS42WFUXTYc91Aj6';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev! > 1 ? prev! - 1 : totalImages));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev! < totalImages ? prev! + 1 : 1));
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, totalImages]);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-green-50">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isScrolled ? 'bg-green-600' : 'bg-white'}`}>
                <Trees className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-green-600'}`} />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>The Peepal</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'about', label: 'About' },
                { id: 'accommodation', label: 'Accommodation' },
                { id: 'food', label: 'Food' },
                { id: 'activities', label: 'Activities' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'founders', label: 'Founders' },
                { id: 'location', label: 'Location' }
              ].map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className={`font-medium transition-colors hover:text-amber-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  {item.label}
                </button>
              ))}
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {[
                { id: 'about', label: 'About' },
                { id: 'accommodation', label: 'Accommodation' },
                { id: 'food', label: 'Food' },
                { id: 'activities', label: 'Activities' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'founders', label: 'Founders' },
                { id: 'location', label: 'Location' }
              ].map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                  {item.label}
                </button>
              ))}
              <Button asChild className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              {/* Animated rotating gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-[2.5rem] blur-3xl opacity-75 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-lime-400 via-green-500 to-emerald-600 rounded-[2.5rem] blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Main container with 3D transform */}
              <div className="relative bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 rounded-[2rem] p-12 shadow-2xl transform perspective-1000 group-hover:scale-110 group-hover:rotate-y-6 transition-all duration-700 ease-out"
                   style={{ 
                     boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(34, 197, 94, 0.1), inset 0 2px 4px 0 rgba(255, 255, 255, 0.6)'
                   }}>
                
                {/* Top shine effect */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-1 -right-3 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-2 -left-3 w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-lime-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Inner frame with gradient border */}
                <div className="relative bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-[1.5rem] p-3 shadow-inner backdrop-blur-sm"
                     style={{ 
                       boxShadow: 'inset 0 2px 8px 0 rgba(34, 197, 94, 0.2), inset 0 0 0 1px rgba(34, 197, 94, 0.1)'
                     }}>
                  
                  {/* Logo with glow effect */}
                  <div className="relative">
                    <img 
                      src="/PHOTO-2026-01-14-21-10-59.jpg" 
                      alt="The Peepal Logo" 
                      className="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-2xl relative z-10"
                      style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))' }}
                    />
                    
                    {/* Radial glow behind logo */}
                    <div className="absolute inset-0 bg-gradient-radial from-green-400/30 via-emerald-400/20 to-transparent blur-xl"></div>
                  </div>
                </div>
                
                {/* Bottom 3D shadow for depth */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-gradient-to-b from-green-600/40 to-transparent rounded-full blur-2xl"></div>
              </div>
              
              {/* Orbiting decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 blur-sm animate-bounce"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-teal-400 to-green-500 rounded-full opacity-60 blur-sm animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">THE PEEPAL</h1>

          <a href={locationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">Nashik, Maharashtra</span>
          </a>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contributing to the drive of eco-friendly Bharat come and enjoy the blissful natural earthen homes... it&apos;s us 🌳
          </p>

          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Book Your Stay</a>
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent"></div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Trees className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Our Farm Stay</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the perfect blend of rustic charm and modern comfort in our eco-friendly mud homes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Leaf className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">100% Natural</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Built entirely with eco-friendly mud construction, promoting sustainable living practices.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Sun className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">Sustainable Living</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Rainwater harvesting, organic farming, and minimal use of plastics for a greener future.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-800">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Participate in eco-conscious activities and learn about sustainable lifestyles with us.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Accommodation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our cozy mud villas or budget-friendly dormitory</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-amber-300 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Building2 className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Mud Villas</h3>
                </div>
                <p className="text-amber-100 mt-2">2 units available</p>
              </div>
              <CardHeader>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-amber-700">₹3,500</span>
                  <span className="text-gray-600">per night</span>
                </div>
                <CardDescription className="text-base text-gray-700">Private, eco-friendly villas built with traditional mud architecture. Ideal for couples, families, or small groups seeking comfort with rustic charm.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Private mud villa with authentic architecture', 'Eco-friendly construction', 'Perfect for couples & families', 'Comfortable rustic charm', 'Peaceful countryside setting'].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Book Mud Villa</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-300 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
                <div className="flex items-center gap-3 text-white">
                  <Users className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Mud Dormitory</h3>
                </div>
                <p className="text-emerald-100 mt-2">Shared accommodation</p>
              </div>
              <CardHeader>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-emerald-700">₹800</span>
                  <span className="text-gray-600">per bed per night</span>
                </div>
                <CardDescription className="text-base text-gray-700">Shared accommodation designed for backpackers, students, and solo travelers. Promotes community living while staying close to nature.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Budget-friendly shared accommodation', 'Community living experience', 'Perfect for backpackers & students', 'Meet like-minded travelers', 'Eco-friendly mud construction'].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Book Dormitory Bed</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-green-800 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sustainable Living</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">Experience eco-friendly living in harmony with nature</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-400/30 bg-white/10 backdrop-blur-sm text-white">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4">
                  <Building2 className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl text-white">Eco-Friendly Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-100 text-lg">Built entirely with eco-friendly mud construction, minimizing environmental impact while providing natural temperature regulation.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-400/30 bg-white/10 backdrop-blur-sm text-white">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4">
                  <Wheat className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl text-white">Organic Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-100 text-lg">Practice sustainable development with rainwater harvesting, organic farming, and minimal use of plastics.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-400/30 bg-white/10 backdrop-blur-sm text-white">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4">
                  <Users className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl text-white">Learn & Participate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-100 text-lg">Guests are encouraged to participate in eco-conscious activities and learn about sustainable lifestyles.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <ImageIcon className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the beauty of our farm stay and live like locals</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
              <div 
                key={num} 
                onClick={() => setLightboxIndex(num)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-gray-100 relative">
                  <Image 
                    src={`/assets/1000236050_convert_${num}.png`}
                    alt={`The Peepal Farm Stay Gallery Image ${num}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Lightbox Modal */}
          {lightboxIndex !== null && (
            <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev! > 1 ? prev! - 1 : totalImages));
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev! < totalImages ? prev! + 1 : 1));
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
              
              <div className="max-w-7xl max-h-[90vh] w-full relative" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={`/assets/1000236050_convert_${lightboxIndex}.png`}
                    alt={`The Peepal Farm Stay Gallery Image ${lightboxIndex}`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-white text-center mt-4 text-lg">
                  Image {lightboxIndex} of {totalImages}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="activities" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Wheat className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Farm Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get hands-on experience with organic farming</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[{
              icon: <Wheat className="w-8 h-8" />,
              title: 'Organic Farming',
              description: 'Hands-on experience with organic farming including planting, harvesting, and learning about local crops.'
            }, {
              icon: <Trees className="w-8 h-8" />,
              title: 'Guided Farm Walks',
              description: 'Guided walks through the farm to understand sustainable agriculture and experience nature up close.'
            }, {
              icon: <Utensils className="w-8 h-8" />,
              title: 'Farm-to-Table Cooking',
              description: 'Opportunity to cook with freshly harvested vegetables and learn traditional recipes from our kitchen.'
            }, {
              icon: <Leaf className="w-8 h-8" />,
              title: 'Sustainability Learning',
              description: 'Learn about sustainable practices, rainwater harvesting, and eco-friendly living from our experienced team.'
            }].map((activity, index) => (
              <Card key={index} className="border-2 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-4 text-green-700">
                    {activity.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-800">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="food" className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Utensils className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Food Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the authentic taste of traditional Indian farm cuisine cooked with love and care</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-800 flex items-center gap-3 mb-4">
                  <Utensils className="w-8 h-8 text-amber-600" />
                  Traditional Clay Stove Cooking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 text-xl leading-relaxed">
                  At our farm stay, food is prepared in the most authentic and traditional way—cooked on direct fire using clay stoves and firewood, which gives every dish a rich, smoky flavor and preserves its natural nutrients.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/60 rounded-xl p-5 border border-amber-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Wheat className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-lg text-gray-800">Farm-Fresh Ingredients</h4>
                    </div>
                    <p className="text-gray-600">All ingredients come straight from our fields, ensuring that vegetables are fresh, pure, and free from chemicals or pesticides.</p>
                  </div>

                  <div className="bg-white/60 rounded-xl p-5 border border-amber-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Sun className="w-6 h-6 text-amber-600" />
                      <h4 className="font-bold text-lg text-gray-800">Seasonal & Local</h4>
                    </div>
                    <p className="text-gray-600">Meals are crafted with seasonal produce, locally sourced grains, and traditional spices, making each plate wholesome and deeply connected to the land.</p>
                  </div>
                </div>

                <div className="bg-white/60 rounded-xl p-5 border border-amber-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-6 h-6 text-amber-600" />
                    <h4 className="font-bold text-lg text-gray-800">Complete Dining Experience</h4>
                  </div>
                  <p className="text-gray-600">Guests can enjoy hearty breakfasts, slow-cooked lunches, and soulful dinners that reflect rural traditions, while also experiencing the joy of cooking with freshly harvested vegetables. Dining here is not just about eating—it is about savoring purity, tradition, and the warmth of food made with care.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="founders" className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About the Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the visionaries behind our sustainable farm stay</p>
          </div>
          
          {/* Hosts Features */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <HomeIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Live Onsite Experience</h3>
                <p className="text-gray-600 text-lg">Hosts live onsite with farm animals, offering authentic farm life immersion and personalized hospitality</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-amber-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Communal Dining</h3>
                <p className="text-gray-600 text-lg">Share meals and stories with guests at a communal dining hall, creating warm connections and memorable moments</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-emerald-300 overflow-visible bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col items-center pt-8 pb-4">
                <div className="relative w-48 h-48 mb-4">
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-emerald-400 shadow-xl bg-emerald-50">
                    <Image 
                      src="/assets/Sunita.jpeg" 
                      alt="Dr. Sunita Jha" 
                      fill
                      className="object-contain"
                      sizes="200px"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">Dr. Sunita Jha</h3>
                <p className="text-emerald-600 text-lg flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌿</span> Ayurvedic Doctor
                </p>
              </div>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  An Ayurvedic doctor by profession, Sunita brings with her a deep understanding of holistic living and natural wellness. Her passion for this farm stay project stems from a lifelong belief that true health comes from harmony with nature. By combining her medical expertise with sustainable practices, she envisions the farm stay as a place where guests can not only relax but also reconnect with traditional ways of living—through authentic food, eco-friendly mud houses, and mindful farm activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-300 overflow-visible bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col items-center pt-8 pb-4">
                <div className="relative w-48 h-48 mb-4">
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl bg-amber-50">
                    <Image 
                      src="/assets/Aditya.jpeg" 
                      alt="Aditya Kumar" 
                      fill
                      className="object-cover object-right"
                      sizes="200px"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">Aditya Kumar</h3>
                <p className="text-amber-600 text-lg flex items-center gap-2 mb-4">
                  <span className="text-2xl">🌳</span> Engineer by Training
                </p>
              </div>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  An engineer by training, Aditya&apos;s first love has always been nature. His technical background helps bring structure and innovation to the project, while his passion ensures that every detail reflects respect for the environment. For Aditya, this farm stay is more than accommodation—it is a movement towards sustainable living, where guests can experience the joy of simplicity and the richness of rural life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-emerald-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Location & Accessibility</h2>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <a href={locationLink} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-5 h-5 mr-2" />
                  View on Google Maps
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Serene Countryside</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Situated in a peaceful countryside setting, away from the noise and pollution of city life.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Easy Road Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Easily accessible by road with ample parking available for your vehicles.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Perfect Weekend Getaway</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The perfect destination for weekend relaxation and cultural immersion in rural Maharashtra.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Clock className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Check-in & Check-out</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-800">Check-in Time</CardTitle>
                    <p className="text-3xl font-bold text-amber-700 mt-1">12:00 PM</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Early check-in available on request, subject to availability. Contact us in advance to arrange.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-full text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-800">Check-out Time</CardTitle>
                    <p className="text-3xl font-bold text-emerald-700 mt-1">10:00 AM</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Late check-out available on request, subject to availability. Please ask at the front desk.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="mt-auto bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">THE PEEPAL</h3>
              <p className="text-gray-400 leading-relaxed">Contributing to the drive of eco-friendly Bharat. Experience blissful natural earthen homes at Nashik.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-4">
                <a href={locationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span>Nashik, Maharashtra</span>
                </a>
                <p className="text-gray-400">Perfect weekend getaway for relaxation and cultural immersion.</p>
                
                <div className="space-y-3 pt-2">
                  <a href="https://www.instagram.com/thepeepal_its_us/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Instagram className="w-5 h-5" />
                    <span className="font-medium">Follow on Instagram</span>
                  </a>

                  <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">{phoneNumber}</span>
                  </a>
                  
                  <a href={`tel:${phoneNumber2}`} className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">{phoneNumber2}</span>
                  </a>

                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp: {phoneNumber}</span>
                  </a>
                  
                  <a href={whatsappLink2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp: {phoneNumber2}</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#accommodation" className="hover:text-white transition-colors">Accommodation</a></li>
                <li><a href="#food" className="hover:text-white transition-colors">Food</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#activities" className="hover:text-white transition-colors">Activities</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>Copyright 2025 The Peepal. All rights reserved.</p>
            <p className="mt-2 text-sm">Experience sustainable living in nature&apos;s lap 🌿</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
