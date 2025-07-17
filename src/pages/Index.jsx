
import { Shield, Users, Building2, Lock, Zap, Globe, ArrowRight, CheckCircle, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 via-white to-blue-100/30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 border-b border-red-200 backdrop-blur-sm bg-white/80">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-red-500 animate-pulse" />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
            BugHunters.ma
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how" className="text-gray-700 hover:text-red-600 transition-colors">How It Works</a>
          <a href="#stats" className="text-gray-700 hover:text-red-600 transition-colors">Statistics</a>
          <a href="#partners" className="text-gray-700 hover:text-red-600 transition-colors">Partners</a>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            Contact
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Main CTA Cards */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Choose Your <span className="text-red-500">Mission</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Join Morocco's cybersecurity defense network. Whether you're a white-hat hacker or an organization, we have your entry point.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* BugHunter Card */}
            <Card className="bg-white border-red-200 hover:border-red-500 transition-all duration-300 group hover:scale-105 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-red-500/20 rounded-full animate-ping" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">I'm a BugHunter</h3>
                <p className="text-gray-600 mb-6">
                  Hunt vulnerabilities, earn rewards, and help secure Morocco's digital infrastructure.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white group-hover:shadow-lg group-hover:shadow-red-500/25">
                  Join the Hunt
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Organization Card */}
            <Card className="bg-white border-blue-200 hover:border-blue-500 transition-all duration-300 group hover:scale-105 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-blue-500/20 rounded-full animate-ping" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">I'm an Organization</h3>
                <p className="text-gray-600 mb-6">
                  Launch bug bounty programs and strengthen your security posture with expert hackers.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg group-hover:shadow-blue-500/25">
                  Start Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Admin Portal Card */}
            <Card className="bg-white border-green-200 hover:border-green-500 transition-all duration-300 group hover:scale-105 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Lock className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-green-500/20 rounded-full animate-ping" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Admin Portal</h3>
                <p className="text-gray-600 mb-6">
                  Secure access for platform administrators and government partners.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:shadow-lg group-hover:shadow-green-500/25">
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
