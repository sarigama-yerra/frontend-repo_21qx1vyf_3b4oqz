const products = [
  { id: 1, name: "House Blend", price: 12.99, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1887&auto=format&fit=crop" },
  { id: 2, name: "Single Origin Ethiopia", price: 15.5, image: "https://images.unsplash.com/photo-1615221319972-575b2b715460?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3VzZSUyMEJsZW5kfGVufDB8MHx8fDE3NjM2MjAwODV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 3, name: "Colombia Supremo", price: 14.25, image: "https://images.unsplash.com/photo-1615221319972-575b2b715460?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3VzZSUyMEJsZW5kfGVufDB8MHx8fDE3NjM2MjAwODV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 4, name: "Espresso Roast", price: 13.75, image: "https://images.unsplash.com/photo-1615221319972-575b2b715460?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3VzZSUyMEJsZW5kfGVufDB8MHx8fDE3NjM2MjAwODV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 5, name: "Decaf Blend", price: 12.5, image: "https://images.unsplash.com/photo-1615221319972-575b2b715460?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3VzZSUyMEJsZW5kfGVufDB8MHx8fDE3NjM2MjAwODV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 6, name: "Cold Brew Pack", price: 16.0, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1887&auto=format&fit=crop" },
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-[#1f140f] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-amber-50">Our Coffee</h2>
            <p className="text-amber-200/80 mt-1">Freshly roasted selections from around the world</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-amber-50 font-semibold">
            Get in touch
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl overflow-hidden bg-amber-900/10 border border-amber-800/40">
              <div className="relative h-48">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-amber-50 font-semibold">{p.name}</h3>
                  <span className="text-amber-300 font-bold">${p.price.toFixed(2)}</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 rounded-lg bg-amber-700/30 hover:bg-amber-700/40 text-amber-100 border border-amber-700/40">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
