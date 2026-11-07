import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Calendar } from "lucide-react";
import { contactInfo } from "@/data/data";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <FadeIn className="space-y-2 border-b dark:border-white/8 border-black/8 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-500 dark:text-emerald-400 uppercase">
          <Mail className="w-3.5 h-3.5" />
          <span>Contact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white text-zinc-900">
          Get in Touch
        </h1>
        <p className="dark:text-zinc-400 text-zinc-600 text-sm sm:text-base max-w-xl">
          Interested in working together or have questions about a project? Leave a message or connect directly.
        </p>
      </FadeIn>

      {/* Info Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FadeIn delay={0.05} className="p-4 rounded-2xl dark:bg-zinc-950/50 bg-white/80 border dark:border-white/6 border-black/8 backdrop-blur-sm shadow-md h-full">
          <div className="flex items-center gap-2 text-xs dark:text-zinc-500 text-zinc-400 mb-1">
            <Mail className="w-3.5 h-3.5 dark:text-zinc-400 text-zinc-500" />
            <span>EMAIL</span>
          </div>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-sm font-semibold dark:text-white text-zinc-900 hover:text-blue-500 dark:hover:text-blue-200 transition-colors"
          >
            {contactInfo.email}
          </a>
        </FadeIn>

        <FadeIn delay={0.1} className="p-4 rounded-2xl dark:bg-zinc-950/50 bg-white/80 border dark:border-white/6 border-black/8 backdrop-blur-sm shadow-md h-full">
          <div className="flex items-center gap-2 text-xs dark:text-zinc-500 text-zinc-400 mb-1">
            <MapPin className="w-3.5 h-3.5 dark:text-zinc-400 text-zinc-500" />
            <span>LOCATION</span>
          </div>
          <span className="text-sm font-semibold dark:text-white text-zinc-900">
            {contactInfo.location}
          </span>
        </FadeIn>

        <FadeIn delay={0.15} className="p-4 rounded-2xl dark:bg-zinc-950/50 bg-white/80 border dark:border-white/6 border-black/8 backdrop-blur-sm shadow-md h-full">
          <div className="flex items-center gap-2 text-xs dark:text-zinc-500 text-zinc-400 mb-1">
            <Calendar className="w-3.5 h-3.5 dark:text-zinc-400 text-zinc-500" />
            <span>AVAILABILITY</span>
          </div>
          <span className="text-sm font-semibold text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
            {contactInfo.availability}
          </span>
        </FadeIn>
      </div>

      {/* Contact Form */}
      <FadeIn delay={0.12} className="rounded-3xl dark:bg-zinc-950/60 bg-white/80 border dark:border-white/8 border-black/8 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
        <h2 className="text-lg font-semibold dark:text-white text-zinc-900 mb-6">
          Send a Direct Message
        </h2>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold dark:text-white text-zinc-900">Message Delivered</h3>
            <p className="text-sm dark:text-zinc-400 text-zinc-600 max-w-sm">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono dark:text-zinc-400 text-zinc-600">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl dark:bg-white/3 bg-zinc-100/90 border dark:border-white/8 border-black/10 text-sm dark:text-white text-zinc-900 dark:placeholder-zinc-600 placeholder-zinc-400 focus:outline-none dark:focus:border-white/30 focus:border-zinc-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono dark:text-zinc-400 text-zinc-600">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl dark:bg-white/3 bg-zinc-100/90 border dark:border-white/8 border-black/10 text-sm dark:text-white text-zinc-900 dark:placeholder-zinc-600 placeholder-zinc-400 focus:outline-none dark:focus:border-white/30 focus:border-zinc-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono dark:text-zinc-400 text-zinc-600">MESSAGE</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-2.5 rounded-xl dark:bg-white/3 bg-zinc-100/90 border dark:border-white/8 border-black/10 text-sm dark:text-white text-zinc-900 dark:placeholder-zinc-600 placeholder-zinc-400 focus:outline-none dark:focus:border-white/30 focus:border-zinc-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl dark:bg-white dark:text-black bg-zinc-900 text-white font-semibold text-xs tracking-wider uppercase dark:hover:bg-zinc-200 hover:bg-zinc-800 transition-all active:scale-95 shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </FadeIn>
    </div>
  );
}
