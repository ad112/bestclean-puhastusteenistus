import { Card, CardContent } from "@/components/ui/card";

const references = [
  {
    name: "Näidis Klient 1",
    text: "Väga professionaalne teenus. Töö tehti kiiresti ja kvaliteetselt.",
    project: "Kontoriruumide puhastus",
  },
  {
    name: "Näidis Klient 2",
    text: "Suurepärane tänavakivide paigaldus. Tulemus ületas ootusi.",
    project: "Tänavakivide paigaldus",
  },
  {
    name: "Näidis Klient 3",
    text: "Meeldiv koostöö ja professionaalne lähenemine haljastustöödele.",
    project: "Haljastustööd",
  },
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
                  <p className="text-gray-600 italic">{reference.text}</p>
                  <div className="text-sm">
                    <p className="font-semibold">{reference.name}</p>
                    <p className="text-gray-500">{reference.project}</p>
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