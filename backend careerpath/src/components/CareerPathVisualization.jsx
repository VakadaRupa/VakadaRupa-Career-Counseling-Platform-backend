import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, TrendingUp, ChevronRight } from 'lucide-react';

export const CareerPathVisualization = () => {
  const paths = [
    { stage: 'Junior Developer', color: 'bg-indigo-500', icon: <Briefcase className="w-4 h-4" />, requirements: 'HTML, CSS, JS, React' },
    { stage: 'Mid-level Developer', color: 'bg-indigo-600', icon: <TrendingUp className="w-4 h-4" />, requirements: 'Node.js, SQL, System Design' },
    { stage: 'Senior Developer', color: 'bg-indigo-700', icon: <GraduationCap className="w-4 h-4" />, requirements: 'Architecture, Mentorship, Strategy' },
    { stage: 'Tech Lead / Architect', color: 'bg-indigo-800', icon: <TrendingUp className="w-4 h-4" />, requirements: 'Leadership, Cloud Native, Scalability' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
      <h3 className="text-xl font-bold text-slate-900 mb-8">Career Path Visualization</h3>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100"></div>
        
        <div className="space-y-12">
          {paths.map((path, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-8"
            >
              <div className={`z-10 w-12 h-12 rounded-2xl ${path.color} text-white flex items-center justify-center shadow-lg shadow-indigo-100`}>
                {path.icon}
              </div>
              
              <div className="flex-grow bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{path.stage}</h4>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-all" />
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">Key Requirements:</span> {path.requirements}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
