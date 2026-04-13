import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import ProjectList from './pages/ProjectList';
import TaskList from './pages/TaskList';
import TeamList from './pages/TeamList';

const AppLayout = ({ children }) => {
  const { user } = useAuth();
  return (
    <div style={{ display: 'flex' }}>
      {user && <Sidebar />}
      <main style={{ 
        flex: 1, 
        marginLeft: user ? '260px' : 0, 
        padding: user ? '40px' : 0,
        minHeight: '100vh',
        width: user ? 'calc(100% - 260px)' : '100%',
        transition: 'all 0.3s ease'
      }}>
        {children}
      </main>
    </div>
  );
};

const Unauthorized = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '1rem' }}>
    <h1 style={{ fontSize: '4rem', background: 'linear-gradient(to right, #ef4444, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>403</h1>
    <h2 style={{ color: 'var(--text-muted)' }}>Access Denied</h2>
    <p>You don't have permission to view this page.</p>
    <a href="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>Go Back Home</a>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/tasks" element={<TaskList />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
              <Route path="/teams" element={<TeamList />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
