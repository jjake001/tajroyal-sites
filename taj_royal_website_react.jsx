import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Config for easy edits
const siteConfig = {
  brand: "TajRoyal",
  tagline: "Experience Luxury & Modern Living",
  logo: "/assets/tajroyal-logo.png", // Integrated new logo
  services: [
    { title: "Luxury Suites", desc: "Spacious, elegant, and fully serviced accommodations." },
    { title: "Fine Dining", desc: "World-class cuisine with a mix of local and international flavors." },
    { title: "Event Spaces", desc: "Modern venues for weddings, conferences, and celebrations." },
    { title: "Wellness & Spa", desc: "Relax with rejuvenating treatments and spa services." },
  ],
  gallery: [
    "/assets/gallery-1.jpg",
    "/assets/gallery-2.jpg",
    "/assets/gallery-3.jpg",
    "/assets/gallery-4.jpg",
  ],
  team: [
    { name: "Taj Khan", role: "Founder & CEO" },
    { name: "Sarah Lee", role: "Operations Manager" },
    { name: "David Miller", role: "Head of Hospitality" },
  ],
  contact: {
    phone: "+1 (800) 555-1234",
    email: "info@tajroyal.com",
    address: "123 Royal Avenue, Beverly Hills, CA",
  },
};

export default function TajRoyalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow-lg">
        <div className="flex items-center space-x-3">
          <img src={siteConfig.logo} alt="TajRoyal Logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-bold text-purple-800">{siteConfig.brand}</h1>
        </div>
        <p className="italic text-gray-500">{siteConfig.tagline}</p>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center text-white">
        <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold drop-shadow-lg">
          Welcome to {siteConfig.brand}
        </motion.h2>
        <p className="mt-4 text-lg">{siteConfig.tagline}</p>
        <Button className="mt-6 bg-purple-700 hover:bg-purple-900 text-white rounded-2xl px-6 py-3">
          Book Now
        </Button>
      </section>

      {/* Services */}
      <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteConfig.services.map((s, i) => (
          <Card key={i} className="shadow-xl hover:shadow-2xl transition rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-purple-700">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Gallery */}
      <section className="p-10 bg-white">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.gallery.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="rounded-2xl shadow-md hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="p-10">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.team.map((member, i) => (
            <Card key={i} className="shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg text-purple-700">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="p-10 bg-purple-50">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">Contact Us</h2>
        <div className="max-w-xl mx-auto text-center space-y-3">
          <p>📞 {siteConfig.contact.phone}</p>
          <p>📧 {siteConfig.contact.email}</p>
          <p>📍 {siteConfig.contact.address}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-purple-900 text-white">
        <p>&copy; {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</p>
      </footer>
    </div>
  );
}
