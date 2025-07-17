
import { Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-transparent">
                BugHunters.ma
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Morocco's first national bug bounty platform, connecting ethical hackers 
              with organizations to secure the digital future.
            </p>
            <div className="flex space-x-4">
              <Github className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">For Hackers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">For Organizations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Security Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Hall of Fame</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Report Issue</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">info@bughunters.ma</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">+212 5XX-XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">Rabat, Morocco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 BugHunters.ma. All rights reserved. | Kingdom of Morocco 🇲🇦
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Security Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
