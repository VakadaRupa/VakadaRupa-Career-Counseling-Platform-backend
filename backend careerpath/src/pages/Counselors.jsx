import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Star, MapPin, Calendar, User } from 'lucide-react';

export const Counselors = () => {
  const [counselors, setCounselors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCounselors();
  }, []);

  const fetchCounselors = async () => {
    try {
      const res = await fetch('/api/counselors');
      const data = await res.json();
      setCounselors(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Expert Career Counselors</h1>
          <p className="text-slate-500 mt-2">Find the right mentor to guide your professional growth.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or expertise..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-700">Filters</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white rounded-3xl h-80 animate-pulse border border-slate-100"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counselors.length > 0 ? counselors.map((counselor) => (
            <CounselorCard key={counselor.id} counselor={counselor} />
          )) : (
            // Mock data for demo if database is empty
            [
              { id: 1, full_name: 'Dr. Sarah Jenkins', expertise: 'Tech & Engineering', rating: 4.9, location: 'Remote', bio: 'Helping software engineers transition into leadership roles for over 10 years.' },
              { id: 2, full_name: 'Michael Chen', expertise: 'Finance & Consulting', rating: 4.8, location: 'New York, NY', bio: 'Former McKinsey consultant specializing in career pivots and interview prep.' },
              { id: 3, full_name: 'Elena Rodriguez', expertise: 'Creative & Design', rating: 5.0, location: 'Austin, TX', bio: 'Award-winning UX designer helping creatives build impactful portfolios.' }
            ].map(c => <CounselorCard key={c.id} counselor={c} />)
          )}
        </div>
      )}
    </div>
  );
};

const CounselorCard = ({ counselor }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all"
  >
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
          <User className="w-8 h-8 text-indigo-600" />
        </div>
        <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-sm font-bold">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          {counselor.rating || '4.9'}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900">{counselor.full_name}</h3>
      <p className="text-indigo-600 font-medium text-sm mb-3">{counselor.expertise || 'Career Strategist'}</p>
      
      <p className="text-slate-500 text-sm line-clamp-2 mb-4">
        {counselor.bio || 'Dedicated career professional with extensive experience in helping individuals achieve their career goals through personalized coaching.'}
      </p>
      
      <div className="flex items-center gap-4 text-slate-400 text-xs mb-6">
        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {counselor.location || 'Remote'}</span>
        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Available Next Week</span>
      </div>
      
      <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
        Book Session
      </button>
    </div>
  </motion.div>
);
