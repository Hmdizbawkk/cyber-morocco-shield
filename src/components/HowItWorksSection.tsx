
import { Upload, Eye, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Submit",
      description: "Ethical hackers discover and report vulnerabilities through our secure platform.",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      step: "01"
    },
    {
      icon: Eye,
      title: "Review",
      description: "Security experts and organizations validate and assess the reported vulnerabilities.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      step: "02"
    },
    {
      icon: CheckCircle,
      title: "Fix",
      description: "Organizations implement fixes and hackers receive rewards for their contributions.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      step: "03"
    }
  ];

  return (
    <section id="how" className="relative z-10 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-red-500">It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our streamlined process ensures efficient vulnerability disclosure and resolution, 
            creating a win-win scenario for both hackers and organizations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-black/60 border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-gray-800 absolute top-4 right-4 opacity-50">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 ${step.bgColor} rounded-full flex items-center justify-center group-hover:animate-pulse relative z-10`}>
                    <step.icon className={`h-10 w-10 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 ${step.color}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="h-8 w-8 text-red-500 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="bg-gradient-to-r from-red-900/10 via-blue-900/10 to-green-900/10 rounded-lg p-8 border border-gray-700/30">
          <h3 className="text-2xl font-bold text-center mb-8">
            Complete <span className="text-red-500">Security Lifecycle</span>
          </h3>
          <div className="grid md:grid-cols-5 gap-4 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-red-400 font-bold">🔍</span>
              </div>
              <span className="text-sm text-gray-400">Discovery</span>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-500 mx-auto hidden md:block" />
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-400 font-bold">📋</span>
              </div>
              <span className="text-sm text-gray-400">Reporting</span>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-500 mx-auto hidden md:block" />
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-400 font-bold">🛠️</span>
              </div>
              <span className="text-sm text-gray-400">Resolution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
