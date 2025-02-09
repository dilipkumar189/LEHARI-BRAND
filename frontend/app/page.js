"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Atropos from 'atropos/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, Star, ChevronRight, Clock, Award, Package, Heart } from 'lucide-react';


const products = [
  { 
    id: 1, 
    name: 'Vintage Wall Clock', 
    price: '$129',
    rating: 4.8,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f'
  },
  { 
    id: 2, 
    name: 'Modern Sundial', 
    price: '$159',
    rating: 4.6,
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc'
  },
  { 
    id: 3, 
    name: 'Minimalist Timepiece', 
    price: '$99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1495856458515-0637185db551'
  },
  { 
    id: 4, 
    name: 'Rustic Grandfather Clock', 
    price: '$299',
    rating: 4.9,
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1415604934674-561df9abf539'
  }
];


// Testimonials Data
const testimonials = [
  { id: 1, text: "The craftsmanship is exceptional. Each piece tells a story.", author: "Sarah M." },
  { id: 2, text: "These timepieces are more than clocks - they're art.", author: "James R." },
  { id: 3, text: "Absolutely stunning. The attention to detail is remarkable.", author: "Emily K." }
];

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Timeless Design",
    description: "Each piece crafted to last generations"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Expert Craftsmanship",
    description: "Created by master artisans"
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Free Shipping",
    description: "Worldwide on orders over $500"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Satisfaction Guaranteed",
    description: "30-day return policy"
  }
];

const LehariLanding = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Parallax effect for hero section
  const heroImageY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: heroImageY }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white" />
            <Image
              src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4"
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>

          <Atropos 
            className="w-full max-w-5xl relative z-10 px-4"
            highlight={false}
            shadow={false}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ y: heroTextY }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="mb-6 text-lg px-6 py-2 bg-white/90 text-black">
                  Handcrafted Excellence
                </Badge>
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white text-shadow-lg">
                Timeless Craftsmanship
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto text-shadow">
                Where artistry meets precision in every timepiece
              </p>

              <motion.div
                className="flex gap-4 justify-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg"
                  >
                    Shop Now <ChevronRight className="ml-2" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="px-8 py-6 text-lg bg-black/20 text-white border-white hover:bg-black/40"
                  >
                    Watch Video
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16 relative max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="relative h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1524805444758-089113d48a6d"
                  alt="Featured Clock"
                  fill
                  className="rounded-xl shadow-2xl object-cover"
                  data-atropos-offset="5"
                  priority
                  quality={100}
                />
                <motion.div
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur p-6 rounded-lg shadow-xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <p className="font-bold text-lg">Limited Edition</p>
                  <p className="text-gray-600">Only 50 pieces available</p>
                  <div className="mt-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="text-sm text-gray-600">Handcrafted in 2024</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Atropos>

          {/* Enhanced Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full relative">
              <div className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
            </div>
            <p className="text-white text-sm mt-2 text-center">Scroll to explore</p>
          </motion.div>
        </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-3 bg-gray-100 rounded-full mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4">Our Collection</Badge>
              <h2 className="text-4xl font-bold mb-4">Featured Timepieces</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of masterfully crafted timepieces
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="vintage">Vintage</TabsTrigger>
              <TabsTrigger value="modern">Modern</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="transition-all duration-300"
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 right-4">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-gray-600">{product.price}</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm">{product.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" className="w-full group-hover:bg-black group-hover:text-white transition-colors">
                      Quick View
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1621600411688-4be93cd68504" alt="Artisan Working" className="rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">Our Craft, Your Story</h2>
            <p className="text-gray-600 text-lg">
              Each timepiece is meticulously crafted by our skilled artisans, 
              combining traditional techniques with modern design sensibilities.
            </p>
            <Button variant="outline" size="lg">Learn More</Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="flex space-x-8 overflow-x-auto pb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[300px] flex-1"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Star className="text-yellow-400 mb-4" />
                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                    <p className="font-semibold">{testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates about new collections and special offers.
          </p>
          <div className="flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button>Subscribe</Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Lehari-Brand</h3>
            <p className="text-gray-400">Crafting timeless pieces since 2020</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Collections</li>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Our Story</li>
              <li>Artisans</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp />
      </motion.button>
    </div>
  );
};

export default LehariLanding;