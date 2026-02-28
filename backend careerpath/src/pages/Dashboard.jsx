import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Sparkles, ChevronRight, BookOpen, Briefcase } from 'lucide-react';

import { CareerPathVisualization } from '../components/CareerPathVisualization.jsx';

export const Dashboard = () => {
  const { user } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [recommendations, setRecommendations] = useState(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const res = await fetch('/api/sessions/my-sessions', {
        headers: { 'Authorization': `Bearer ${user?.access_token}` }
      });
      const data = await res.json();
      setSessions(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAiRecommendations = async () => {
    setLoadingAi(true);
    try {
      const res = await fetch('/api/ai/recommendations', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.access_token}`
        },
        body: JSON.stringify({ profile: user?.user_metadata })
      });
      const data = await res.json();
      setRecommendations(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900">Welcome back, {user?.user_metadata?.full_name || 'User'}!</h1>
        <p className="text-slate-500 mt-2">Here's what's happening with your career journey.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Sessions & Progress */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Sessions */}
          <section className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                Upcoming Sessions
              </h2>
            </div>
            <div className="p-6">
              {sessions.length > 0 ? (
                <div className="space-y-4">
                  {sessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                          <User className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">Session with {session.counselor?.full_name || 'Counselor'}</h3>
                          <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(session.start_time).toLocaleDateString()}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {new Date(session.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                        {session.status}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-slate-300" />
                  </div>
                  <p className="text-slate-500">No upcoming sessions scheduled.</p>
                  <button className="mt-4 text-indigo-600 font-bold hover:underline">Book your first session</button>
                </div>
              )}
            </div>
          </section>

          {/* AI Recommendations */}
          <section className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl shadow-xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-indigo-200" />
                <h2 className="text-2xl font-bold">AI Career Insights</h2>
              </div>
              
              {!recommendations ? (
                <div>
                  <p className="text-indigo-100 mb-6 max-w-md">
                    Get personalized career path suggestions and educational resources based on your profile using our advanced AI.
                  </p>
                  <button 
                    onClick={getAiRecommendations}
                    disabled={loadingAi}
                    className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {loadingAi ? 'Analyzing Profile...' : 'Generate Recommendations'}
                    {!loadingAi && <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-indigo-200 uppercase text-xs tracking-widest mb-3">Suggested Paths</h3>
                    <ul className="space-y-2">
                      {recommendations.careerPaths.map((path, i) => (
                        <li key={i} className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                          <Briefcase className="w-4 h-4" />
                          <span>{path}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-200 uppercase text-xs tracking-widest mb-3">Resources</h3>
                    <ul className="space-y-2">
                      {recommendations.resources.map((res, i) => (
                        <li key={i} className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                          <BookOpen className="w-4 h-4" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
          </section>

          {/* Career Path Visualization */}
          <CareerPathVisualization />
        </div>

        {/* Right Column: Quick Stats & Actions */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <ActionButton icon={<Users className="w-4 h-4" />} label="Find a Counselor" />
              <ActionButton icon={<BookOpen className="w-4 h-4" />} label="Browse Resources" />
              <ActionButton icon={<Briefcase className="w-4 h-4" />} label="Search Jobs" />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Your Progress</h3>
            <div className="space-y-4">
              <ProgressItem label="Profile Completion" value={75} />
              <ProgressItem label="Skills Acquired" value={40} />
              <ProgressItem label="Sessions Attended" value={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label }) => (
  <button className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all group">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-white transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
    <ChevronRight className="w-4 h-4 text-slate-400" />
  </button>
);

const ProgressItem = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="text-slate-600">{label}</span>
      <span className="font-bold text-slate-900">{value}%</span>
    </div>
    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);
