import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const references = [
  {
    name: "Kristiina",
    text: "Väga meeldiv koostöö. Töö sai tehtud kiiresti ja kvaliteetselt. Soovitan!",
    project: "Koristusteenus",
    date: "27.02.2024",
    rating: 5
  },
  {
    name: "Marika",
    text: "Kiire ja kvaliteetne töö. Jäin väga rahule!",
    project: "Koristusteenus",
    date: "26.02.2024",
    rating: 5
  },
  {
    name: "Kristel",
    text: "Väga hea teenus, soovitan!",
    project: "Koristusteenus",
    date: "23.02.2024",
    rating: 5
  }
];

const References = () => {
  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Klientide tagasiside</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;