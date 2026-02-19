import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Leaf, Moon, Sun, MapPin, Phone, 
  ArrowRight, Star, Clock, Car, Check,
  MessageCircle, Instagram, X, Menu, ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Contact constants
const WHATSAPP_NUMBER = '919420479673';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi! I would like to book a stay at The Peepal Farm Stay.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const PHONE_NUMBER = '+91 94204 79673';
const PHONE_NUMBER_2 = '+91 95615 90211';
const LOCATION_LINK = 'https://maps.app.goo.gl/2fS42WFUXTYc91Aj6';
const INSTAGRAM_LINK = 'https://www.instagram.com/thepeepal_its_us/';

// Gallery images
const GALLERY_IMAGES = [
  { src: '/images/hero-lane.jpg', alt: 'The Peepal Farm Stay Entrance' },
  { src: '/images/farmhouse-exterior.jpg', alt: 'Farmhouse Exterior' },
  { src: '/images/room-interior.jpg', alt: 'Cozy Room Interior' },
  { src: '/images/mud-villa.jpg', alt: 'Mud Villa' },
  { src: '/images/mud-dormitory.jpg', alt: 'Mud Dormitory' },
  { src: '/images/farm-activities.jpg', alt: 'Farm Activities' },
  { src: '/images/kitchen-fire.jpg', alt: 'Traditional Kitchen' },
  { src: '/images/farm-meal.jpg', alt: 'Farm Fresh Meal' },
  { src: '/images/organic-garden.jpg', alt: 'Organic Garden' },
  { src: '/images/nature-walk.jpg', alt: 'Nature Walk' },
  { src: '/images/founders-field.jpg', alt: 'Hosts in the Field' },
  { src: '/images/closing-scene.jpg', alt: 'Peaceful Farm Landscape' },
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
            <img src="/PHOTO-2026-01-14-21-10-59.jpg" alt="The Peepal Logo" className="w-full h-full object-cover scale-[1.5]" />
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
                <img src="/PHOTO-2026-01-14-21-10-59.jpg" alt="The Peepal Logo" className="w-full h-full object-cover scale-[1.5]" />
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
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            <img
              src={GALLERY_IMAGES[currentImage].src}
              alt={GALLERY_IMAGES[currentImage].alt}
              className="max-w-full max-h-[85vh] object-contain"
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

// Home Page Component
function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const stayRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);
  const hostsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for all animated elements
      gsap.set('.welcome-image, .welcome-card, .welcome-title, .welcome-body, .welcome-cta', { 
        opacity: 0 
      });
      gsap.set('.stay-image, .stay-card, .stay-headline, .stay-body, .stay-bullets', { 
        opacity: 0 
      });
      gsap.set('.food-image, .food-card, .food-headline, .food-body, .food-bullets', { 
        opacity: 0 
      });
      gsap.set('.hosts-image, .hosts-card, .hosts-headline, .hosts-body, .hosts-cta', { 
        opacity: 0 
      });
      
      // Hero entrance animation
      const heroTl = gsap.timeline({ delay: 0.3 });
      heroTl.fromTo('.hero-image', 
        { x: '-60vw', scale: 1.08, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.hero-headline span',
        { x: '10vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08 },
        '-=0.7'
      )
      .fromTo('.hero-leaf',
        { y: '-12vh', rotation: -10, opacity: 0 },
        { y: 0, rotation: 0, opacity: 1, duration: 1, ease: 'back.out(1.4)' },
        '-=0.8'
      )
      .fromTo('.hero-subtext',
        { y: '4vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo('.hero-cta',
        { y: '4vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo('.hero-scroll-indicator',
        { y: '2vh', opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      );

      // Hero scroll animation
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=70%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0.6) {
            const exitProgress = (progress - 0.6) / 0.4;
            gsap.set('.hero-image', {
              x: -25 * exitProgress + 'vw',
              scale: 1 - 0.05 * exitProgress,
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.hero-headline', {
              x: 15 * exitProgress + 'vw',
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.85
            });
            gsap.set('.hero-leaf', {
              y: -15 * exitProgress + 'vh',
              rotation: 12 * exitProgress,
              opacity: progress > 0.98 ? 0 : 1 - exitProgress * 0.7
            });
            gsap.set('.hero-subtext, .hero-cta, .hero-scroll-indicator', {
              y: 8 * exitProgress + 'vh',
              opacity: progress > 0.98 ? 0 : 1 - exitProgress * 0.8
            });
          }
        }
      });

      // Welcome section
      ScrollTrigger.create({
        trigger: welcomeRef.current,
        start: 'top top',
        end: '+=90%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.25) {
            const enterProgress = progress / 0.25;
            gsap.set('.welcome-image', {
              x: -50 * (1 - enterProgress) + 'vw',
              opacity: enterProgress
            });
            gsap.set('.welcome-card', {
              x: 50 * (1 - enterProgress) + 'vw',
              opacity: enterProgress
            });
            gsap.set('.welcome-title', {
              y: 8 * (1 - enterProgress) + 'vh',
              opacity: enterProgress
            });
            gsap.set('.welcome-body, .welcome-cta', {
              y: 5 * (1 - Math.max(0, (progress - 0.12) / 0.13)) + 'vh',
              opacity: Math.max(0, (progress - 0.12) / 0.13)
            });
          } else if (progress > 0.65) {
            const exitProgress = (progress - 0.65) / 0.35;
            gsap.set('.welcome-card', {
              x: 25 * exitProgress + 'vw',
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.welcome-image', {
              x: -25 * exitProgress + 'vw',
              scale: 1 - 0.03 * exitProgress,
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.welcome-text', {
              y: -5 * exitProgress + 'vh',
              opacity: progress > 0.98 ? 0 : 1 - exitProgress * 0.7
            });
          }
        }
      });

      // Stay section
      ScrollTrigger.create({
        trigger: stayRef.current,
        start: 'top top',
        end: '+=95%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.25) {
            const enterProgress = progress / 0.25;
            gsap.set('.stay-image', {
              x: -50 * (1 - enterProgress) + 'vw',
              opacity: enterProgress
            });
            gsap.set('.stay-card', {
              x: 50 * (1 - enterProgress) + 'vw',
              opacity: enterProgress
            });
            gsap.set('.stay-headline', {
              y: 10 * (1 - enterProgress) + 'vh',
              opacity: enterProgress
            });
            gsap.set('.stay-body, .stay-bullets', {
              y: 5 * (1 - Math.max(0, (progress - 0.12) / 0.13)) + 'vh',
              opacity: Math.max(0, (progress - 0.12) / 0.13)
            });
          } else if (progress > 0.65) {
            const exitProgress = (progress - 0.65) / 0.35;
            gsap.set('.stay-card', {
              x: 40 * exitProgress + 'vw',
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.stay-image', {
              x: -25 * exitProgress + 'vw',
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.stay-headline', {
              y: -8 * exitProgress + 'vh',
              opacity: progress > 0.98 ? 0 : 1 - exitProgress * 0.7
            });
          }
        }
      });

      // Food section
      ScrollTrigger.create({
        trigger: foodRef.current,
        start: 'top top',
        end: '+=90%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.25) {
            const enterProgress = progress / 0.25;
            gsap.set('.food-image', {
              x: -50 * (1 - enterProgress) + 'vw',
              opacity: enterProgress
            });
            gsap.set('.food-card', {
              x: 50 * (1 - enterProgress) + 'vw',
              opacity: enterProgress
            });
            gsap.set('.food-headline', {
              y: 10 * (1 - enterProgress) + 'vh',
              opacity: enterProgress
            });
            gsap.set('.food-body, .food-cta', {
              y: 5 * (1 - Math.max(0, (progress - 0.12) / 0.13)) + 'vh',
              opacity: Math.max(0, (progress - 0.12) / 0.13)
            });
          } else if (progress > 0.65) {
            const exitProgress = (progress - 0.65) / 0.35;
            gsap.set('.food-image', {
              x: -25 * exitProgress + 'vw',
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.food-card', {
              x: 25 * exitProgress + 'vw',
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.food-text', {
              y: -5 * exitProgress + 'vh',
              opacity: progress > 0.98 ? 0 : 1 - exitProgress * 0.7
            });
          }
        }
      });

      // Hosts section
      ScrollTrigger.create({
        trigger: hostsRef.current,
        start: 'top top',
        end: '+=90%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.25) {
            const enterProgress = progress / 0.25;
            gsap.set('.hosts-image', {
              x: -50 * (1 - enterProgress) + 'vw',
              opacity: enterProgress
            });
            gsap.set('.hosts-card', {
              x: 50 * (1 - enterProgress) + 'vw',
              opacity: enterProgress
            });
            gsap.set('.hosts-headline', {
              y: 10 * (1 - enterProgress) + 'vh',
              opacity: enterProgress
            });
            gsap.set('.hosts-body, .hosts-cta', {
              y: 5 * (1 - Math.max(0, (progress - 0.12) / 0.13)) + 'vh',
              opacity: Math.max(0, (progress - 0.12) / 0.13)
            });
          } else if (progress > 0.65) {
            const exitProgress = (progress - 0.65) / 0.35;
            gsap.set('.hosts-image', {
              x: -25 * exitProgress + 'vw',
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.hosts-card', {
              x: 25 * exitProgress + 'vw',
              opacity: progress > 0.95 ? 0 : 1 - exitProgress * 0.8
            });
            gsap.set('.hosts-text', {
              y: -5 * exitProgress + 'vh',
              opacity: progress > 0.98 ? 0 : 1 - exitProgress * 0.7
            });
          }
        }
      });

      // Flowing sections animation
      const flowingSections = ['.experience-', '.location-', '.reviews-', '.booking-'];
      flowingSections.forEach((prefix) => {
        gsap.fromTo(`${prefix}animate`,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: prefix === '.experience-' ? experienceRef.current : 
                       prefix === '.location-' ? document.getElementById('location') :
                       prefix === '.reviews-' ? document.getElementById('reviews') :
                       document.getElementById('booking'),
              start: 'top 85%',
              end: 'top 50%',
              scrub: true
            }
          }
        );
      });

      // Global snap for pinned sections
      const pinned = ScrollTrigger.getAll().filter(st => st.vars.pin).sort((a, b) => a.start - b.start);
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (maxScroll && pinned.length > 0) {
        const pinnedRanges = pinned.map(st => ({
          start: st.start / maxScroll,
          end: (st.end ?? st.start) / maxScroll,
          center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
        }));

        ScrollTrigger.create({
          snap: {
            snapTo: (value: number) => {
              const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
              if (!inPinned) return value;
              
              const target = pinnedRanges.reduce((closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
                pinnedRanges[0]?.center ?? 0
              );
              return target;
            },
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: 'power2.out'
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Section 1: Hero - Fixed Layout */}
      <section ref={heroRef} className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-10 min-h-screen pb-20">
        {/* Image - Desktop: left, Mobile: top */}
        <div className="absolute left-[4vw] md:left-[6vw] top-[12vh] md:top-[15vh] w-[92vw] md:w-[52vw] h-[42vh] md:h-[58vh] rounded-lg overflow-hidden image-card hero-image">
          <img
            src="/images/gallery-1.webp"
            alt="The Peepal Farm Stay entrance"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        
        {/* Logo - Hidden on mobile */}
        {/* To revert to leaf icon, replace the div below with: <Leaf className="w-full h-auto text-[#C8A45C]" strokeWidth={0.5} /> */}
        <div className="hidden md:block absolute right-[10vw] top-[16vh] w-[11vw] aspect-square hero-leaf opacity-60">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img src="/PHOTO-2026-01-14-21-10-59.jpg" alt="The Peepal Logo" className="w-full h-full object-cover scale-[1.5]" />
          </div>
        </div>
        
        {/* Headline - Desktop: slightly left of right, Mobile: below image */}
        <div className="absolute left-[4vw] md:left-auto md:right-[15vw] top-[56vh] md:top-[24vh] hero-headline">
          <span className="heading-display text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(3rem,5vw,5rem)] block leading-[0.9]">The</span>
          <span className="heading-display text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(3rem,5vw,5rem)] block leading-[0.9]">Peepal</span>
          <span className="heading-display text-[clamp(2.5rem,10vw,6rem)] md:text-[clamp(3rem,5vw,5rem)] block text-[#C8A45C] leading-[0.9]">Farm Stay</span>
        </div>
        
        {/* Subtext - Desktop: right side, Mobile: below headline */}
        <div className="absolute left-[4vw] md:left-auto md:right-[6vw] top-[74vh] md:top-[48vh] w-[92vw] md:w-[32vw] hero-subtext">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Eco-friendly mud homes in the heart of Maharashtra. Experience sustainable living in harmony with nature.
          </p>
        </div>
        
        {/* CTA */}
        <div className="absolute left-[4vw] md:left-auto md:right-[15vw] top-[82vh] md:top-[58vh] hero-cta">
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
        
        {/* Location label */}
        <div className="absolute left-[4vw] md:left-[6vw] top-[10vh] label-mono text-muted-foreground text-xs md:text-sm">
          Nashik, Maharashtra
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 flex flex-col items-center gap-2 hero-scroll-indicator z-10">
          <span className="label-mono text-muted-foreground text-xs">Scroll</span>
          <div className="animate-bounce">
            <ChevronDown className="w-5 h-5 text-[#C8A45C]" />
          </div>
        </div>
      </section>

      {/* Section 2: Welcome */}
      <section ref={welcomeRef} className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-20">
        <div className="absolute left-[4vw] md:left-[6vw] top-[14vh] md:top-[18vh] w-[92vw] md:w-[46vw] h-[32vh] md:h-[64vh] image-card welcome-image">
          <img
            src="/images/1000236050_convert_8.webp"
            alt="Farmhouse exterior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] paper-card welcome-card" />
        <div className="absolute left-[4vw] md:left-[58vw] top-[48vh] md:top-[24vh] w-[92vw] md:w-[32vw] welcome-title welcome-text">
          <h2 className="heading-display text-[clamp(1.8rem,6vw,3rem)] md:text-[clamp(2rem,3vw,3rem)]">
            Welcome to Our Farm Stay
          </h2>
        </div>
        <div className="absolute left-[4vw] md:left-[58vw] top-[58vh] md:top-[42vh] w-[92vw] md:w-[32vw] welcome-body welcome-text">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Experience the perfect blend of rustic charm and modern comfort. Our eco-friendly mud homes 
            are built to stay cool, breathe easy, and help you slow down and reconnect with nature.
          </p>
        </div>
        <div className="absolute left-[4vw] md:left-[58vw] top-[72vh] md:top-[58vh] welcome-cta welcome-text">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Explore on WhatsApp
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>

      {/* Section 3: Stay & Philosophy */}
      <section ref={stayRef} id="stay" className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-30">
        <div className="absolute left-[4vw] md:left-[6vw] top-[14vh] md:top-[18vh] w-[92vw] md:w-[46vw] h-[32vh] md:h-[64vh] image-card stay-image">
          <img
            src="/images/gallery-3.webp"
            alt="Cozy room interior"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: 'center 30%' }}
          />
        </div>
        <div className="hidden md:block absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] paper-card stay-card" />
        <div className="absolute left-[4vw] md:left-[58vw] top-[48vh] md:top-[28vh] w-[92vw] md:w-[32vw] stay-headline stay-text">
          <h2 className="heading-display text-[clamp(2rem,7vw,3.5rem)] md:text-[clamp(2.5rem,3.5vw,3.5rem)]">
            Stay With Us<br />
            <span className="text-[#C8A45C]">And Live Green</span>
          </h2>
        </div>
        <div className="absolute left-[4vw] md:left-[58vw] top-[54vh] md:top-[38vh] w-[92vw] md:w-[32vw] stay-body stay-text">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            We use rainwater harvesting, organic farming, and minimal plastic. When you stay here, 
            you support a cleaner, quieter way of life rooted in sustainability.
          </p>
        </div>
        <div className="absolute left-[4vw] md:left-[58vw] top-[62vh] md:top-[48vh] stay-bullets stay-text space-y-2 md:space-y-3">
          {['Mud villas & dorms', 'Farm-to-table meals', 'Guided farm walks'].map((item) => (
            <div key={item} className="flex items-center gap-2 md:gap-3">
              <Check className="w-3 h-3 md:w-4 md:h-4 text-[#C8A45C]" />
              <span className="label-mono text-muted-foreground text-xs md:text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: The Experience */}
      <section ref={experienceRef} id="experience" className="relative bg-[#F4F1EA] dark:bg-[#0a1f19] py-16 md:py-20 z-40">
        <div className="px-4 md:px-[6vw]">
          <div className="w-full h-[30vh] md:h-[46vh] image-card experience-animate mb-8 md:mb-12">
            <img
              src="/images/farm-activities.jpg"
              alt="Farm activities"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="heading-display text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,4vw,4rem)] experience-animate mb-4 md:mb-6">
                The Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed experience-animate text-sm md:text-base">
                Start the day with a farm walk. Help in the fields. Eat food cooked on fire. 
                Sleep early. Wake up to birds. This is life at The Peepal—simple, intentional, 
                and deeply connected to the land.
              </p>
            </div>
            <div className="paper-card p-4 md:p-6 experience-animate">
              <img
                src="/images/gallery-4.jpg"
                alt="Nature walk"
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
              />
              <p className="label-mono text-muted-foreground text-xs md:text-sm">Afternoon chai under the trees</p>
            </div>
          </div>

          {/* Accommodation Cards */}
          <div className="mt-12 md:mt-20">
            <h3 className="heading-display text-xl md:text-2xl mb-6 md:mb-8 experience-animate">Choose Your Stay</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Mud Villa */}
              <div className="paper-card overflow-hidden experience-animate">
                <img
                  src="/assets-png-backup/1000236050_convert_10.png"
                  alt="Mud Villa"
                  className="w-full h-48 md:h-64 object-cover"
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
              <div className="paper-card overflow-hidden experience-animate">
                <img
                  src="/images/mud-dormitory.jpg"
                  alt="Mud Dormitory"
                  className="w-full h-48 md:h-64 object-cover"
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
      <section ref={foodRef} id="food" className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-50">
        <div className="absolute left-[4vw] md:left-[6vw] top-[14vh] md:top-[18vh] w-[92vw] md:w-[46vw] h-[32vh] md:h-[64vh] image-card food-image">
          <img
            src="/images/kitchen-fire.jpg"
            alt="Traditional clay stove cooking"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] paper-card food-card" />
        <div className="absolute left-[4vw] md:left-[58vw] top-[48vh] md:top-[24vh] w-[92vw] md:w-[32vw] food-headline food-text">
          <h2 className="heading-display text-[clamp(1.8rem,6vw,3rem)] md:text-[clamp(2rem,3vw,3rem)]">
            Food Cooked<br />
            <span className="text-[#C8A45C]">With Fire</span><br />
            And Love
          </h2>
        </div>
        <div className="absolute left-[4vw] md:left-[58vw] top-[60vh] md:top-[48vh] w-[92vw] md:w-[32vw] food-body food-text">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Most meals come from the farm. Spices are local. Recipes are traditional. 
            The stove is wood-fired—and the flavor is real.
          </p>
        </div>
        <div className="absolute left-[4vw] md:left-[58vw] top-[70vh] md:top-[62vh] w-[92vw] md:w-[32vw] food-cta food-text">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm md:text-base">
            <MessageCircle className="w-4 h-4 mr-2" />
            Ask about meals
          </a>
        </div>
      </section>

      {/* Section 6: Hosts */}
      <section ref={hostsRef} id="hosts" className="section-pinned bg-[#F4F1EA] dark:bg-[#0a1f19] z-[60]">
        <div className="absolute left-[4vw] md:left-[6vw] top-[14vh] md:top-[18vh] w-[92vw] md:w-[46vw] h-[32vh] md:h-[64vh] image-card hosts-image">
          <img
            src="/images/founders-field.jpg"
            alt="Founders in the field"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block absolute left-[54vw] top-[18vh] w-[40vw] h-[64vh] paper-card hosts-card" />
        <div className="absolute left-[4vw] md:left-[58vw] top-[48vh] md:top-[24vh] w-[92vw] md:w-[32vw] hosts-headline hosts-text">
          <h2 className="heading-display text-[clamp(1.8rem,6vw,3rem)] md:text-[clamp(2rem,3vw,3rem)]">
            Your Hosts<br />
            <span className="text-[#C8A45C]">Live What</span><br />
            They Love
          </h2>
        </div>
        <div className="absolute left-[4vw] md:left-[58vw] top-[60vh] md:top-[48vh] w-[92vw] md:w-[32vw] hosts-body hosts-text">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            <strong className="text-foreground">Dr. Sunita Jha</strong> (Ayurvedic Doctor) and <strong className="text-foreground">Aditya Kumar</strong> (Engineer) 
            built this place to share a slower, more intentional life.
          </p>
        </div>
        <div className="absolute left-[4vw] md:left-[58vw] top-[70vh] md:top-[62vh] w-[92vw] md:w-[32vw] hosts-cta hosts-text">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm md:text-base">
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat with hosts
          </a>
        </div>
      </section>

      {/* Section 7: Location */}
      <section id="location" className="relative bg-[#F4F1EA] dark:bg-[#0a1f19] py-16 md:py-20 z-[70]">
        <div className="px-4 md:px-[6vw]">
          <h2 className="heading-display text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,4vw,4rem)] location-animate mb-4 md:mb-6">
            Location
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="location-animate">
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
            <div className="paper-card p-4 md:p-6 location-animate">
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
            className="block w-full h-[30vh] md:h-[46vh] image-card location-animate overflow-hidden relative group"
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
          <h2 className="heading-display text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,4vw,4rem)] reviews-animate mb-8 md:mb-12">
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
              <div key={index} className="paper-card p-4 md:p-6 reviews-animate">
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
            <div className="image-card booking-animate">
              <img
                src="/images/gallery-1.webp"
                alt="Peaceful farm landscape"
                className="w-full h-[35vh] md:h-[50vh] object-cover"
              />
            </div>
            <div>
              <h2 className="heading-display text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.5rem,4vw,4rem)] text-white booking-animate mb-4 md:mb-6">
                Book Your Stay
              </h2>
              <p className="text-white/80 leading-relaxed booking-animate mb-6 md:mb-8 text-sm md:text-base">
                Weekends fill up fast. Reserve early to lock in your dates and experience 
                the magic of sustainable farm living.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 booking-animate">
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
                className="btn-primary booking-animate inline-flex"
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
