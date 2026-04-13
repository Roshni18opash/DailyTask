import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Users, UserPlus, Shield, Mail, Trash2, MoreVertical } from 'lucide-react';

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const { user } = useAuth();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const [teamRes, userRes] = await Promise.all([
        axios.get('http://localhost:5000/api/team', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('http://localhost:5000/api/user', { headers: { Authorization: `Bearer ${token}` } })
      ]);
      setTeams(teamRes.data.teams);
      setUsers(userRes.data.users);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateTeam = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/team', 
        { name: newTeamName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewTeamName('');
      setShowModal(false);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || 'Error creating team');
    }
  };

  const handleDeleteTeam = async (teamId) => {
    if (!window.confirm('Are you sure you want to delete this team?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/team/${teamId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (err) {
      alert('Error deleting team');
    }
  };

  const updateRole = async (userId, newRole) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:5000/api/user/${userId}/role`, 
        { role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchData();
    } catch (err) {
      alert('Error updating role');
    }
  };

  const assignTeam = async (userId, teamId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:5000/api/user/${userId}/team`, 
        { teamId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchData();
    } catch (err) {
      alert('Error assigning team');
    }
  };

  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Management</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Control workspace teams and user access levels.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="btn btn-primary" style={{ padding: '12px 24px' }}>
          <UserPlus size={20} /> Create Team
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '3rem' }}>
        <section>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.25rem', fontWeight: '700' }}>
            <Users size={22} color="var(--primary-color)" /> Workspace Teams
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {teams.map(t => (
              <div key={t.id} className="card" style={{ padding: '1.5rem', background: 'var(--bg-card)', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{t.name}</h4>
                  <button onClick={() => handleDeleteTeam(t.id)} className="btn btn-ghost" style={{ padding: '4px', color: 'var(--text-muted)' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>{t.users?.length || 0} Members</span>
                  <span>{t.projects?.length || 0} Projects</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.25rem', fontWeight: '700' }}>
            <Shield size={22} color="var(--primary-color)" /> User Directory
          </h3>
          <div className="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '1.25rem' }}>USER</th>
                  <th style={{ padding: '1.25rem' }}>ACCESS LEVEL</th>
                  <th style={{ padding: '1.25rem' }}>TEAM ASSIGNMENT</th>
                  <th style={{ padding: '1.25rem' }}></th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s ease' }}>
                    <td style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                          {u.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: '600' }}>{u.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1.25rem' }}>
                      <select 
                        value={u.role} 
                        onChange={(e) => updateRole(u.id, e.target.value)}
                        className={`badge badge-${u.role.toLowerCase()}`}
                        style={{ background: 'rgba(255,255,255,0.05)', border: 'none', cursor: 'pointer', padding: '6px 12px', color: 'white' }}
                      >
                        <option value="ADMIN" style={{ background: '#1e293b', color: 'white' }}>ADMIN</option>
                        <option value="MANAGER" style={{ background: '#1e293b', color: 'white' }}>MANAGER</option>
                        <option value="USER" style={{ background: '#1e293b', color: 'white' }}>USER</option>
                      </select>
                    </td>
                    <td style={{ padding: '1.25rem' }}>
                      <select 
                        value={u.teamId || ''} 
                        onChange={(e) => assignTeam(u.id, e.target.value)}
                        style={{ 
                          background: 'rgba(255,255,255,0.05)', 
                          color: 'white', 
                          border: '1px solid var(--border-color)', 
                          borderRadius: '8px', 
                          padding: '6px 12px',
                          fontSize: '0.85rem'
                        }}
                      >
                        <option value="" style={{ background: '#1e293b', color: 'white' }}>No Assignment</option>
                        {teams.map(t => (
                          <option key={t.id} value={t.id} style={{ background: '#1e293b', color: 'white' }}>
                            {t.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td style={{ padding: '1.25rem', textAlign: 'right' }}>
                      <button className="btn btn-ghost" style={{ padding: '8px' }}>
                        <MoreVertical size={18} color="var(--text-muted)" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div className="glass shadow-xl animate-fade-in" style={{ padding: '3rem', width: '100%', maxWidth: '450px' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', fontWeight: '800' }}>New Workspace Team</h2>
            <form onSubmit={handleCreateTeam}>
              <div className="input-group">
                <label>TEAM NAME</label>
                <input value={newTeamName} onChange={(e) => setNewTeamName(e.target.value)} required placeholder="e.g. Design & UX" />
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-ghost" style={{ flex: 1 }}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Create Team</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamList;
