
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-orange-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-orange-200/30 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/20 rounded-full blur-md"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 leading-tight">
              Professionaalne{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                puhastusteenistus
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 font-medium leading-relaxed">
              Pakume kvaliteetseid kinnisvara hooldus- ja puhastusteenuseid ning
              tegeleme tänavakivide ja haljastustöödega.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("footer")}
              >
                Küsi hinnapakkumist
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="bg-white/90 hover:bg-white border-2 border-primary/20 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Vaata teenuseid
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero;
