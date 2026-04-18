import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Taylor General Contracting LLC"
              width={40}
              height={40}
              className="rounded"
            />
            <div>
              <div className="text-white font-bold">
                Taylor General Contracting LLC
              </div>
              <div className="text-neutral-500 text-xs">
                Taylor Made for Perfection
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-8 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
            <div>
              &copy; {new Date().getFullYear()} Taylor General Contracting LLC.
              All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="tel:4127080581"
                className="hover:text-white transition-colors duration-300"
              >
                412-708-0581
              </a>
              <a
                href="mailto:frank.taylor.contracting@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                frank.taylor.contracting@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
