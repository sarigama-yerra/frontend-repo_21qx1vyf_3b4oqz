import { Menu, Coffee, MapPin, Phone, Info, Newspaper, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "News", href: "#news" },
    { label: "Find Us", href: "#findus" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/70 dark:bg-[#1b110c]/70 rounded-2xl border border-amber-900/20 shadow-lg">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow">
                <Coffee className="w-6 h-6" />
              </div>
              <div className="leading-tight">
                <p className="text-xs tracking-wider uppercase text-amber-900/70">Welcome to</p>
                <p className="text-xl font-extrabold tracking-tight text-amber-900">B!el Coffee</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-amber-900/80 hover:text-amber-900 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#products" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-900 text-amber-50 hover:bg-amber-800 transition-colors">
                <ShoppingBag className="w-4 h-4" />
                <span className="text-sm font-semibold">Shop</span>
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-amber-900 hover:bg-amber-900/10">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-amber-900/10 px-4 pb-4">
              <div className="grid gap-2 pt-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white/80 text-amber-900"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-3">
                <a href="#findus" className="inline-flex items-center gap-2 text-amber-900/80">
                  <MapPin className="w-4 h-4" /> Find Us
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 text-amber-900/80">
                  <Phone className="w-4 h-4" /> Contact
                </a>
                <a href="#news" className="inline-flex items-center gap-2 text-amber-900/80">
                  <Newspaper className="w-4 h-4" /> News
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
