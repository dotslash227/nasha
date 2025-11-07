export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold">Nasha Bistro</h3>
          <p className="mt-2 text-sm">
            Where coffee meets after-hours energy. Specialty brews, small plates, and weekend DJ sets.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium">Hours</h4>
          <p className="mt-2 text-sm">
            Mon–Thu: 8:00–22:00<br/>Fri–Sat: 8:00–01:00<br/>Sun: 9:00–20:00
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium">Contact</h4>
          <p className="mt-2 text-sm">
            2472 Notre-Dame St W<br/>514-903-2472<br/>
            <a href="mailto:hello@nashabistro.ca" className="hover:underline">hello@nashabistro.ca</a>
          </p>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} <a href="https://nashabistro.ca" className="hover:underline">nashabistro.ca</a> · All rights reserved.
      </div>
    </footer>
  );
}
