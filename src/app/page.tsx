'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Utensils, Wheat, MapPin, Clock, Sun, Trees, Building2, Users, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-green-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img
                src="/PHOTO-2026-01-14-21-10-59.jpg"
                alt="Farm Stay Logo"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            FARM STAY
          </h1>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">Nashik, Maharashtra</span>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contributing to the drive of eco-friendly Bharat come and enjoy the blissful natural earthen homes... it's us 🌳
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Book Your Stay
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Trees className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to Our Farm Stay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of rustic charm and modern comfort in our eco-friendly mud homes
            </p>
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

      {/* Accommodation Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Accommodation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our cozy mud villas or budget-friendly dormitory
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mud Villas Card */}
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
                <CardDescription className="text-base text-gray-700">
                  Private, eco-friendly villas built with traditional mud architecture. Ideal for couples, families, or small groups seeking comfort with rustic charm.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Private mud villa with authentic architecture',
                    'Eco-friendly construction',
                    'Perfect for couples & families',
                    'Comfortable rustic charm',
                    'Peaceful countryside setting'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white">
                  Book Mud Villa
                </Button>
              </CardContent>
            </Card>

            {/* Mud Dormitory Card */}
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
                <CardDescription className="text-base text-gray-700">
                  Shared accommodation designed for backpackers, students, and solo travelers. Promotes community living while staying close to nature.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Budget-friendly shared accommodation',
                    'Community living experience',
                    'Perfect for backpackers & students',
                    'Meet like-minded travelers',
                    'Eco-friendly mud construction'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white">
                  Book Dormitory Bed
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainable Living Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-800 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sustainable Living
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Experience eco-friendly living in harmony with nature
            </p>
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
                <p className="text-green-100 text-lg">
                  Built entirely with eco-friendly mud construction, minimizing environmental impact while providing natural temperature regulation.
                </p>
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
                <p className="text-green-100 text-lg">
                  Practice sustainable development with rainwater harvesting, organic farming, and minimal use of plastics.
                </p>
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
                <p className="text-green-100 text-lg">
                  Guests are encouraged to participate in eco-conscious activities and learn about sustainable lifestyles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Food Experience Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Utensils className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Food Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Savor authentic traditional meals prepared with farm-fresh vegetables
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <Utensils className="w-6 h-6 text-amber-600" />
                  Farm-Fresh Meals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Authentic traditional meals prepared with fresh vegetables harvested right from our organic farm.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <Sun className="w-6 h-6 text-amber-600" />
                  Seasonal Menus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Enjoy seasonal menus highlighting local flavors and traditional recipes passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-amber-600" />
                  Flexible Dining
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Guests can enjoy meals in a communal dining space or in the privacy of their villa setting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farm Activities Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Wheat className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Farm Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get hands-on experience with organic farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Wheat className="w-8 h-8" />,
                title: 'Organic Farming',
                description: 'Hands-on experience with organic farming including planting, harvesting, and learning about local crops.'
              },
              {
                icon: <Trees className="w-8 h-8" />,
                title: 'Guided Farm Walks',
                description: 'Guided walks through the farm to understand sustainable agriculture practices and connect with nature.'
              },
              {
                icon: <Utensils className="w-8 h-8" />,
                title: 'Farm-to-Table Cooking',
                description: 'Opportunity to cook with freshly harvested vegetables and learn traditional recipes from our kitchen.'
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainability Learning',
                description: 'Learn about sustainable practices, rainwater harvesting, and eco-friendly living from our experienced team.'
              }
            ].map((activity, index) => (
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

      {/* Location Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-emerald-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Location & Accessibility
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Serene Countryside</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Situated in a peaceful countryside setting, away from the noise and pollution of city life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Easy Road Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Easily accessible by road with ample parking available for your vehicles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Perfect Weekend Getaway</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The perfect destination for weekend relaxation and cultural immersion in rural Maharashtra.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Check-in/out Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Clock className="w-8 h-8 text-amber-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Check-in & Check-out
            </h2>
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
                <p className="text-gray-600">
                  Early check-in available on request, subject to availability. Contact us in advance to arrange.
                </p>
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
                <p className="text-gray-600">
                  Late check-out available on request, subject to availability. Please ask at the front desk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">FARM STAY</h3>
              <p className="text-gray-400 leading-relaxed">
                Contributing to the drive of eco-friendly Bharat. Experience blissful natural earthen homes at Nashik.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Nashik, Maharashtra</span>
                </div>
                <p className="text-gray-400 mt-4">
                  Perfect weekend getaway for relaxation and cultural immersion.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#accommodation" className="hover:text-white transition-colors">Accommodation</a></li>
                <li><a href="#activities" className="hover:text-white transition-colors">Farm Activities</a></li>
                <li><a href="#food" className="hover:text-white transition-colors">Food Experience</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Farm Stay Nashik. All rights reserved.</p>
            <p className="mt-2 text-sm">🌿 Experience sustainable living in nature's lap</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
