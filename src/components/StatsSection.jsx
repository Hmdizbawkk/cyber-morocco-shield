
import { Shield, Zap, Users, Globe, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      icon: Shield,
      value: "99.8%",
      label: "Security Incidents Prevented",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Users,
      value: "2.5M+",
      label: "Moroccan Citizens Protected",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Zap,
      value: "< 24h",
      label: "Average Response Time",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Government Partners",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Increase in Security Awareness",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Critical Vulnerabilities Patched",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <section id="stats" className="relative z-10 px-6 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Cybersecurity in <span className="text-red-500">Morocco</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time statistics showing the impact of our national cybersecurity initiative
            and the collective effort to protect Morocco's digital infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 group hover:scale-105 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 ${stat.bgColor} rounded-full flex items-center justify-center group-hover:animate-pulse`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-8 border border-red-200">
            <h3 className="text-2xl font-bold mb-4 text-red-600">
              🇲🇦 Morocco's Digital Defense Initiative
            </h3>
            <p className="text-gray-700 max-w-4xl mx-auto">
              As part of Morocco's Digital Strategy 2025, BugHunters.ma represents a crucial step 
              in building a resilient national cybersecurity ecosystem. By connecting ethical hackers 
              with organizations, we're creating a collaborative defense network that protects 
              critical infrastructure, government services, and citizen data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
