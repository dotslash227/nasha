export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold">Nasha Bistro</h3>
          <p className="mt-2 text-sm">
            Là où le café rencontre l'énergie des soirées. Cafés de spécialité, petites assiettes et DJ sets IndoHouse le week-end. //
            Where coffee meets after-hours energy. Specialty brews, small plates, and weekend IndoHouse DJ sets.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium">Hours</h4>
          <p className="mt-2 text-sm">
            Lundi à Jeudi: 8h–22h<br/>Vendredi–Samedi: 8h - 3h<br/>Dimanche: 9h-20h
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium">Contact</h4>
          <p className="mt-2 text-sm">
            2472 Notre-Dame St W<br/>514-903-2472<br/>
            <a href="mailto:hello@nashabistro.ca" className="hover:underline">bonjour@nashabistro.ca</a>
          </p>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} <a href="https://nashabistro.ca" className="hover:underline">Nasha Bistro</a> · Designed by DJDroov.
      </div>
    </footer>
  );
}
