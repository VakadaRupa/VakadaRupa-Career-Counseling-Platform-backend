import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { User, Mail, Briefcase, GraduationCap, MapPin, Save, Camera } from 'lucide-react';

export const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user?.user_metadata?.full_name || '',
    email: user?.email || '',
    expertise: user?.user_metadata?.expertise || '',
    education: user?.user_metadata?.education || '',
    location: user?.user_metadata?.location || '',
    bio: user?.user_metadata?.bio || ''
  });

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900">Your Profile</h1>
        <p className="text-slate-500 mt-2">Manage your professional information and preferences.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Header/Avatar */}
        <div className="h-32 bg-indigo-600 relative">
          <div className="absolute -bottom-12 left-8">
            <div className="relative group">
              <div className="w-24 h-24 bg-white rounded-3xl p-1 shadow-lg">
                <div className="w-full h-full bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                  <User className="w-12 h-12" />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-xl shadow-md text-slate-600 hover:text-indigo-600 transition-all">
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileField 
              label="Full Name" 
              icon={<User className="w-5 h-5" />} 
              value={formData.fullName}
              onChange={(v) => setFormData({...formData, fullName: v})}
            />
            <ProfileField 
              label="Email Address" 
              icon={<Mail className="w-5 h-5" />} 
              value={formData.email}
              disabled
            />
            <ProfileField 
              label="Expertise / Current Role" 
              icon={<Briefcase className="w-5 h-5" />} 
              value={formData.expertise}
              onChange={(v) => setFormData({...formData, expertise: v})}
              placeholder="e.g. Senior Software Engineer"
            />
            <ProfileField 
              label="Education" 
              icon={<GraduationCap className="w-5 h-5" />} 
              value={formData.education}
              onChange={(v) => setFormData({...formData, education: v})}
              placeholder="e.g. MS in Computer Science"
            />
            <ProfileField 
              label="Location" 
              icon={<MapPin className="w-5 h-5" />} 
              value={formData.location}
              onChange={(v) => setFormData({...formData, location: v})}
              placeholder="e.g. New York, NY"
            />
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Bio</label>
              <textarea 
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                rows={4}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                placeholder="Tell us about your career journey..."
              />
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ label, icon, value, onChange, placeholder, disabled }) => (
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
      <input 
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      />
    </div>
  </div>
);
