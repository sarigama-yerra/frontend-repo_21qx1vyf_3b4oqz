export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[540px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2060&auto=format&fit=crop"
          alt="Coffee beans background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-amber-300 tracking-widest uppercase text-sm mb-3">B!el Coffee</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            Natural Coffee,
            <br />
            Crafted with Heart
          </h1>
          <p className="mt-4 text-amber-50/90 text-lg">
            Sourced ethically, roasted to perfection, and brewed fresh. Discover the warmth of our blends.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#products" className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-amber-50 font-semibold shadow-lg shadow-amber-900/30">
              Explore Products
            </a>
            <a href="#about" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/20 font-semibold">
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48L60 58.7C120 69 240 91 360 88C480 85 600 59 720 58.7C840 59 960 85 1080 98.7C1200 112 1320 112 1380 112H1440V120H0V48Z" fill="#1f140f" fillOpacity="1" />
      </svg>
    </section>
  );
}
