import React from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Search, Plus } from 'lucide-react';

export const Forum = () => {
  const topics = [
    { id: 1, title: 'How to handle career gaps in resumes?', author: 'Alex P.', replies: 24, likes: 45, category: 'Resume Advice' },
    { id: 2, title: 'Best certifications for Cloud Engineering in 2026', author: 'Sarah M.', replies: 12, likes: 32, category: 'Tech' },
    { id: 3, title: 'Negotiating salary for remote roles', author: 'David K.', replies: 56, likes: 89, category: 'Salary' },
    { id: 4, title: 'Transitioning from Marketing to Product Management', author: 'Emily R.', replies: 18, likes: 27, category: 'Career Pivot' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Community Forum</h1>
          <p className="text-slate-500 mt-2">Connect, share, and learn from fellow professionals.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
          <Plus className="w-5 h-5" />
          New Discussion
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Popular Categories</h3>
            <div className="space-y-2">
              {['General', 'Resume Advice', 'Interview Tips', 'Tech', 'Salary', 'Career Pivot'].map(cat => (
                <button key={cat} className="w-full text-left px-4 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Discussions List */}
        <div className="lg:col-span-3 space-y-4">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search discussions..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
            />
          </div>

          {topics.map(topic => (
            <div key={topic.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">
                      {topic.category}
                    </span>
                    <span className="text-xs text-slate-400">Posted by {topic.author}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 hover:text-indigo-600 cursor-pointer transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{topic.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{topic.replies}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
