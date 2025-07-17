
import { Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative z-10 px-6 py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          {/* Moroccan Flag + Shield Icon */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-green-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25">
                <Shield className="h-8 w-8 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping" />
            </div>
            <div className="text-sm text-gray-400">
              <span className="block">🇲🇦 Kingdom of Morocco</span>
              <span className="text-red-400">National Cybersecurity Platform</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Defend</span>
              <span className="block text-red-500 animate-pulse">Morocco's</span>
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Join the first national bug bounty platform to protect Moroccan cyberspace.
              Connect ethical hackers with organizations for a secure digital nation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg shadow-lg shadow-red-500/25">
              Start Hunting Bugs
              <Zap className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">500+</div>
              <div className="text-sm text-gray-400">Active Hunters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">50+</div>
              <div className="text-sm text-gray-400">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">1000+</div>
              <div className="text-sm text-gray-400">Vulnerabilities Fixed</div>
            </div>
          </div>
        </div>

        {/* Right Side - Futuristic Visual */}
        <div className="relative">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Central Glowing Orb */}
            <div className="relative z-10 w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 rounded-full animate-spin-slow opacity-75" />
              <div className="absolute inset-4 bg-black rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-br from-red-400 to-blue-400 rounded-full animate-pulse" />
              <div className="absolute inset-16 bg-black rounded-full flex items-center justify-center">
                <Shield className="h-20 w-20 text-red-500 animate-pulse" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full animate-ping" />
            <div className="absolute top-20 right-10 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-150" />
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-green-500 rounded-full animate-ping delay-300" />
            <div className="absolute bottom-10 right-20 w-3 h-3 bg-yellow-500 rounded-full animate-ping delay-500" />

            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-30">
              <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-red-500/20" />
                ))}
              </div>
            </div>

            {/* Scanning Lines */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan" />
              <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-scan-vertical" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
