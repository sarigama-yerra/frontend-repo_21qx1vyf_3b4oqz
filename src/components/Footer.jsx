import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a120d] border-t border-amber-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-amber-50 font-semibold">B!el Coffee</h4>
            <p className="text-amber-200/70 text-sm mt-2">Natural coffee, roasted fresh and served with care.</p>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold">Visit</h4>
            <p className="text-amber-200/70 text-sm mt-2 flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5" />
              123 Brew Lane, Roast City
            </p>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold">Contact</h4>
            <p className="text-amber-200/70 text-sm mt-2 flex items-center gap-2"><Phone className="w-4 h-4" /> (555) 123-4567</p>
            <p className="text-amber-200/70 text-sm mt-2 flex items-center gap-2"><Mail className="w-4 h-4" /> hello@biel.coffee</p>
          </div>
          <div>
            <h4 className="text-amber-50 font-semibold">Hours</h4>
            <p className="text-amber-200/70 text-sm mt-2">Mon–Fri: 7am – 6pm</p>
            <p className="text-amber-200/70 text-sm">Sat–Sun: 8am – 5pm</p>
          </div>
        </div>
        <div className="mt-10 border-t border-amber-900/20 pt-6 text-sm text-amber-400/70">
          © {new Date().getFullYear()} B!el Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
