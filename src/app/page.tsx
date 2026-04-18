"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const services = [
  {
    title: "Roof Repair & Replacement",
    description:
      "Full diagnoses, shingle and slate replacement, re-caulking, and complete roof replacements for residential and commercial properties.",
    image: "/images/roofing-crew.jpg",
    href: "/services",
  },
  {
    title: "Chimney Pointing & Repair",
    description:
      "Expert chimney repointing, flashing repair, and waterproofing to prevent costly interior damage from mortar deterioration.",
    image: "/images/chimney-flashing.jpg",
    href: "/services",
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, countertops, appliance installation, and complete layout redesigns tailored to your vision.",
    image: "/images/kitchen-remodel.jpg",
    href: "/services",
  },
];

const trustItems = [
  {
    label: "Licensed & Insured",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: "Free Estimates",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
  {
    label: "Interior & Exterior",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: "Pittsburgh, PA",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-28 pb-20">
          <ScrollReveal direction="none" duration={1}>
            <Image
              src="/images/logo.jpg"
              alt="Taylor General Contracting LLC"
              width={120}
              height={120}
              className="mx-auto rounded-lg mb-8 shadow-2xl"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Taylor General
              <br />
              Contracting
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-neutral-200 mb-2 font-light italic">
              Taylor Made for Perfection
            </p>
            <p className="text-base sm:text-lg text-neutral-400 mb-10">
              Interior &amp; Exterior From the Ground Up
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Request a Free Estimate
              </Button>
              <Button href="tel:4127080581" variant="outline" size="lg" className="border-white/30 text-white hover:border-white hover:text-white">
                412-708-0581
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-neutral-900 py-8 border-b border-neutral-800/60">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1} direction="none">
              <div className="flex flex-col items-center gap-2 text-accent">
                {item.icon}
                <span className="text-neutral-300 text-sm font-medium tracking-wide">
                  {item.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative h-[400px] sm:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/roof-repair.jpg"
                    alt="Roofing detail work"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-accent-dark rounded-xl hidden sm:flex items-center justify-center shadow-lg">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-xs uppercase tracking-wider">
                      Committed
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
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
                  same commitment to excellence.
                </p>
                <Button href="/services">
                  Explore Our Services
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Featured Services
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
              <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                From foundation to finish, we deliver quality craftsmanship on
                every project.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.15}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>
                    <Button href={service.href} variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Button href="/services" size="lg">
                View All Services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 sm:py-28 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                Don&apos;t just take our word for it — hear from homeowners
                across the Pittsburgh area.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <ReviewsCarousel />
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-accent to-accent-dark py-16">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch today for a free, no-obligation estimate. We&apos;ll
              work with you to bring your vision to life.
            </p>
            <Button href="tel:4127080581" variant="white" size="lg">
              Call 412-708-0581
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
