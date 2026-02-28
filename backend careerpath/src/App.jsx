import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { Layout } from './components/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Counselors } from './pages/Counselors.jsx';
import { Resources } from './pages/Resources.jsx';
import { JobBoard } from './pages/JobBoard.jsx';
import { Forum } from './pages/Forum.jsx';
import { Profile } from './pages/Profile.jsx';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="counselors" element={<Counselors />} />
            <Route path="resources" element={<Resources />} />
            <Route path="jobs" element={<JobBoard />} />
            <Route path="forum" element={<Forum />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
