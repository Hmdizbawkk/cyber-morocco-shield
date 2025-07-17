
import { Shield, Building2, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "Ministry of Digital Transition", type: "Government", icon: "🏛️" },
    { name: "ANRT", type: "Telecom Authority", icon: "📡" },
    { name: "Bank Al-Maghrib", type: "Central Bank", icon: "🏦" },
    { name: "CNSS", type: "Social Security", icon: "🛡️" },
    { name: "Royal Air Maroc", type: "National Carrier", icon: "✈️" },
    { name: "ONCF", type: "Railway", icon: "🚄" },
    { name: "OCP Group", type: "Mining", icon: "⛏️" },
    { name: "Maroc Telecom", type: "Telecommunications", icon: "📱" },
  ];

  const testimonials = [
    {
      quote: "BugHunters.ma has revolutionized our security posture. The platform connects us with world-class ethical hackers.",
      author: "Mohammed Benali",
      role: "CISO, Ministry of Digital Transition",
      avatar: "👨‍💼"
    },
    {
      quote: "Thanks to this platform, we've identified and fixed critical vulnerabilities before they could be exploited.",
      author: "Aicha El Mansouri",
      role: "Security Director, Bank Al-Maghrib",
      avatar: "👩‍💼"
    },
    {
      quote: "The collaborative approach has strengthened Morocco's overall cybersecurity resilience significantly.",
      author: "Youssef Tazi",
      role: "Head of Security, OCP Group",
      avatar: "👨‍💼"
    }
  ];

  return (
    <section id="partners" className="relative z-10 px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Trusted <span className="text-red-500">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading Moroccan organizations and government institutions trust BugHunters.ma 
            to enhance their cybersecurity through collaborative bug bounty programs.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 group hover:scale-105 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{partner.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our <span className="text-blue-500">Partners Say</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="text-4xl mb-4 text-blue-500">"</div>
                <p className="text-gray-700 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action for Organizations */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-red-50 to-blue-50 border-red-200 shadow-lg">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Join Morocco's Cybersecurity <span className="text-red-500">Alliance</span>
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Become part of Morocco's national cybersecurity initiative. Partner with us to 
                strengthen your organization's security and contribute to the nation's digital resilience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Become a Partner
                </button>
                <button className="border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
