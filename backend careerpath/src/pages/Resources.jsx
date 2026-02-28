import React from 'react';
import { motion } from 'motion/react';
import { Book, Video, FileText, Download, ExternalLink, Search } from 'lucide-react';

export const Resources = () => {
  const categories = ['All', 'Resume Writing', 'Interview Prep', 'Job Search', 'Career Planning', 'Networking'];
  
  const resources = [
    { title: 'The Ultimate Resume Template 2026', type: 'Template', category: 'Resume Writing', icon: <FileText className="w-5 h-5" /> },
    { title: 'Mastering Behavioral Interviews', type: 'Video', category: 'Interview Prep', icon: <Video className="w-5 h-5" /> },
    { title: 'LinkedIn Networking Strategies', type: 'Article', category: 'Networking', icon: <Book className="w-5 h-5" /> },
    { title: 'Career Transition Roadmap', type: 'Guide', category: 'Career Planning', icon: <Download className="w-5 h-5" /> },
    { title: 'Salary Negotiation 101', type: 'Video', category: 'Career Planning', icon: <Video className="w-5 h-5" /> },
    { title: 'Job Search Tracker (Excel)', type: 'Template', category: 'Job Search', icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900">Resource Library</h1>
        <p className="text-slate-500 mt-2">Premium tools and guides to accelerate your career.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sticky top-24">
            <h3 className="font-bold text-slate-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    cat === 'All' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="flex-grow">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((res, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600">
                  {res.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">
                      {res.type}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-300" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{res.title}</h3>
                  <p className="text-slate-500 text-xs">{res.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
