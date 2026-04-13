import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, CheckCircle2, Clock, PlayCircle, Plus } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Projects', value: '12', icon: PlayCircle, color: '#6366f1' },
    { label: 'Pending Tasks', value: '45', icon: Clock, color: '#f59e0b' },
    { label: 'Completed', value: '128', icon: CheckCircle2, color: '#10b981' },
  ];

  return (
    <div style={{ paddingTop: '100px', paddingLeft: '2rem', paddingRight: '2rem' }}>
      <header style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
            Hello, {user.name.split(' ')[0]} 👋
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Here's what's happening with your projects today.
          </p>
        </div>
        {user.role !== 'USER' && (
          <Link to="/projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            <Plus size={20} /> Create New Project
          </Link>
        )}
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className="card animate-fade-in" style={{ animationDelay: `${i * 0.1}s`, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '12px', background: `${stat.color}20`, borderRadius: '12px', color: stat.color }}>
              <stat.icon size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{stat.label}</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <section className="card">
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LayoutDashboard size={20} /> Recent Activity
          </h3>
          <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '3rem 0' }}>
            No recent activity to show.
          </div>
        </section>

        <section className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Your Team</h3>
          {user.role === 'ADMIN' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>You are managing all systems.</p>
              <Link to="/teams" className="btn btn-ghost" style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}>Manage Teams</Link>
            </div>
          ) : (
            <div style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0' }}>
              No team members found.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
