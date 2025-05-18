
import React from "react";
import Typography from "@/design-systems/Atoms/Typography";

const blogCategories = [
  { name: "Quantum AI", count: 15, color: "from-purple-500 to-pink-500" },
  { name: "Neural Networks", count: 23, color: "from-blue-500 to-cyan-500" },
  { name: "Machine Learning", count: 31, color: "from-green-500 to-teal-500" },
  { name: "Deep Learning", count: 18, color: "from-orange-500 to-red-500" },
  { name: "AI Ethics", count: 12, color: "from-indigo-500 to-purple-500" },
  { name: "Robotics", count: 27, color: "from-cyan-500 to-blue-500" },
  { name: "Computer Vision", count: 21, color: "from-teal-500 to-green-500" },
  { name: "NLP", count: 19, color: "from-pink-500 to-rose-500" }
];

const BlogCategories: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 mb-6">
            <Typography size="h6" className="text-slate-700 dark:text-slate-300 font-semibold">
              📚 Knowledge Repository
            </Typography>
          </div>
          <Typography 
            variant="condensed" 
            size="h2" 
            className="text-slate-900 dark:text-white mb-6 font-bold"
          >
            Research Insight Blogs
          </Typography>
          <Typography 
            size="paragraph" 
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg"
          >
            Dive deep into specialized AI topics with our comprehensive research articles
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {blogCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <Typography 
                  size="h5" 
                  className="text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-current group-hover:to-current transition-all font-semibold"
                //   style={{
                //     backgroundImage: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`
                //   }}
                >
                  {category.name}
                </Typography>
                <Typography 
                  size="h6" 
                  className="text-slate-500 dark:text-slate-400"
                >
                  {category.count} articles
                </Typography>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r group-hover:w-full transition-all duration-300"
                   style={{
                     backgroundImage: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`
                   }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;