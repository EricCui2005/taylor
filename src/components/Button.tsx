"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const baseClasses =
  "inline-flex items-center justify-center font-semibold tracking-wide uppercase rounded-lg transition-all duration-500 ease-out cursor-pointer";

const variantClasses = {
  primary:
    "bg-gradient-to-r from-accent to-accent-dark text-white border border-white/20 shadow-sm hover:shadow-[0_0_20px_rgba(200,16,46,0.15)] hover:brightness-110",
  outline:
    "border-2 border-neutral-300 text-neutral-700 hover:border-accent hover:text-accent bg-transparent",
  white:
    "bg-white text-accent border border-neutral-200 shadow-sm hover:shadow-[0_0_20px_rgba(200,16,46,0.1)] hover:border-accent/30",
};

const sizeClasses = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.button>
  );
}
