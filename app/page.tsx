'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16" />

      <FadeIn>
        {/* Hero */}
        <section className="relative isolate h-[88vh] min-h-[560px] w-full overflow-hidden rounded-b-[2.5rem] border-b border-white/10">
          <div className="absolute inset-0 -z-10">
            <img
  src="https://images.unsplash.com/photo-1417353783325-14cb8f9ba1dd?q=80&w=1920&auto=format&fit=crop"
  alt="Cafe ambience"
  className="w-full h-full object-cover"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div
              className="pointer-events-none absolute inset-0 mix-blend-screen opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(closest-side, rgba(236,72,153,.35), transparent 60%), radial-gradient(closest-side, rgba(168,85,247,.35), transparent 60%)',
                backgroundSize: '60% 60%, 60% 60%',
                backgroundPosition: '-10% 120%, 110% -20%',
              }}
            />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
            <motion.h1
              className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Bistro le jour. <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">Musique</span> la nuit.
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl text-white/80"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              Le nouveau bistrot spécialisé de Montréal, au cœur de Little Burgundy, servant de délicieux petits-déjeuners anglais et sud-indiens ainsi que des dîners savoureux, le tout accompagné d’une énergie musicale IndoHouse.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <a
                href="/menu"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-black bg-white hover:bg-white/90 transition"
              >
                Découvrir le menu
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition"
              >
                Réservations
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Single-Origin', desc: 'Seasonal roasts from small farms, dialed-in daily.', img: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66f?q=80&w=1200&auto=format&fit=crop' },
              { title: 'Small Plates', desc: 'Shareable bites with a midnight twist.', img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
              { title: 'Live DJs', desc: 'Friday/Saturday sets bring a neon glow.', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop' },
            ].map((c, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img src={c.img} alt={c.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="text-white font-semibold">{c.title}</h3>
                  <p className="text-white/70 text-sm mt-2">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Banner */}
        <section className="mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-violet-500/20 p-6 sm:p-10">
              <div
                className="absolute inset-0 -z-10 opacity-50"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 30%, rgba(236,72,153,0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.25), transparent 50%)',
                }}
              />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-white text-2xl font-semibold">This Weekend: Night Brew Sessions</h3>
                  <p className="text-white/80 mt-1">Guest DJ • Signature espresso martinis • Limited plates after 10pm</p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-black bg-white hover:bg-white/90 transition"
                >
                  Get On The List
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <Footer />
    </main>
  );
}
