import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professionaalne{" "}
            <span className="text-primary">puhastusteenistus</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Pakume kvaliteetseid kinnisvara hooldus- ja puhastusteenuseid ning
            tegeleme tänavakivide ja haljastustöödega.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Küsi hinnapakkumist
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView()}
            >
              Vaata teenuseid
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;