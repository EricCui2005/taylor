"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!form.message.trim()) errs.message = "Please describe your project";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(
    field: keyof FormState,
    value: string
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const inputBase =
    "w-full border rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300 bg-white";
  const inputNormal = "border-neutral-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,16,46,0.08)]";
  const inputError = "border-red-400 focus:border-red-500 bg-red-50/50";

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Ready to discuss your project? Reach out for a free,
              no-obligation estimate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                  Get In Touch
                </h2>
                <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                <p className="text-neutral-600 mb-10 text-lg leading-relaxed">
                  Have a project in mind? We&apos;d love to hear about it. Reach
                  out for a free estimate and let&apos;s discuss how we can help.
                </p>
                <div className="space-y-6">
                  <ContactInfo
                    icon={<PhoneIcon />}
                    label="Phone"
                    value="412-708-0581"
                    href="tel:4127080581"
                  />
                  <ContactInfo
                    icon={<EmailIcon />}
                    label="Email"
                    value="frank.taylor.contracting@gmail.com"
                    href="mailto:frank.taylor.contracting@gmail.com"
                  />
                  <ContactInfo
                    icon={<LocationIcon />}
                    label="Service Area"
                    value="Greater Pittsburgh, PA"
                  />
                </div>

                <div className="mt-10 p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    Business Hours
                  </h3>
                  <div className="space-y-1 text-neutral-600 text-sm">
                    <p>Monday – Friday: 7:00 AM – 6:00 PM</p>
                    <p>Saturday: 8:00 AM – 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right">
              <div className="bg-neutral-50 rounded-xl p-8 sm:p-10 border border-neutral-100">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
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
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-neutral-600">
                      We&apos;ve received your request and will be in touch
                      shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-neutral-900 mb-6">
                      Request a Free Estimate
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 mb-1"
                        >
                          Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
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
                            value={form.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            className={`${inputBase} ${inputNormal}`}
                            placeholder="(412) 555-0123"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-700 mb-1"
                          >
                            Email <span className="text-accent">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={form.email}
                            onChange={(e) =>
                              handleChange("email", e.target.value)
                            }
                            className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                            placeholder="you@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-neutral-700 mb-1"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) =>
                            handleChange("service", e.target.value)
                          }
                          className={`${inputBase} ${inputNormal}`}
                        >
                          <option value="">Select a service...</option>
                          <option>Roof Repair & Replacement</option>
                          <option>Gutter Repair & Cleaning</option>
                          <option>Chimney Pointing & Repair</option>
                          <option>Interior & Exterior Painting</option>
                          <option>Kitchen Remodeling</option>
                          <option>Masonry & Brickwork</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-neutral-700 mb-1"
                        >
                          Project Details{" "}
                          <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
                          placeholder="Tell us about your project..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Send Request
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-neutral-900">{label}</div>
        {href ? (
          <a
            href={href}
            className="text-accent hover:text-accent-dark text-lg transition-colors duration-300"
          >
            {value}
          </a>
        ) : (
          <div className="text-neutral-600 text-lg">{value}</div>
        )}
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}
