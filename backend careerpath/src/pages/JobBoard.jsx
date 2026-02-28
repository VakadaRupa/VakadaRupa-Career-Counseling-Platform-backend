import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, DollarSign, Clock, Search, Filter, Bookmark } from 'lucide-react';

export const JobBoard = () => {
  const jobs = [
    { id: 1, title: 'Senior UX Designer', company: 'TechFlow', location: 'Remote', salary: '$120k - $160k', type: 'Full-time', posted: '2 days ago' },
    { id: 2, title: 'Product Manager', company: 'InnovateAI', location: 'San Francisco, CA', salary: '$140k - $180k', type: 'Full-time', posted: '5 hours ago' },
    { id: 3, title: 'Marketing Strategist', company: 'GrowthLabs', location: 'Remote', salary: '$90k - $130k', type: 'Contract', posted: '1 day ago' },
    { id: 4, title: 'Frontend Developer', company: 'WebScale', location: 'Austin, TX', salary: '$110k - $150k', type: 'Full-time', posted: '3 days ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900">Job Board</h1>
        <p className="text-slate-500 mt-2">Discover opportunities that align with your career goals.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Job Type</h3>
            <div className="space-y-3">
              {['Full-time', 'Part-time', 'Contract', 'Internship'].map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Salary Range</h3>
            <input type="range" className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>$50k</span>
              <span>$200k+</span>
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search jobs, companies..." 
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
              />
            </div>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              Search
            </button>
          </div>

          <div className="space-y-4">
            {jobs.map(job => (
              <motion.div 
                key={job.id}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                      <Briefcase className="w-7 h-7 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <p className="text-slate-500 font-medium">{job.company}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> {job.salary}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-3 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
