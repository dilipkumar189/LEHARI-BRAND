"use client";

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Atropos from 'atropos/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowUp, Star, ChevronRight } from 'lucide-react';

// Featured Products Data
const products = [
  { 
    id: 1, 
    name: 'Vintage Wall Clock', 
    price: '$129', 
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c'
  },
  { 
    id: 2, 
    name: 'Modern Sundial', 
    price: '$159', 
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxOwVyjhptgac_Lg9fqLc3PU9nDML384mfITjdtx8Km0J8ND2IGxBq9KmuuFWaS4kob9ejoGGMrjtUoiZ5H09ABgF_pvp3wCPSIWW4XGI&usqp=CAE'
  },
  { 
    id: 3, 
    name: 'Minimalist Timepiece', 
    price: '$99', 
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5'
  },
  { 
    id: 4, 
    name: 'Rustic Grandfather Clock', 
    price: '$299', 
    image: 'https://images.unsplash.com/photo-1585586463948-9e40851ed193'
  }
];


// Testimonials Data
const testimonials = [
  { id: 1, text: "The craftsmanship is exceptional. Each piece tells a story.", author: "Sarah M." },
  { id: 2, text: "These timepieces are more than clocks - they're art.", author: "James R." },
  { id: 3, text: "Absolutely stunning. The attention to detail is remarkable.", author: "Emily K." }
];

const LehariLanding = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Atropos 
          className="w-full max-w-4xl"
          highlight={false}
          shadow={false}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Timeless Craftsmanship
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Handcrafted timepieces that blend art with functionality
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-black text-white px-8 py-6 text-lg">
                Shop Now <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
          <img 
            src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxOwVyjhptgac_Lg9fqLc3PU9nDML384mfITjdtx8Km0J8ND2IGxBq9KmuuFWaS4kob9ejoGGMrjtUoiZ5H09ABgF_pvp3wCPSIWW4XGI&usqp=CAE" 
            alt="Featured Clock"
            className="mt-12 rounded-lg shadow-2xl"
            data-atropos-offset="5"
          />
        </Atropos>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="transition-all duration-300"
              >
                <Card className="overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.price}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" className="w-full">Quick View</Button>
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