"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Mike D.",
    location: "Mt. Lebanon, PA",
    rating: 5,
    text: "Taylor General Contracting did an outstanding job on our roof replacement. Professional crew, clean worksite, and the finished product looks incredible. Highly recommend!",
  },
  {
    name: "Sarah K.",
    location: "Squirrel Hill, PA",
    rating: 5,
    text: "We hired them for chimney repointing and gutter repair. Frank was upfront about pricing, showed up on time, and the work was done perfectly. Will definitely call again.",
  },
  {
    name: "James R.",
    location: "Bethel Park, PA",
    rating: 5,
    text: "Kitchen remodel came out better than we imagined. The attention to detail was impressive — every cabinet aligned, every tile perfectly placed. True craftsmen.",
  },
  {
    name: "Linda M.",
    location: "South Side, PA",
    rating: 5,
    text: "Had our entire exterior painted and the prep work was meticulous. Two years later and it still looks brand new. These guys know what they're doing.",
  },
  {
    name: "Tom H.",
    location: "Dormont, PA",
    rating: 5,
    text: "Frank and his team restored the brickwork on our 100-year-old home beautifully. They treated our house with the care it deserved. Exceptional work.",
  },
  {
    name: "Angela P.",
    location: "Brookline, PA",
    rating: 5,
    text: "From the initial estimate to the final walkthrough, everything was professional and transparent. Our interior painting looks flawless. Couldn't be happier.",
  },
  {
    name: "David W.",
    location: "Crafton, PA",
    rating: 5,
    text: "Called for an emergency roof leak repair and they came out the same day. Fixed the issue quickly and followed up a week later to make sure everything held. Great service.",
  },
  {
    name: "Rachel B.",
    location: "Greentree, PA",
    rating: 5,
    text: "We've used Taylor General for three different projects now. Consistent quality every single time. They're our go-to contractor for anything around the house.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-neutral-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-6 mx-3">
      <StarRating rating={review.rating} />
      <p className="text-neutral-300 text-sm leading-relaxed mt-4 mb-5">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{review.name}</div>
          <div className="text-neutral-500 text-xs">{review.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsCarousel() {
  const duplicated = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: [0, -(reviews.length * 364)] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
}
