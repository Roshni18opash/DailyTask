import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Target, Users, LogOut, ClipboardList, Briefcase, Settings } from 'lucide-react';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  const menuItems = [
    { title: 'Dashboard', path: '/', icon: LayoutDashboard },
    { title: 'Projects', path: '/projects', icon: Target },
    { title: 'Tasks', path: '/tasks', icon: ClipboardList },
  ];

  if (user.role === 'ADMIN') {
    menuItems.push({ title: 'Management', path: '/teams', icon: Users });
  }

  return (
    <div style={{
      width: 'var(--sidebar-w)',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: 'var(--bg-card)',
      borderRight: '1px solid var(--border-color)',
      padding: '32px 16px',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px', padding: '0 12px' }}>
        <div style={{ padding: '10px', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', borderRadius: '12px', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}>
          <Briefcase size={22} color="white" />
        </div>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'white' }}>
          Roshni Prajapti
        </h2>
      </div>

      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '12px 16px', 
                textDecoration: 'none',
                color: isActive ? 'white' : 'var(--text-muted)',
                background: isActive ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
                borderRadius: '12px',
                marginBottom: '8px',
                transition: 'all 0.2s ease',
                fontWeight: isActive ? '600' : '500',
                border: isActive ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid transparent'
              }}
            >
              <item.icon size={20} color={isActive ? 'var(--primary-color)' : 'currentColor'} />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '0 8px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(45deg, #6366f1, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            {user.name.charAt(0)}
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{user.name}</div>
            <div className={`badge badge-${user.role.toLowerCase()}`} style={{ fontSize: '0.65rem' }}>{user.role}</div>
          </div>
        </div>
        <button onClick={handleLogout} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start', color: 'var(--danger)' }}>
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
