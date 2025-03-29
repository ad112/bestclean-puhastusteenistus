
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";

const references = [
  {
    name: "Hange.ee klient",
    text: "Kiire ja korralik töö, kahjuks kõike päris puhtaks ei saanud, aga tööga võib rahule jääda.",
    project: "Akende pesu",
    date: "01.11.2024",
    rating: 5
  },
  {
    name: "Hange.ee klient",
    text: "Töö kiire ja korralik. Väga rahul.",
    project: "Tänavakivi paigaldus",
    date: "09.07.2024",
    rating: 5
  },
  {
    name: "Hange.ee klient",
    text: "Töö sai teostatud kiiresti. Hind oli väga mõistlik. Nädala pärast mõned kivid olid laiali valgunud aga mehed olid nõus tulema ja parandama. Haljastus kõnnitee ääres võiks olla veidi kvaliteetsem. Lubasid 2a garantiid.",
    project: "Tänavakivi paigaldus Viimsis (16m2)",
    date: "09.08.2023",
    rating: 5
  }
];

const References = () => {
  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Klientide tagasiside</h2>
        <p className="text-center text-gray-600 mb-12">
          <a 
            href="https://www.hange.ee/ettevote/55769/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Vaata lähemalt meie renomeed hange.ee keskkonnas
          </a>
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <a 
              href="https://www.hange.ee/ettevote/55769/"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block hover:no-underline group"
            >
              <Card className="hover:shadow-lg transition-shadow h-full border-2 border-transparent hover:border-primary group-hover:scale-[1.02] transition-all duration-200">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(reference.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">{reference.text}</p>
                    <div className="text-sm">
                      <p className="font-semibold">{reference.name}</p>
                      <p className="text-gray-500">{reference.project}</p>
                      <p className="text-gray-400 text-xs mt-1">{reference.date}</p>
                    </div>
                    <div className="flex items-center justify-end text-primary transition-transform group-hover:translate-x-1">
                      <span className="mr-1 text-sm font-medium">Loe rohkem</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
