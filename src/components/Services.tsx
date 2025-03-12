
import { Leaf, Home, BrickWall } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Puhastusteenused",
    description:
      "Professionaalne puhastusteenus nii era- kui äriklientidele. Tagame puhtad ja hooldatud pinnad. Meie kogenud meeskond kasutab kaasaegseid seadmeid ja vahendeid, et pakkuda kvaliteetset tulemust.",
    icon: Home,
    image: "/lovable-uploads/c90350d8-5b7b-43eb-b19c-20fa989af30f.png"
  },
  {
    title: "Tänavakivide paigaldus",
    description:
      "Kvaliteetne tänavakivide paigaldus ja hooldus. Loome kestvaid ja esteetilisi lahendusi. Pakume mitmesuguseid tänavakivide mustreid ja värve, et sobituda teie kodu või ärihoone stiiliga.",
    icon: BrickWall,
    image: "/lovable-uploads/83a0d81d-f409-4c30-b88e-8b4985382bc6.png"
  },
  {
    title: "Haljastustööd",
    description:
      "Terviklikud haljastuslahendused. Hoiame teie aia ja ümbruse korras ning kaunina. Meie teenused hõlmavad taimede istutamist, muru hooldust, puude ja põõsaste lõikamist ning üldist maastikukujundust.",
    icon: Leaf,
    image: "/lovable-uploads/4f96b59c-b99a-4736-a3dd-3004818f7f39.png"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meie teenused</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Pakume laia valikut kvaliteetseid teenuseid, mis on kohandatud vastavalt teie vajadustele
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-primary transition-colors overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
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
