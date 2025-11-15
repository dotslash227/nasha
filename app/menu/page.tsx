'use client';

import FadeIn from '@/components/FadeIn';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useMemo } from 'react';

export default function MenuPage() {
  const items = useMemo(() => ([
    { section: 'Café', name: 'Espresso', desc: 'Double shot, caramel crema', price: 180 },
    { section: 'Café', name: 'Flat White', desc: 'Velvety milk, rich ristretto', price: 240 },
    { section: 'Café', name: 'Cold Brew', desc: '12-hour steep, citrus finish', price: 260 },
    { section: 'Petit-Déjeuner', name: 'Sourdough Avocado', desc: 'Chilli crunch, pickled onions', price: 420 },
    { section: 'Petit-Déjeuner', name: 'Truffle Fries', desc: 'Parmesan snow, aioli', price: 380 },
    { section: 'Petit-Déjeuner', name: 'Harissa Chicken Bites', desc: 'Smoked yoghurt dip', price: 520 },
    { section: 'Signatures', name: 'Espresso Martini', desc: 'House vodka, vanilla, crema', price: 650 },
    { section: 'Signatures', name: 'Midnight Negroni', desc: 'Chocolate bitters twist', price: 690 },
    { section: 'Signatures', name: 'Smoked Rosemary G&T', desc: 'Juniper haze, tonic', price: 590 },
  ]), []);

  const groups: Record<string, typeof items> = items.reduce((acc: any, it) => {
    (acc[it.section] ||= []).push(it);
    return acc;
  }, {});

  return (
    <main>
      <Navbar />
      <div className="pt-16" />
      <FadeIn>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mt-6 sm:mt-10 mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Nos menu</h2>
            <p className="text-white/70 mt-2 max-w-2xl">Rituel matinal jusqu'aux rencontres de minuit - des boissons et des en-cas soigneusement sélectionnés pour s'accorder à l'ambiance.</p>
          </header>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(groups).map(([section, list]) => (
              <div key={section} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white font-semibold text-lg">{section}</h3>
                <ul className="mt-4 space-y-4">
                  {list.map((it) => (
                    <li key={it.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-white">{it.name}</p>
                        <p className="text-white/60 text-sm">{it.desc}</p>
                      </div>
                      <span className="text-white/80 text-sm whitespace-nowrap">$ {it.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-white font-semibold text-xl mt-12 mb-4">Vibes</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1521017432531-fbd92d1cf0b1?q=80&w=1400&auto=format&fit=crop',
            ].map((src, idx) => (
              <img key={src} src={src} alt={`Gallery ${idx + 1}`} className="w-full h-60 object-cover rounded-2xl border border-white/10" />
            ))}
          </div>
        </section>
      </FadeIn>
      <Footer />
    </main>
  );
}
