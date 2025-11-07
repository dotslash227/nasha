'use client';

import FadeIn from '@/components/FadeIn';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16" />
      <FadeIn>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mt-6 sm:mt-10 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact & Reservations</h2>
            <p className="text-white/70 mt-2 max-w-2xl">
              Drop in, book a table, or enquire about private events. We’ll get back within 24 hours.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-2">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-white/80 mb-1" htmlFor="name">Name</label>
                  <input id="name" required className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-pink-500/60" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1" htmlFor="phone">Phone</label>
                  <input id="phone" required className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-pink-500/60" placeholder="(+91)" />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1" htmlFor="date">Date</label>
                  <input id="date" type="date" required className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-pink-500/60" />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1" htmlFor="time">Time</label>
                  <input id="time" type="time" required className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-pink-500/60" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-white/80 mb-1" htmlFor="guests">Guests</label>
                  <input id="guests" type="number" min={1} defaultValue={2} className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-pink-500/60" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-white/80 mb-1" htmlFor="notes">Notes</label>
                  <textarea id="notes" rows={4} className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-pink-500/60" placeholder="Allergies, occasion, seating preference…" />
                </div>
              </div>
              <button type="submit" className="mt-5 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-black bg-white hover:bg-white/90 transition">
                Request Reservation
              </button>
            </form>

            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white font-semibold">Find Us</h3>
                <p className="text-white/70 text-sm mt-2">2472 Notre-Dame St W, Montreal, Quebec H3J 1N5</p>
                <div className="mt-4 grid gap-3 text-sm text-white/80">
                  <p><span className="text-white/60">Phone:</span> (514) 903-2472</p>
                  <p><span className="text-white/60">Email:</span> hello@nashabistro.ca</p>
                  <p><span className="text-white/60">Hours:</span> Mon–Thu 8:00–22:00 · Fri–Sat 8:00–01:00 · Sun 9:00–20:00</p>
                </div>
              </div>
              <div className="h-64 w-full border-t border-white/10">
                <iframe
                  title="Nasha Bistro Map"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-73.5869%2C45.4858%2C-73.5785%2C45.4890&layer=mapnik&marker=45.4874%2C-73.5827"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      <Footer />
    </main>
  );
}
