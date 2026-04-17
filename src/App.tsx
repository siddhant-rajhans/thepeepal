import { useEffect, useState, type MouseEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  Moon, Sun, MapPin, Phone,
  ArrowRight, Star, Clock, Car, Check,
  MessageCircle, Instagram, X, Menu, ChevronLeft, ChevronRight, ChevronDown,
  Home, Coffee, Laptop, Trees, Sparkles
} from 'lucide-react';
import { OptimizedImage } from './components/optimized-image';
import './App.css';

// Contact constants
const WHATSAPP_NUMBER = '919420479673';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi! I would like to book a stay at The Peepal Farm Stay.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const PHONE_NUMBER = '+91 94204 79673';
const PHONE_NUMBER_2 = '+91 95615 90211';
const LOCATION_LINK = 'https://maps.app.goo.gl/2fS42WFUXTYc91Aj6';
const INSTAGRAM_LINK = 'https://www.instagram.com/thepeepal_its_us/';

const RESPONSIVE_WIDTHS = [480, 768, 1200];
const OPTIMIZED_BASE_NAMES = new Set([
  'PHOTO-2026-01-14-21-10-59',
  'gallery-1',
  'gallery-3',
  'gallery-4',
  'gallery-5',
  'gallery-6',
  'gallery-7',
  'gallery-8',
  'gallery-9',
  'gallery-10',
  'gallery-11',
  'gallery-12',
  'mud-dormitory',
  'founder',
  '1000236050_convert_2',
  '1000236050_convert_3',
  '1000236050_convert_6',
  '1000236050_convert_7',
  '1000236050_convert_8',
  '1000236050_convert_9',
  '1000236050_convert_10',
]);

type ResponsiveImageSources = {
  avifSrcSet?: string;
  webpSrcSet?: string;
  sizes?: string;
};

function getResponsiveImageSources(src: string, sizes: string): ResponsiveImageSources {
  const base = src.split('/').pop()?.replace(/\.[^.]+$/, '');

  if (!base || !OPTIMIZED_BASE_NAMES.has(base)) {
    return { sizes };
  }

  const avifSrcSet = RESPONSIVE_WIDTHS.map((width) => `/images/optimized/${base}-${width}.avif ${width}w`).join(', ');
  const webpSrcSet = RESPONSIVE_WIDTHS.map((width) => `/images/optimized/${base}-${width}.webp ${width}w`).join(', ');

  return { avifSrcSet, webpSrcSet, sizes };
}

// Gallery images
const GALLERY_IMAGES = [
  { src: '/images/gallery-1.webp', alt: 'The Peepal Farm Stay main entrance with traditional mud architecture and natural landscaping in Nashik' },
  { src: '/images/1000236050_convert_8.webp', alt: 'Eco-friendly mud farmhouse exterior showcasing sustainable earthen construction techniques' },
  { src: '/images/gallery-3.webp', alt: 'Cozy mud villa interior room with traditional decor at The Peepal Farm Stay' },
  { src: '/images/1000236050_convert_10.webp', alt: 'Private eco-friendly mud villa accommodation with rustic charm and modern comfort' },
  { src: '/images/mud-dormitory.jpeg', alt: 'Budget-friendly mud dormitory with sustainable construction for backpackers and groups' },
  { src: '/images/1000236050_convert_9.webp', alt: 'Hands-on organic farming activities and agricultural experiences for guests' },
  { src: '/images/1000236050_convert_7.webp', alt: 'Traditional clay stove kitchen cooking farm-to-table meals with organic ingredients' },
  { src: '/images/gallery-5.jpg', alt: 'Farm fresh organic meal prepared with locally sourced vegetables and traditional recipes' },
  { src: '/images/1000236050_convert_6.webp', alt: 'Organic vegetable garden with sustainable farming practices and rainwater harvesting' },
  { src: '/images/gallery-4.jpg', alt: 'Guided nature walk through farm trails and countryside surrounding The Peepal Farm Stay' },
  { src: '/images/founder.jpg', alt: 'The Peepal Farm Stay founders working in organic farming fields demonstrating sustainable agriculture' },
  { src: '/images/gallery-6.jpg', alt: 'Peaceful farm landscape at sunset showcasing rural beauty near Nashik Maharashtra' },
  { src: '/images/gallery-7.jpg', alt: 'Guest experience and relaxation space at The Peepal Farm Stay retreat center' },
  { src: '/images/gallery-8.jpg', alt: 'Community gathering and social activities at The Peepal sustainable farm stay' },
  { src: '/images/gallery-9.jpg', alt: 'Outdoor seating and meditation area surrounded by nature at The Peepal Farm Stay' },
  { src: '/images/gallery-10.jpg', alt: 'Traditional décor and rustic interior design at The Peepal eco-lodge Nashik' },
  { src: '/images/gallery-11.jpg', alt: 'Scenic views and landscape photography from The Peepal Farm Stay grounds' },
  { src: '/images/gallery-12.jpg', alt: 'Evening activities and bonfire gathering area at The Peepal Farm Stay' },
];

