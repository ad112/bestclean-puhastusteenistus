import { Leaf, Spray, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Puhastusteenused",
    description:
      "Professionaalne puhastusteenus nii era- kui äriklientidele. Tagame puhtad ja hooldatud pinnad.",
    icon: Spray,
  },
  {
    title: "Tänavakivide paigaldus",
    description:
      "Kvaliteetne tänavakivide paigaldus ja hooldus. Loome kestvaid ja esteetilisi lahendusi.",
    icon: Home,
  },
  {
    title: "Haljastustööd",
    description:
      "Terviklikud haljastuslahendused. Hoiame teie aia ja ümbruse korras ning kaunina.",
    icon: Leaf,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meie teenused</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;