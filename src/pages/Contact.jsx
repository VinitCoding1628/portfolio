import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Calendar } from "lucide-react";
import { contactInfo } from "@/data/data";

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
      <div className="space-y-2 border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-emerald-400 uppercase">
          <Mail className="w-3.5 h-3.5" />
          <span>Contact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Get in Touch
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          Interested in working together or have questions about a project? Leave a message or connect directly.
        </p>
      </div>

      {/* Info Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-zinc-950/50 border border-white/[0.06] backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>EMAIL</span>
          </div>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-sm font-semibold text-white hover:text-amber-200 transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>

        <div className="p-4 rounded-2xl bg-zinc-950/50 border border-white/[0.06] backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>LOCATION</span>
          </div>
          <span className="text-sm font-semibold text-white">
            {contactInfo.location}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-zinc-950/50 border border-white/[0.06] backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            <span>AVAILABILITY</span>
          </div>
          <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {contactInfo.availability}
          </span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-3xl bg-zinc-950/60 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-md shadow-2xl">
        <h2 className="text-lg font-semibold text-white mb-6">
          Send a Direct Message
        </h2>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Message Delivered</h3>
            <p className="text-sm text-zinc-400 max-w-sm">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-400">MESSAGE</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
