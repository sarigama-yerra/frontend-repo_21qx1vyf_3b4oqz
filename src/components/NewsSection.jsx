const articles = [
  {
    id: 1,
    title: "Announcing Our New Seasonal Blend",
    date: "Nov 15, 2025",
    excerpt: "Notes of caramel, orange blossom, and cocoa — available for a limited time.",
    image: "https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "How We Source: Visiting Partner Farms",
    date: "Oct 28, 2025",
    excerpt: "A look behind the scenes at our relationships with growers.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cold Brew Tips for Perfect Home Brewing",
    date: "Oct 10, 2025",
    excerpt: "Simple steps to get a smooth, refreshing cold brew every time.",
    image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-[#1f140f] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-amber-50">Latest News</h2>
            <p className="text-amber-200/80 mt-1">Stories and updates from the roastery</p>
          </div>
          <a href="#news" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-amber-50 border border-white/20">
            View all
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.id} className="rounded-2xl overflow-hidden bg-amber-900/10 border border-amber-800/40">
              <div className="h-40">
                <img src={a.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-amber-300/80">{a.date}</p>
                <h3 className="mt-1 font-semibold text-amber-50">{a.title}</h3>
                <p className="mt-2 text-sm text-amber-200/80">{a.excerpt}</p>
                <a href="#" className="mt-4 inline-flex text-amber-300 hover:text-amber-200">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
