import Image from "next/image";

const services = [
  {
    title: "Roof Repair & Replacement",
    description:
      "We diagnose leaks and replace missing shingle or slate, re-caulk around chimneys and flashing, and tar over exposed nails. Full roof replacements available for residential and commercial properties.",
    image: "/images/roofing-crew.jpg",
  },
  {
    title: "Gutter Repair & Cleaning",
    description:
      "Leaking and damaged gutters lead to interior damage to your home. If you see moss growing around your gutters or brick, you have water problems. We repair, clean, and replace gutters to protect your property.",
    image: "/images/exterior-renovation.jpg",
  },
  {
    title: "Chimney Pointing",
    description:
      "Missing mortar in chimneys leads to leaks that eventually show inside your home. We restore and repoint chimneys, repair flashing, and waterproof to prevent costly interior damage.",
    image: "/images/chimney-flashing.jpg",
  },
  {
    title: "Interior & Exterior Painting",
    description:
      "Prep is the key to a good paint job. If your home is not sanded and prepped properly, that paint job will not last. We do it right the first time, inside and out.",
    image: "/images/interior-painting.jpg",
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen with custom cabinetry, countertops, appliance installation, and complete layout redesigns tailored to your vision.",
    image: "/images/kitchen-remodel.jpg",
  },
  {
    title: "Masonry & Brickwork",
    description:
      "Expert brick laying, tuckpointing, and stone work. We restore and build with precision craftsmanship that stands the test of time.",
    image: "/images/brickwork.jpg",
  },
];

const galleryImages = [
  { src: "/images/historic-restoration.jpg", alt: "Historic home restoration" },
  { src: "/images/roofing-crew.jpg", alt: "Roofing crew at work" },
  { src: "/images/kitchen-remodel.jpg", alt: "Kitchen remodel in progress" },
  { src: "/images/chimney-flashing.jpg", alt: "Chimney flashing repair" },
  { src: "/images/exterior-renovation.jpg", alt: "Exterior renovation project" },
  { src: "/images/interior-painting.jpg", alt: "Interior painting project" },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Taylor General Contracting LLC"
                width={48}
                height={48}
                className="rounded"
              />
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg leading-tight">
                  Taylor General Contracting
                </div>
                <div className="text-neutral-400 text-xs tracking-wider uppercase">
                  Taylor Made for Perfection
                </div>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-neutral-300 hover:text-white transition-colors text-sm tracking-wide uppercase"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-neutral-300 hover:text-white transition-colors text-sm tracking-wide uppercase"
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-neutral-300 hover:text-white transition-colors text-sm tracking-wide uppercase"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                Get a Quote
              </a>
            </div>
            {/* Mobile CTA */}
            <a
              href="tel:4127080581"
              className="md:hidden bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Taylor General
            <br />
            Contracting
          </h1>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-xl sm:text-2xl text-neutral-200 mb-2 font-light italic">
            Taylor Made for Perfection
          </p>
          <p className="text-base sm:text-lg text-neutral-300 mb-10">
            Interior &amp; Exterior From the Ground Up
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-lg font-semibold tracking-wide uppercase transition-colors"
            >
              Request a Free Estimate
            </a>
            <a
              href="tel:4127080581"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold tracking-wide uppercase transition-colors"
            >
              412-708-0581
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-neutral-900 py-8 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Licensed & Insured", icon: "shield" },
            { label: "Free Estimates", icon: "clipboard" },
            { label: "Interior & Exterior", icon: "home" },
            { label: "Pittsburgh, PA", icon: "pin" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <TrustIcon type={item.icon} />
              <span className="text-neutral-300 text-sm font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 bg-neutral-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              From foundation to finish, we deliver quality craftsmanship on
              every project. No job is too big or too small.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative h-[400px] sm:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/images/roof-repair.jpg"
                  alt="Roofing detail work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-xl hidden sm:flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-xs uppercase tracking-wider">
                    Committed
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Built on Quality.
                <br />
                Driven by Pride.
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-6" />
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                Taylor General Contracting LLC is a full-service general
                contractor proudly serving the greater Pittsburgh area. We
                specialize in both interior and exterior construction, from
                complete home renovations to targeted repairs.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our team brings years of hands-on experience to every project.
                Whether it&apos;s restoring a historic property, replacing a
                roof, or remodeling your kitchen, we approach each job with the
                same commitment to excellence. When we say &ldquo;Taylor Made
                for Perfection,&rdquo; we mean it.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Residential",
                  "Commercial",
                  "New Construction",
                  "Renovations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 sm:py-28 bg-neutral-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Work
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              A look at some of our recent projects across the Pittsburgh area.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation estimate. We&apos;ll
            work with you to bring your vision to life.
          </p>
          <a
            href="tel:4127080581"
            className="inline-block bg-white text-accent hover:bg-neutral-100 px-10 py-4 rounded-lg text-lg font-bold tracking-wide uppercase transition-colors"
          >
            Call 412-708-0581
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Get In Touch
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-6" />
              <p className="text-neutral-600 mb-10 text-lg leading-relaxed">
                Have a project in mind? We&apos;d love to hear about it. Reach
                out for a free estimate and let&apos;s discuss how we can help.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Phone</div>
                    <a
                      href="tel:4127080581"
                      className="text-accent hover:text-accent-dark text-lg"
                    >
                      412-708-0581
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                    <EmailIcon />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Email</div>
                    <a
                      href="mailto:frank.taylor.contracting@gmail.com"
                      className="text-accent hover:text-accent-dark text-lg"
                    >
                      frank.taylor.contracting@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
                    <LocationIcon />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      Service Area
                    </div>
                    <div className="text-neutral-600">
                      Greater Pittsburgh, PA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-8 sm:p-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                Request a Free Estimate
              </h3>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="(412) 555-0123"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-lg text-sm font-semibold tracking-wide uppercase transition-colors"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
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
            </div>
            <div className="flex items-center gap-8 text-sm">
              <a
                href="#services"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Taylor General Contracting LLC.
            All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

function TrustIcon({ type }: { type: string }) {
  const iconClass = "w-8 h-8 text-accent";
  switch (type) {
    case "shield":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      );
    case "home":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case "pin":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      );
    default:
      return null;
  }
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}
