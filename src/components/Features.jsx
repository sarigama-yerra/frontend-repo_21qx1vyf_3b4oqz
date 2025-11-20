import { Bean, CupSoda, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    title: "Ethically Sourced",
    desc: "Beans from sustainable farms with fair-trade partnerships.",
    icon: Bean,
  },
  {
    title: "Roasted Fresh",
    desc: "Small-batch roasting to bring out nuanced flavors.",
    icon: CupSoda,
  },
  {
    title: "Quality Assured",
    desc: "Meticulous cupping and testing for consistent excellence.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    desc: "From roaster to your cup with swift nationwide shipping.",
    icon: Truck,
  },
];

export default function Features() {
  return (
    <section id="about" className="bg-[#1f140f] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-50">Why B!el Coffee</h2>
          <p className="mt-3 text-amber-200/80">A focus on quality, sustainability, and community.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-700/30 p-6 text-amber-50 hover:from-amber-900/30 hover:to-amber-800/20 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-700/20 text-amber-300 mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-amber-200/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
