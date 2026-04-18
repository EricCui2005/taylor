"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    slug: "roof-maintenance-tips-pittsburgh",
    title: "5 Roof Maintenance Tips Every Pittsburgh Homeowner Should Know",
    excerpt:
      "Pittsburgh's weather can take a toll on your roof. From heavy snowfall to summer storms, here are five essential maintenance steps to extend the life of your roof and avoid costly repairs.",
    image: "/images/roof-repair.jpg",
    date: "April 12, 2026",
    category: "Roofing",
    readTime: "5 min read",
  },
  {
    slug: "kitchen-remodel-planning-guide",
    title: "Planning Your Kitchen Remodel: A Step-by-Step Guide",
    excerpt:
      "A kitchen remodel is one of the most impactful home improvements you can make. Learn how to plan your budget, choose materials, and work with your contractor for a smooth renovation.",
    image: "/images/kitchen-remodel.jpg",
    date: "April 5, 2026",
    category: "Remodeling",
    readTime: "7 min read",
  },
  {
    slug: "chimney-repair-warning-signs",
    title: "Warning Signs Your Chimney Needs Repair Before Winter",
    excerpt:
      "Crumbling mortar, white staining, and water stains on your ceiling are all signs your chimney needs attention. Don't wait until the first freeze — here's what to look for.",
    image: "/images/chimney-repair.jpg",
    date: "March 28, 2026",
    category: "Masonry",
    readTime: "4 min read",
  },
  {
    slug: "interior-painting-prep-guide",
    title: "Why Prep Work Makes or Breaks Your Interior Paint Job",
    excerpt:
      "Skipping surface preparation is the number one reason paint jobs fail. Learn the professional techniques that ensure a flawless, long-lasting finish every time.",
    image: "/images/interior-painting.jpg",
    date: "March 20, 2026",
    category: "Painting",
    readTime: "5 min read",
  },
  {
    slug: "historic-home-restoration-pittsburgh",
    title: "Preserving Pittsburgh's Character: Historic Home Restoration",
    excerpt:
      "Pittsburgh is full of homes with character and history. Restoring these properties requires specialized knowledge of period-appropriate techniques and materials.",
    image: "/images/historic-restoration.jpg",
    date: "March 14, 2026",
    category: "Restoration",
    readTime: "6 min read",
  },
  {
    slug: "gutter-maintenance-water-damage",
    title: "How Neglected Gutters Lead to Expensive Water Damage",
    excerpt:
      "Your gutters are your home's first line of defense against water damage. Learn how regular maintenance and timely repairs can save you thousands in structural repairs.",
    image: "/images/exterior-renovation.jpg",
    date: "March 7, 2026",
    category: "Maintenance",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Tips, guides, and insights from the Taylor General Contracting
              team to help you maintain and improve your property.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <ScrollReveal>
            <Link href="#" className="block group mb-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-xl transition-shadow duration-500">
                <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {posts[0].category}
                    </span>
                    <span className="text-neutral-400 text-xs">
                      {posts[0].date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-accent transition-colors duration-300">
                    {posts[0].title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                    Read Article
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href="#" className="block group h-full">
                  <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-neutral-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                        <span>{post.date}</span>
                        <span>&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-accent transition-colors duration-300 flex-1">
                        {post.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-semibold text-sm mt-auto">
                        Read More
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
