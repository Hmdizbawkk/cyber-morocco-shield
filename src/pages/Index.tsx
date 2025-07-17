
import { Shield, Users, Building2, Lock, Zap, Globe, ArrowRight, CheckCircle, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import MatrixRain from "@/components/MatrixRain";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Matrix Rain Effect */}
      <MatrixRain />

      {/* Enhanced Cyberpunk Grid Background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        {/* Animated scanning lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-scan" />
          <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-scan-vertical" />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rotate-45 animate-ping opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-500 animate-pulse opacity-40" />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-green-500 animate-bounce opacity-50" />
      </div>

      {/* Enhanced Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 border-b border-red-500/30 backdrop-blur-md bg-black/20">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Shield className="h-8 w-8 text-red-500 animate-pulse" />
            <div className="absolute inset-0 h-8 w-8 text-red-500/30 animate-ping" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-blue-400 to-green-400 bg-clip-text text-transparent animate-pulse">
            BugHunters.ma
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how" className="text-gray-300 hover:text-red-400 transition-all duration-300 hover:glow-red px-3 py-1 rounded">How It Works</a>
          <a href="#stats" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:glow-blue px-3 py-1 rounded">Statistics</a>
          <a href="#partners" className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:glow-green px-3 py-1 rounded">Partners</a>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white neon-border transition-all duration-300">
            Contact
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Enhanced Main CTA Cards */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-red-500 animate-pulse">Mission</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Join Morocco's cybersecurity defense network. Whether you're a white-hat hacker or an organization, we have your entry point.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* BugHunter Card */}
            <Card className="bg-black/80 border-red-500/50 hover:border-red-500 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 backdrop-blur-sm neon-border">
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6 relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center group-hover:animate-spin-slow relative">
                    <Target className="h-12 w-12 text-white animate-pulse" />
                    <div className="absolute inset-0 w-24 h-24 bg-red-500/20 rounded-full animate-ping" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">I'm a BugHunter</h3>
                <p className="text-gray-400 mb-6">
                  Hunt vulnerabilities, earn rewards, and help secure Morocco's digital infrastructure.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all duration-300">
                  Join the Hunt
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Organization Card */}
            <Card className="bg-black/80 border-blue-500/50 hover:border-blue-500 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 backdrop-blur-sm neon-border">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6 relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:animate-pulse relative">
                    <Building2 className="h-12 w-12 text-white" />
                    <div className="absolute inset-0 w-24 h-24 bg-blue-500/20 rounded-full animate-ping" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">I'm an Organization</h3>
                <p className="text-gray-400 mb-6">
                  Launch bug bounty programs and strengthen your security posture with expert hackers.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  Start Program
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Admin Portal Card */}
            <Card className="bg-black/80 border-green-500/50 hover:border-green-500 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 backdrop-blur-sm neon-border">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6 relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:animate-pulse relative">
                    <Lock className="h-12 w-12 text-white" />
                    <div className="absolute inset-0 w-24 h-24 bg-green-500/20 rounded-full animate-ping" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Admin Portal</h3>
                <p className="text-gray-400 mb-6">
                  Secure access for platform administrators and government partners.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                  Secure Login
                  <Lock className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
