import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const references = [
  {
    name: "Tänavakivi paigaldus",
    text: "Töö kiire ja korralik. Väga rahul.",
    project: "Tänavakivide paigaldus",
    date: "09.07.2024",
    ratings: {
      speed: 5,
      quality: 5,
      price: 5,
      overall: 5.0
    }
  }
];

const References = () => {
  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Klientide tagasiside</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {references.map((reference, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{reference.name}</h3>
                      <p className="text-sm text-gray-500">{reference.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold">{reference.ratings.overall}</span>
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Töökiirus</p>
                      <div className="flex items-center gap-1">
                        <span>{reference.ratings.speed}</span>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600">Kvaliteet</p>
                      <div className="flex items-center gap-1">
                        <span>{reference.ratings.quality}</span>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600">Hind</p>
                      <div className="flex items-center gap-1">
                        <span>{reference.ratings.price}</span>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{reference.text}</p>
                  <p className="text-gray-500 text-sm">{reference.project}</p>
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