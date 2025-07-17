
import { Shield, Zap, Globe, ArrowRight, Eye, Target, Lock } from "lucide-react";
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
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 via-green-600 to-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/50 animate-pulse">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce" />
            </div>
            <div className="text-sm text-gray-300">
              <span className="block text-lg">🇲🇦 Kingdom of Morocco</span>
              <span className="text-red-400 font-semibold">National Cybersecurity Platform</span>
            </div>
          </div>

          {/* Main Heading with Typing Effect */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-bold leading-tight">
              <span className="block animate-fade-in">Defend</span>
              <span className="block text-red-500 animate-pulse">Morocco's</span>
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                Digital Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Join the first <span className="text-red-400 font-semibold">national bug bounty platform</span> to protect Moroccan cyberspace.
              Connect ethical hackers with organizations for a secure digital nation.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-xl shadow-lg shadow-red-500/50 hover:shadow-red-500/75 transition-all duration-300 hover:scale-105 group">
              Start Hunting Bugs
              <Zap className="ml-3 h-6 w-6 group-hover:animate-bounce" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-10 py-5 text-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group">
              Learn More
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Enhanced Quick Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-red-500 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm text-gray-400">Active Hunters</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-blue-500 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm text-gray-400">Partner Organizations</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-green-500 group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-sm text-gray-400">Vulnerabilities Fixed</div>
            </div>
          </div>
        </div>

        {/* Right Side - Enhanced Futuristic Visual */}
        <div className="relative">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Central Interactive Orb */}
            <div className="relative z-10 w-96 h-96 mx-auto group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 rounded-full animate-spin-slow opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-4 bg-black rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-br from-red-400 to-blue-400 rounded-full animate-pulse group-hover:animate-bounce" />
              <div className="absolute inset-16 bg-black rounded-full flex items-center justify-center">
                <Shield className="h-24 w-24 text-red-500 animate-pulse group-hover:scale-110 transition-transform" />
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <Target className="h-6 w-6 text-red-500 animate-pulse" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <Eye className="h-6 w-6 text-blue-500 animate-pulse" />
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                  <Lock className="h-6 w-6 text-green-500 animate-pulse" />
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                  <Globe className="h-6 w-6 text-yellow-500 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute top-10 left-10 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-60" />
            <div className="absolute top-20 right-10 w-4 h-4 bg-blue-500 rounded-full animate-ping delay-150 opacity-60" />
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-500 rounded-full animate-ping delay-300 opacity-60" />
            <div className="absolute bottom-10 right-20 w-5 h-5 bg-yellow-500 rounded-full animate-ping delay-500 opacity-60" />
            <div className="absolute top-1/3 right-5 w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-700 opacity-60" />
            <div className="absolute bottom-1/3 left-5 w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-1000 opacity-60" />

            {/* Enhanced Grid Lines */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="border border-red-500/30 hover:border-red-500/60 transition-colors" />
                ))}
              </div>
            </div>

            {/* Multiple Scanning Lines */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan" />
              <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-scan-vertical" />
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-scan delay-1000" style={{ top: '66%' }} />
              <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent animate-scan-vertical delay-2000" style={{ left: '75%' }} />
            </div>

            {/* Radar-like circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border border-red-500/20 rounded-full animate-ping" />
              <div className="absolute w-64 h-64 border border-blue-500/20 rounded-full animate-ping delay-500" />
              <div className="absolute w-80 h-80 border border-green-500/20 rounded-full animate-ping delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
