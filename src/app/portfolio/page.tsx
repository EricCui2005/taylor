"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Roofing", "Masonry", "Interior", "Exterior"];

const projects = [
  {
    src: "/images/historic-restoration.jpg",
    alt: "Historic home restoration",
    title: "Historic Home Restoration",
    category: "Exterior",
    description: "Full exterior restoration of a century-old Pittsburgh home.",
  },
  {
    src: "/images/roofing-crew.jpg",
    alt: "Roofing crew at work",
    title: "Residential Roof Replacement",
    category: "Roofing",
    description: "Complete tear-off and re-roof with architectural shingles.",
  },
  {
    src: "/images/kitchen-remodel.jpg",
    alt: "Kitchen remodel",
    title: "Modern Kitchen Remodel",
    category: "Interior",
    description: "Custom cabinetry and countertop installation.",
  },
  {
    src: "/images/chimney-flashing.jpg",
    alt: "Chimney flashing repair",
    title: "Chimney Flashing Repair",
    category: "Roofing",
    description: "Flashing replacement and waterproofing on a stone chimney.",
  },
  {
    src: "/images/exterior-renovation.jpg",
    alt: "Exterior renovation",
    title: "Exterior Renovation",
    category: "Exterior",
    description: "Siding, gutter, and trim work on a residential property.",
  },
  {
    src: "/images/interior-painting.jpg",
    alt: "Interior painting",
    title: "Interior Painting",
    category: "Interior",
    description: "Full interior repaint with meticulous prep work.",
  },
  {
    src: "/images/brickwork.jpg",
    alt: "Brickwork restoration",
    title: "Brickwork Restoration",
    category: "Masonry",
    description: "Tuckpointing and mortar restoration on a heritage facade.",
  },
  {
    src: "/images/roof-repair.jpg",
    alt: "Roof repair detail",
    title: "Emergency Roof Repair",
    category: "Roofing",
    description: "Same-day leak repair and damaged shingle replacement.",
  },
  {
    src: "/images/chimney-repair.jpg",
    alt: "Chimney repair",
    title: "Chimney Repointing",
    category: "Masonry",
    description: "Complete chimney repointing and cap installation.",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Work
            </h1>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              A showcase of craftsmanship from projects across the greater
              Pittsburgh area.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-500 cursor-pointer border ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-accent to-accent-dark text-white border-white/20 shadow-sm"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-1">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
