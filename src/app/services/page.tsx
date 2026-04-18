"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Comprehensive contracting solutions for residential and commercial
              properties throughout the Pittsburgh area.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => (
            <ScrollReveal key={service.title}>
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[350px] sm:h-[420px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                      {service.title}
                    </h2>
                  </div>
                  <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                  <p className="text-neutral-600 leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <svg
                          className="w-5 h-5 text-accent shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact">Get a Free Estimate</Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-accent to-accent-dark py-16">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              No job is too big or too small. Contact us today and let&apos;s get
              started.
            </p>
            <Button href="/contact" variant="white" size="lg">
              Request an Estimate
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

const services = [
  {
    title: "Roof Repair & Replacement",
    description:
      "We diagnose leaks and replace missing shingle or slate, re-caulk around chimneys and flashing, and tar over exposed nails. Full roof replacements available for residential and commercial properties.",
    image: "/images/roofing-crew.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    features: [
      "Leak diagnosis & targeted repair",
      "Shingle and slate replacement",
      "Full roof replacements",
      "Commercial & residential",
    ],
  },
  {
    title: "Gutter Repair & Cleaning",
    description:
      "Leaking and damaged gutters lead to interior damage to your home. If you see moss growing around your gutters or brick, you have water problems. We repair, clean, and replace gutters to protect your property.",
    image: "/images/exterior-renovation.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    features: [
      "Gutter cleaning & debris removal",
      "Leak repair & sealing",
      "Full gutter replacement",
      "Downspout installation",
    ],
  },
  {
    title: "Chimney Pointing & Repair",
    description:
      "Missing mortar in chimneys leads to leaks that eventually show inside your home. We restore and repoint chimneys, repair flashing, and waterproof to prevent costly interior damage.",
    image: "/images/chimney-flashing.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    features: [
      "Mortar restoration & repointing",
      "Flashing repair & replacement",
      "Waterproofing treatment",
      "Structural chimney repair",
    ],
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Prep is the key to a good paint job. If your home is not sanded and prepped properly, that paint job will not last. We do it right the first time, inside and out.",
    image: "/images/interior-painting.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    features: [
      "Thorough surface preparation",
      "Interior room painting",
      "Exterior house painting",
      "Trim, siding & deck staining",
    ],
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen with custom cabinetry, countertops, appliance installation, and complete layout redesigns tailored to your vision.",
    image: "/images/kitchen-remodel.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
    features: [
      "Custom cabinetry & countertops",
      "Appliance installation",
      "Layout redesign",
      "Flooring & backsplash",
    ],
  },
  {
    title: "Masonry & Brickwork",
    description:
      "Expert brick laying, tuckpointing, and stone work. We restore and build with precision craftsmanship that stands the test of time.",
    image: "/images/brickwork.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
    features: [
      "Brick laying & repair",
      "Tuckpointing & repointing",
      "Stone wall construction",
      "Historic restoration",
    ],
  },
];
