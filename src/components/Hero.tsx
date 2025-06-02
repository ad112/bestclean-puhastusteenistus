
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Enhanced Background with Multiple Gradient Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-orange-200/15"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-100/20 to-primary/5"></div>
      
      {/* Animated Geometric Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-primary/15 to-orange-300/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-gradient-to-tr from-orange-200/40 to-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-bl from-primary/25 to-blue-200/30 rounded-full blur-lg animate-pulse delay-500"></div>
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-tr from-blue-100/30 to-primary/15 rounded-full blur-xl animate-pulse delay-700"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400/50 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-2/3 right-1/2 w-1 h-1 bg-primary/60 rounded-full animate-bounce delay-500"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl">
          <div className="relative bg-white/85 backdrop-blur-xl p-10 md:p-16 rounded-3xl shadow-2xl border border-white/30 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 text-gray-900 leading-[0.9] tracking-tight">
                Professionaalne{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    puhastusteenistus
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-orange-500/20 to-orange-600/20 blur-sm -z-10"></div>
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-12 font-medium leading-relaxed max-w-4xl">
                Pakume kvaliteetseid kinnisvara hooldus- ja puhastusteenuseid ning
                tegeleme tänavakivide ja haljastustöödega.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <Button
                  size="lg"
                  className="group relative bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-500 text-white px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 rounded-2xl border-2 border-white/20"
                  onClick={() => scrollToSection("footer")}
                >
                  <span className="relative z-10">Küsi hinnapakkumist</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="group relative bg-white/95 hover:bg-white border-3 border-primary/30 hover:border-primary text-gray-700 hover:text-primary px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 rounded-2xl backdrop-blur-sm"
                >
                  <span className="relative z-10">Vaata teenuseid</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 via-gray-50/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent"></div>
    </div>
  );
};

export default Hero;
