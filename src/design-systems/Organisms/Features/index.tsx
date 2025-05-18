
import React from "react";
import Typography from "@/design-systems/Atoms/Typography";

const features = [
  {
    icon: "🎯",
    title: "Precision AI",
    description: "Advanced algorithms that deliver pinpoint accuracy in every prediction and analysis."
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Real-time processing capabilities that keep you ahead of the curve."
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description: "Enterprise-grade security ensuring your data remains protected at all times."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-900/10 dark:to-blue-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 mb-6">
            <Typography size="h6" className="text-cyan-700 dark:text-cyan-300 font-semibold">
              ✨ Unlock the Power of
            </Typography>
          </div>
          <Typography 
            variant="condensed" 
            size="h2" 
            className="text-gray-900 dark:text-white mb-6 font-bold"
          >
            FutureTech Features
          </Typography>
          <Typography 
            size="paragraph" 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Discover cutting-edge capabilities that transform how you interact with artificial intelligence
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <Typography 
                size="h4" 
                className="text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors font-bold"
              >
                {feature.title}
              </Typography>
              <Typography 
                size="paragraph" 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;