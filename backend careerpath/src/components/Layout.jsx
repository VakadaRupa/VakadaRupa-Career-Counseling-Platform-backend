import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { LogOut, User, LayoutDashboard, Users, BookOpen, Briefcase, MessageSquare, Compass } from 'lucide-react';

export const Layout = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
                <Compass className="w-8 h-8" />
                <span>CareerPath</span>
              </Link>
              <div className="hidden md:ml-8 md:flex md:space-x-4">
                <NavLink to="/counselors" icon={<Users className="w-4 h-4" />} label="Counselors" />
                <NavLink to="/resources" icon={<BookOpen className="w-4 h-4" />} label="Resources" />
                <NavLink to="/jobs" icon={<Briefcase className="w-4 h-4" />} label="Jobs" />
                <NavLink to="/forum" icon={<MessageSquare className="w-4 h-4" />} label="Forum" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link to="/dashboard" className="text-slate-600 hover:text-indigo-600 p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <LayoutDashboard className="w-5 h-5" />
                  </Link>
                  <Link to="/profile" className="text-slate-600 hover:text-indigo-600 p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <User className="w-5 h-5" />
                  </Link>
                  <button onClick={handleSignOut} className="text-slate-600 hover:text-red-600 p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-slate-600 hover:text-indigo-600 font-medium">Login</Link>
                  <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>© 2026 CareerPath Counseling Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, icon, label }) => (
  <Link to={to} className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-all text-sm font-medium">
    {icon}
    <span>{label}</span>
  </Link>
);
