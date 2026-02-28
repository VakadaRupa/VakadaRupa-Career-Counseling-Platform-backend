import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Star, Users, Briefcase, BookOpen } from 'lucide-react';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block">Navigate Your</span>
                <span className="block text-indigo-600">Future with Confidence</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Connect with expert career counselors, access premium resources, and get AI-powered recommendations tailored to your professional goals.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg shadow-indigo-200 transition-all">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link to="/counselors" className="flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all">
                    Browse Counselors
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            >
              <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Students collaborating"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply opacity-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to succeed
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard 
                icon={<Users className="w-8 h-8 text-indigo-600" />}
                title="Expert Counseling"
                description="Book 1-on-1 sessions with certified career advisors who specialize in your field."
              />
              <FeatureCard 
                icon={<BookOpen className="w-8 h-8 text-indigo-600" />}
                title="Resource Library"
                description="Access a curated collection of resume templates, interview guides, and career articles."
              />
              <FeatureCard 
                icon={<Star className="w-8 h-8 text-indigo-600" />}
                title="AI Recommendations"
                description="Get personalized career path suggestions based on your skills and interests."
              />
              <FeatureCard 
                icon={<Briefcase className="w-8 h-8 text-indigo-600" />}
                title="Job Board"
                description="Find and apply to the latest job openings that match your career profile."
              />
              <FeatureCard 
                icon={<CheckCircle className="w-8 h-8 text-indigo-600" />}
                title="Skill Assessment"
                description="Identify your strengths and areas for improvement with our assessment tools."
              />
              <FeatureCard 
                icon={<Users className="w-8 h-8 text-indigo-600" />}
                title="Community Forum"
                description="Connect with peers, share experiences, and grow your professional network."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
  </div>
);