// Navigation Component
function Navigation({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (v: boolean) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Rooms', path: '/#stay' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Location', path: '/#location' },
  ];

  const handleNav = (path: string) => {
    setMenuOpen(false);
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const id = path.replace('/#', '');
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const id = path.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border/50">
        <button onClick={() => handleNav('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
            <OptimizedImage
              src="/PHOTO-2026-01-14-21-10-59.jpg"
              alt="The Peepal Logo"
              className="w-full h-full object-cover scale-[1.5]"
              loading="eager"
              fetchPriority="high"
              {...getResponsiveImageSources('/PHOTO-2026-01-14-21-10-59.jpg', '48px')}
            />
          </div>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest font-medium">
            The Peepal
          </span>
        </button>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.path)}
              className="text-sm font-medium hover:text-[#C8A45C] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* WhatsApp Button - Desktop */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full text-sm font-medium hover:bg-[#128C7E] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          
          {/* WhatsApp Icon - Mobile */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden p-2 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-background border border-border hover:bg-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          {/* Hamburger Menu - Hidden on Desktop */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-full bg-background border border-border hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col">
          <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 border-b border-border/50">
            <span className="font-mono text-sm uppercase tracking-widest">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="p-2 rounded-full hover:bg-accent transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6 p-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.path)}
                className="heading-display text-2xl md:text-4xl hover:text-[#C8A45C] transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-border/50 w-full max-w-xs">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>
              
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-medium w-full justify-center"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#0E3A2F] py-12 md:py-16">
      <div className="px-4 md:px-[6vw]">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                  <OptimizedImage
                    src="/PHOTO-2026-01-14-21-10-59.jpg"
                    alt="The Peepal Logo"
                    className="w-full h-full object-cover scale-[1.5]"
                    loading="lazy"
                    {...getResponsiveImageSources('/PHOTO-2026-01-14-21-10-59.jpg', '48px')}
                  />
              </div>
              <span className="font-mono text-lg uppercase tracking-widest text-white">
                The Peepal
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Eco-friendly mud homes in Nashik, Maharashtra. Experience sustainable living 
              with organic farming and farm-to-table meals.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full hover:opacity-90 transition-opacity"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={LOCATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                aria-label="View on Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#stay" className="text-white/70 hover:text-[#C8A45C] transition-colors">Rooms</a></li>
              <li><a href="/#experience" className="text-white/70 hover:text-[#C8A45C] transition-colors">Experience</a></li>
              <li><a href="/#food" className="text-white/70 hover:text-[#C8A45C] transition-colors">Food</a></li>
              <li><a href="/gallery" className="text-white/70 hover:text-[#C8A45C] transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-white/70 hover:text-[#C8A45C] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER_2}`} className="flex items-center gap-2 text-white/70 hover:text-[#C8A45C] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_NUMBER_2}</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            Contributing to the drive of eco-friendly Bharat 🌳
          </p>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} The Peepal Farm Stay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Gallery Page
function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-[#F4F1EA] dark:bg-[#0a1f19] pt-20 md:pt-24">
      <div className="px-4 md:px-[6vw] py-8 md:py-12">
        <h1 className="heading-display text-3xl md:text-5xl mb-4">Photo Gallery</h1>
        <p className="text-muted-foreground mb-8 md:mb-12 max-w-2xl">
          Discover the beauty of our farm stay through these images. Click on any image to view it in full size.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg image-card"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                {...getResponsiveImageSources(image.src, '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw')}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 p-3 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 p-3 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div 
            className="max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={GALLERY_IMAGES[currentImage].src}
              alt={GALLERY_IMAGES[currentImage].alt}
              loading="eager"
              className="max-w-full max-h-[85vh] object-contain"
              {...getResponsiveImageSources(GALLERY_IMAGES[currentImage].src, '90vw')}
            />
            <p className="text-white/80 text-center mt-4 text-sm md:text-base">
              {GALLERY_IMAGES[currentImage].alt}
            </p>
            <p className="text-white/50 text-center mt-2 text-sm">
              {currentImage + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Facilities Page Component
const FACILITIES = [
  {
    id: 'mudhouse',
    icon: Home,
    eyebrow: 'Events & Workshops',
    title: 'The Mudhouse',
    tagline: 'An earthen hall built for gathering.',
    description: 'Our naturally-cooled mud hall is where ideas take shape. Built with traditional earth techniques and tuned for acoustics, it hosts everything from intimate retreats to 50-person workshops.',
    image: '/images/gallery-8.jpg',
    alt: 'Mudhouse event and workshop space with traditional earth architecture at The Peepal Farm Stay',
    stats: [
      { label: 'Capacity', value: 'Up to 50' },
      { label: 'Cooling', value: 'Natural' },
      { label: 'Setup', value: 'Flexible' },
    ],
    features: [
      'Naturally cooled mud architecture',
      'Built-in natural acoustics',
      'Seats up to 50 comfortably',
      'WiFi & power throughout',
      'Perfect for workshops & seminars',
      'Flexible setup for your needs',
    ],
    cta: 'Book the Mudhouse',
  },
  {
    id: 'cafe',
    icon: Coffee,
    eyebrow: 'Dine & Gather',
    title: 'Community Cafe',
    tagline: 'Farm-to-table, cooked over fire.',
    description: 'Our clay-stove kitchen serves meals built around whatever the farm yields that morning. Open to guests, workshop attendees, and visitors who stop in for chai.',
    image: '/images/1000236050_convert_7.webp',
    alt: 'Traditional clay stove kitchen serving farm-to-table meals at The Peepal community cafe',
    stats: [
      { label: 'Style', value: 'Farm-to-table' },
      { label: 'Stove', value: 'Wood-fired' },
      { label: 'Diets', value: 'Veg & vegan' },
    ],
    features: [
      'Farm-fresh organic ingredients',
      'Traditional clay stove cooking',
      'Vegetarian & vegan options',
      'Regional & contemporary cuisine',
      'Coffee, chai & fresh beverages',
      'Group meals & catering',
    ],
    cta: 'Reserve the Cafe',
  },
  {
    id: 'coworking',
    icon: Laptop,
    eyebrow: 'Work Remotely',
    title: 'Co-working Nooks',
    tagline: 'Work with a view of the farm.',
    description: 'Quiet corners, open-air verandas, and shared tables. High-speed WiFi throughout. Pay by the hour, by the day, or settle in for a week and let the rhythm of the farm set your pace.',
    image: '/images/gallery-11.jpg',
    alt: 'Peaceful co-working area with farm views and natural light at The Peepal Farm Stay',
    stats: [
      { label: 'WiFi', value: 'High-speed' },
      { label: 'Power', value: 'Every seat' },
      { label: 'Rates', value: 'Hourly / Daily' },
    ],
    features: [
      'High-speed WiFi throughout',
      'Peaceful work environment',
      'Flexible hourly & daily rates',
      'Power outlets at every seat',
      'Indoor & outdoor options',
      'Fresh meals a few steps away',
    ],
    cta: 'Reserve a Desk',
  },
  {
    id: 'activities',
    icon: Trees,
    eyebrow: 'Experience the Farm',
    title: 'Activities & Retreats',
    tagline: 'Slow down, learn something new.',
    description: 'Guided nature walks, sunrise yoga, bonfire evenings, and hands-on agricultural workshops. Every activity is built around the farm and the people who keep it running.',
    image: '/images/gallery-12.jpg',
    alt: 'Evening activities and bonfire gathering area at The Peepal Farm Stay',
    stats: [
      { label: 'Guided by', value: 'Farm hosts' },
      { label: 'Group size', value: '1 – 30' },
      { label: 'Availability', value: 'Year-round' },
    ],
    features: [
      'Guided farm tours',
      'Yoga & meditation sessions',
      'Bonfire gatherings',
      'Nature walks & birding',
      'Agricultural workshops',
      'Custom retreats available',
    ],
    cta: 'Plan Your Retreat',
  },
];

function FacilitiesPage() {
  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] dark:bg-[#0a1f19]">
      {/* Hero Banner */}
      <section className="relative h-[70vh] md:h-[80vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/gallery-8.jpg"
            alt="The Peepal Farm Stay facilities — mudhouse, cafe, and co-working spaces"
            className="w-full h-full object-cover scale-105"
            loading="eager"
            fetchPriority="high"
            {...getResponsiveImageSources('/images/gallery-8.jpg', '100vw')}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#F4F1EA] dark:to-[#0a1f19]" />
        </div>
        <div className="relative h-full flex items-end pb-16 md:pb-24">
          <div className="px-4 md:px-[6vw] w-full max-w-5xl">
            <span className="label-mono text-[#C8A45C] text-xs md:text-sm block mb-3 md:mb-4">
              Spaces for humans
            </span>
            <h1 className="heading-display text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(3.5rem,7vw,6.5rem)] text-white mb-4 md:mb-6 leading-[0.9]">
              Our<br />
              <span className="text-[#C8A45C]">Facilities</span>
            </h1>
            <p className="text-white/85 max-w-2xl text-base md:text-lg leading-relaxed">
              Four thoughtfully-designed spaces for work, rest, community, and practice — each built with the same philosophy: slow, simple, close to the land.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Quick Nav */}
      <nav className="sticky top-16 md:top-20 z-30 bg-[#F4F1EA]/95 dark:bg-[#0a1f19]/95 backdrop-blur-md border-y border-border/50">
        <div className="px-4 md:px-[6vw]">
          <div className="flex gap-2 md:gap-3 overflow-x-auto py-3 md:py-4 scrollbar-hide">
            {FACILITIES.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                onClick={(e) => handleAnchorClick(e, f.id)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-background border border-border hover:bg-[#C8A45C]/10 hover:border-[#C8A45C] transition-colors whitespace-nowrap text-xs md:text-sm font-medium"
              >
                <f.icon className="w-4 h-4 text-[#C8A45C]" />
                <span>{f.title}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Facility Sections */}
      {FACILITIES.map((f, i) => {
        const Icon = f.icon;
        const isReversed = i % 2 === 1;
        return (
          <section
            key={f.id}
            id={f.id}
            className={`relative py-16 md:py-24 scroll-mt-32 md:scroll-mt-40 ${i % 2 === 1 ? 'bg-white/30 dark:bg-black/10' : ''}`}
          >
            <div className="px-4 md:px-[6vw]">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] md:aspect-[5/4] rounded-lg overflow-hidden image-card ${
                    isReversed ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <OptimizedImage
                    src={f.image}
                    alt={f.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    {...getResponsiveImageSources(f.image, '(max-width: 768px) 100vw, 45vw')}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4F1EA]/90 dark:bg-[#0a1f19]/90 backdrop-blur-sm">
                    <Icon className="w-4 h-4 text-[#C8A45C]" />
                    <span className="label-mono text-[10px] md:text-xs">{f.eyebrow}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={isReversed ? 'md:order-1' : 'md:order-2'}>
                  <h2 className="heading-display text-3xl md:text-5xl mb-3 md:mb-4 leading-[0.95]">
                    {f.title}
                  </h2>
                  <p className="text-[#C8A45C] font-medium text-base md:text-lg mb-4 md:mb-6 italic">
                    {f.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    {f.description}
                  </p>

                  {/* Stats strip */}
                  <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border">
                    {f.stats.map((s) => (
                      <div key={s.label}>
                        <div className="heading-display text-lg md:text-2xl text-[#C8A45C] leading-tight">
                          {s.value}
                        </div>
                        <div className="label-mono text-[10px] md:text-xs text-muted-foreground mt-1">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Feature grid */}
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-3 mb-6 md:mb-8">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-[#C8A45C] flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-muted-foreground leading-snug">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {f.cta}
                  </a>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/gallery-6.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            {...getResponsiveImageSources('/images/gallery-6.jpg', '100vw')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3A2F]/95 via-[#0E3A2F]/85 to-[#0E3A2F]/70" />
        </div>
        <div className="relative px-4 md:px-[6vw] py-20 md:py-32">
          <div className="max-w-2xl">
            <span className="label-mono text-[#C8A45C] text-xs md:text-sm flex items-center gap-2 mb-3 md:mb-4">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Build something together
            </span>
            <h2 className="heading-display text-3xl md:text-5xl text-white mb-4 md:mb-6 leading-[0.95]">
              Planning a retreat,<br />
              <span className="text-[#C8A45C]">workshop,</span> or offsite?
            </h2>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-xl">
              We build custom packages around your group — from a half-day workshop in the mudhouse to a week-long retreat with meals, activities, and stay included. Tell us what you have in mind and we'll put together a plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-mono text-sm uppercase tracking-wider rounded-sm hover:bg-white/10 hover:border-white/60 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Section 1: Hero */}
      <section className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-10 md:min-h-screen md:pb-20">
        {/* Mobile: natural flex flow | Desktop: keeps absolute layout */}
        <div className="flex flex-col gap-6 px-4 pt-24 pb-12 md:block md:p-0">
          {/* Location label */}
          <div className="label-mono text-muted-foreground text-xs md:text-sm md:absolute md:left-[6vw] md:top-[12vh]">
            Nashik, Maharashtra
          </div>

          {/* Image */}
          <div className="w-full h-[42vh] rounded-lg overflow-hidden image-card md:absolute md:left-[6vw] md:top-[15vh] md:w-[52vw] md:h-[58vh]">
            <OptimizedImage
              src="/images/gallery-1.webp"
              alt="The Peepal Farm Stay eco-friendly mud villa entrance with natural landscaping in Nashik Maharashtra"
              className="w-full h-full object-cover scale-110"
              loading="eager"
              fetchPriority="high"
              {...getResponsiveImageSources('/images/gallery-1.webp', '(max-width: 768px) 92vw, 52vw')}
            />
          </div>

          {/* Logo - Desktop only */}
          <div className="hidden md:block absolute right-[10vw] top-[16vh] w-[11vw] aspect-square hero-leaf opacity-60">
            <div className="w-full h-full rounded-full overflow-hidden">
              <OptimizedImage
                src="/PHOTO-2026-01-14-21-10-59.jpg"
                alt="The Peepal Logo"
                className="w-full h-full object-cover scale-[1.5]"
                loading="eager"
                {...getResponsiveImageSources('/PHOTO-2026-01-14-21-10-59.jpg', '(max-width: 768px) 20vw, 11vw')}
              />
            </div>
          </div>

          {/* Headline */}
          <div className="md:absolute md:left-auto md:right-[15vw] md:top-[24vh]">
            <span className="heading-display text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(3rem,5vw,5rem)] block leading-[0.9]">The</span>
            <span className="heading-display text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(3rem,5vw,5rem)] block leading-[0.9]">Peepal</span>
            <span className="heading-display text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(3rem,5vw,5rem)] block text-[#C8A45C] leading-[0.9]">Farm Stay</span>
          </div>

          {/* Subtext */}
          <div className="md:absolute md:left-auto md:right-[6vw] md:top-[48vh] md:w-[32vw]">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Eco-friendly mud homes in the heart of Maharashtra. Experience sustainable living in harmony with nature.
            </p>
          </div>

          {/* CTA */}
          <div className="md:absolute md:left-auto md:right-[15vw] md:top-[58vh]">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Book on WhatsApp
            </a>
          </div>

          {/* Scroll Indicator - Desktop only */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-12 flex-col items-center gap-2 z-10">
            <span className="label-mono text-muted-foreground text-xs">Scroll</span>
            <div>
              <ChevronDown className="w-5 h-5 text-[#C8A45C]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Welcome */}
      <section className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-20">
        <div className="flex flex-col gap-6 px-4 py-12 md:block md:p-0">
          <div className="w-full h-[32vh] image-card md:absolute md:left-[6vw] md:top-[18vh] md:w-[46vw] md:h-[64vh]">
            <OptimizedImage
              src="/images/1000236050_convert_8.webp"
              alt="Traditional mud farmhouse exterior at The Peepal Farm Stay with eco-friendly architecture"
              className="w-full h-full object-cover"
              loading="lazy"
              {...getResponsiveImageSources('/images/1000236050_convert_8.webp', '(max-width: 768px) 92vw, 46vw')}
            />
          </div>
          <div className="hidden md:block absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] paper-card" />
          <div className="md:absolute md:left-[58vw] md:top-[24vh] md:w-[32vw]">
            <h2 className="heading-display text-[clamp(1.8rem,6vw,3rem)] md:text-[clamp(2rem,3vw,3rem)]">
              Welcome to Our Farm Stay
            </h2>
          </div>
          <div className="md:absolute md:left-[58vw] md:top-[42vh] md:w-[32vw]">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Experience the perfect blend of rustic charm and modern comfort. Our eco-friendly mud homes
              are built to stay cool, breathe easy, and help you slow down and reconnect with nature.
            </p>
          </div>
          <div className="md:absolute md:left-[58vw] md:top-[58vh]">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Explore on WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Stay & Philosophy */}
      <section id="stay" className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-30">
        <div className="flex flex-col gap-6 px-4 py-12 md:block md:p-0">
          <div className="w-full h-[32vh] image-card md:absolute md:left-[6vw] md:top-[18vh] md:w-[46vw] md:h-[64vh]">
            <OptimizedImage
              src="/images/gallery-3.webp"
              alt="Cozy eco-friendly mud villa interior room at The Peepal Farm Stay Nashik"
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ objectPosition: 'center 30%' }}
              {...getResponsiveImageSources('/images/gallery-3.webp', '(max-width: 768px) 92vw, 46vw')}
            />
          </div>
          <div className="hidden md:block absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] paper-card" />
          <div className="md:absolute md:left-[58vw] md:top-[28vh] md:w-[32vw]">
            <h2 className="heading-display text-[clamp(2rem,7vw,3.5rem)] md:text-[clamp(2.5rem,3.5vw,3.5rem)]">
              Stay With Us<br />
              <span className="text-[#C8A45C]">And Live Green</span>
            </h2>
          </div>
          <div className="md:absolute md:left-[58vw] md:top-[38vh] md:w-[32vw]">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              We use rainwater harvesting, organic farming, and minimal plastic. When you stay here,
              you support a cleaner, quieter way of life rooted in sustainability.
            </p>
          </div>
          <div className="space-y-2 md:space-y-3 md:absolute md:left-[58vw] md:top-[48vh]">
            {['Mud villas & dorms', 'Farm-to-table meals', 'Guided farm walks'].map((item) => (
              <div key={item} className="flex items-center gap-2 md:gap-3">
                <Check className="w-3 h-3 md:w-4 md:h-4 text-[#C8A45C]" />
                <span className="label-mono text-muted-foreground text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Experience */}
      <section id="experience" className="relative bg-[#F4F1EA] dark:bg-[#0a1f19] py-16 md:py-20 z-40">
        <div className="px-4 md:px-[6vw]">
          <div className="w-full h-[30vh] md:h-[46vh] image-card mb-8 md:mb-12">
            <OptimizedImage
              src="/images/1000236050_convert_9.webp"
              alt="Organic farming activities and agricultural experiences at The Peepal Farm Stay"
              className="w-full h-full object-cover"
              loading="lazy"
              {...getResponsiveImageSources('/images/1000236050_convert_9.webp', '(max-width: 768px) 100vw, 88vw')}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="heading-display text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,4vw,4rem)] mb-4 md:mb-6">
                The Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Start the day with a farm walk. Help in the fields. Eat food cooked on fire. 
                Sleep early. Wake up to birds. This is life at The Peepal—simple, intentional, 
                and deeply connected to the land.
              </p>
            </div>
            <div className="paper-card p-4 md:p-6">
              <OptimizedImage
                src="/images/gallery-4.jpg"
                alt="Afternoon chai under trees nature walk experience at The Peepal sustainable farm stay"
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
                loading="lazy"
                {...getResponsiveImageSources('/images/gallery-4.jpg', '(max-width: 768px) 100vw, 45vw')}
              />
              <p className="label-mono text-muted-foreground text-xs md:text-sm">Afternoon chai under the trees</p>
            </div>
          </div>

          {/* Accommodation Cards */}
          <div className="mt-12 md:mt-20">
            <h3 className="heading-display text-xl md:text-2xl mb-6 md:mb-8">Choose Your Stay</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Mud Villa */}
              <div className="paper-card overflow-hidden">
                <OptimizedImage
                  src="/images/1000236050_convert_10.webp"
                  alt="Private eco-friendly mud villa accommodation with traditional architecture at The Peepal Farm Stay Nashik"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  {...getResponsiveImageSources('/images/1000236050_convert_10.webp', '(max-width: 768px) 100vw, 45vw')}
                />
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div>
                      <h4 className="heading-display text-lg md:text-xl mb-1">Mud Villas</h4>
                      <span className="label-mono text-[#C8A45C] text-xs">2 units available</span>
                    </div>
                    <div className="text-right">
                      <span className="heading-display text-xl md:text-2xl text-[#C8A45C]">₹3,500</span>
                      <span className="label-mono text-muted-foreground block text-xs">per night</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">
                    Private, eco-friendly villas built with traditional mud architecture. 
                    Ideal for couples, families, or small groups.
                  </p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book on WhatsApp
                  </a>
                </div>
              </div>

              {/* Mud Dormitory */}
              <div className="paper-card overflow-hidden">
                <OptimizedImage
                  src="/images/mud-dormitory.jpeg"
                  alt="Budget-friendly mud dormitory accommodation with sustainable earthen construction"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  {...getResponsiveImageSources('/images/mud-dormitory.jpeg', '(max-width: 768px) 100vw, 45vw')}
                />
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div>
                      <h4 className="heading-display text-lg md:text-xl mb-1">Mud Dormitory</h4>
                      <span className="label-mono text-[#C8A45C] text-xs">Shared accommodation</span>
                    </div>
                    <div className="text-right">
                      <span className="heading-display text-xl md:text-2xl text-[#C8A45C]">₹800</span>
                      <span className="label-mono text-muted-foreground block text-xs">per bed</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">
                    Shared accommodation for backpackers, students, and solo travelers. 
                    Community living close to nature.
                  </p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Food & Fire */}
      <section id="food" className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-50">
        <div className="flex flex-col gap-6 px-4 py-12 md:block md:p-0">
          <div className="w-full h-[32vh] image-card md:absolute md:left-[6vw] md:top-[18vh] md:w-[46vw] md:h-[64vh]">
            <OptimizedImage
              src="/images/1000236050_convert_7.webp"
              alt="Traditional clay stove farm-to-table cooking at The Peepal organic farm stay"
              className="w-full h-full object-cover"
              loading="lazy"
              {...getResponsiveImageSources('/images/1000236050_convert_7.webp', '(max-width: 768px) 92vw, 46vw')}
            />
          </div>
          <div className="hidden md:block absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] paper-card" />
          <div className="md:absolute md:left-[58vw] md:top-[24vh] md:w-[32vw]">
            <h2 className="heading-display text-[clamp(1.8rem,6vw,3rem)] md:text-[clamp(2rem,3vw,3rem)]">
              Food Cooked<br />
              <span className="text-[#C8A45C]">With Fire</span><br />
              And Love
            </h2>
          </div>
          <div className="md:absolute md:left-[58vw] md:top-[48vh] md:w-[32vw]">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Most meals come from the farm. Spices are local. Recipes are traditional.
              The stove is wood-fired—and the flavor is real.
            </p>
          </div>
          <div className="md:absolute md:left-[58vw] md:top-[62vh] md:w-[32vw]">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm md:text-base">
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask about meals
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Hosts */}
      <section id="hosts" className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-[60]">
        <div className="flex flex-col gap-6 px-4 py-12 md:block md:p-0">
          <div className="w-full h-[32vh] image-card md:absolute md:left-[6vw] md:top-[18vh] md:w-[46vw] md:h-[64vh]">
            <OptimizedImage
              src="/images/founder.jpg"
              alt="The Peepal Farm Stay founders in organic farming field practicing sustainable agriculture"
              className="w-full h-full object-cover"
              loading="lazy"
              {...getResponsiveImageSources('/images/founder.jpg', '(max-width: 768px) 92vw, 46vw')}
            />
          </div>
          <div className="hidden md:block absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] paper-card" />
          <div className="md:absolute md:left-[58vw] md:top-[24vh] md:w-[32vw]">
            <h2 className="heading-display text-[clamp(1.8rem,6vw,3rem)] md:text-[clamp(2rem,3vw,3rem)]">
              Your Hosts<br />
              <span className="text-[#C8A45C]">Live What</span><br />
              They Love
            </h2>
          </div>
          <div className="md:absolute md:left-[58vw] md:top-[48vh] md:w-[32vw]">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              <strong className="text-foreground">Dr. Sunita Jha</strong> (Ayurvedic Doctor) and <strong className="text-foreground">Aditya Kumar</strong> (Engineer)
              built this place to share a slower, more intentional life.
            </p>
          </div>
          <div className="md:absolute md:left-[58vw] md:top-[62vh] md:w-[32vw]">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm md:text-base">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with hosts
            </a>
          </div>
        </div>
      </section>



      {/* Section 7: Location */}
      <section id="location" className="relative bg-[#F4F1EA] dark:bg-[#0a1f19] py-16 md:py-20 z-[70]">
        <div className="px-4 md:px-[6vw]">
          <h2 className="heading-display text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,4vw,4rem)] mb-4 md:mb-6">
            Location
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                A short drive from Nashik, far enough to feel like an escape. 
                Easy road access, parking available.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <Car className="w-4 h-4 md:w-5 md:h-5 text-[#C8A45C]" />
                  <span className="text-muted-foreground text-sm md:text-base">6.5 KM from Nashik city</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#C8A45C]" />
                  <span className="text-muted-foreground text-sm md:text-base">23 km from Airport</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#C8A45C]" />
                  <span className="text-muted-foreground text-sm md:text-base">21.5 km from Nashik Road Railway Station</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#C8A45C]" />
                  <span className="text-muted-foreground text-sm md:text-base">Check-in: 12PM | Check-out: 11AM</span>
                </div>
              </div>
            </div>
            <div className="paper-card p-4 md:p-6">
              <h3 className="heading-display text-base md:text-lg mb-3 md:mb-4">Contact Us</h3>
              <div className="space-y-2 md:space-y-3 text-sm text-muted-foreground">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-[#C8A45C] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_NUMBER}</span>
                </a>
                <a href={`tel:${PHONE_NUMBER_2}`} className="flex items-center gap-2 hover:text-[#C8A45C] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_NUMBER_2}</span>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          <a 
            href={LOCATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-[30vh] md:h-[46vh] image-card overflow-hidden relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.3195721230472!2d73.73496774469422!3d20.06011258953759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddef3ed1abd6b1%3A0xa6c96c21cf2bc2b9!2sThe%20Peepal!5e0!3m2!1sen!2sus!4v1769969381415!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Peepal Farm Stay Location"
              className="pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 px-4 py-2 rounded-full text-sm font-medium">
                Open in Google Maps
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Section 8: Reviews */}
      <section id="reviews" className="relative bg-[#F4F1EA] dark:bg-[#0a1f19] py-16 md:py-20 z-[80]">
        <div className="px-4 md:px-[6vw]">
          <h2 className="heading-display text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,4vw,4rem)] mb-8 md:mb-12">
            Guest Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                quote: "The quietest sleep I've had in years. Waking up to birdsong and fresh air was magical.",
                author: "Priya M.",
                rating: 5
              },
              {
                quote: "My kids learned where food comes from. They loved helping in the garden and feeding the animals.",
                author: "Rahul K.",
                rating: 5
              },
              {
                quote: "Simple, clean, and deeply relaxing. The food was incredible and the hosts were so welcoming.",
                author: "Ananya S.",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="paper-card p-4 md:p-6">
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#C8A45C] text-[#C8A45C]" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3 md:mb-4 italic text-sm md:text-base">"{review.quote}"</p>
                <p className="label-mono text-foreground text-xs md:text-sm">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Book Your Stay */}
      <section id="booking" className="relative bg-[#0E3A2F] py-16 md:py-20 z-[90]">
        <div className="px-4 md:px-[6vw]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="image-card">
              <OptimizedImage
                src="/images/gallery-1.webp"
                alt="Peaceful farm landscape and eco-retreat at The Peepal Farm Stay near Nashik Airport"
                className="w-full h-[35vh] md:h-[50vh] object-cover"
                loading="lazy"
                {...getResponsiveImageSources('/images/gallery-1.webp', '(max-width: 768px) 100vw, 50vw')}
              />
            </div>
            <div>
              <h2 className="heading-display text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,4vw,4rem)] text-white mb-4 md:mb-6">
                Book Your Stay
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Weekends fill up fast. Reserve early to lock in your dates and experience 
                the magic of sustainable farm living.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 md:gap-4 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#C8A45C]" />
                  <span className="text-sm md:text-base">{PHONE_NUMBER}</span>
                </a>
                <a href={`tel:${PHONE_NUMBER_2}`} className="flex items-center gap-3 md:gap-4 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#C8A45C]" />
                  <span className="text-sm md:text-base">{PHONE_NUMBER_2}</span>
                </a>
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main App Component
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="relative">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
