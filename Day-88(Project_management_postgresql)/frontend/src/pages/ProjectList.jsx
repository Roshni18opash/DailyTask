import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Plus, Target, Trash2, Calendar, Users, ArrowRight } from 'lucide-react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const { user } = useAuth();

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/project', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(res.data.projects);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTeams = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/team', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTeams(res.data.teams);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchTeams();
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/project', 
        { name: projectName, teamId: selectedTeam },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProjectName('');
      setShowModal(false);
      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || 'Error creating project');
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/project/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchProjects();
    } catch (err) {
      alert('Error deleting project');
    }
  };

  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Projects</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Overview of all your active workspace projects.</p>
        </div>
        {user.role !== 'USER' && (
          <button onClick={() => setShowModal(true)} className="btn btn-primary" style={{ padding: '12px 24px' }}>
            <Plus size={20} /> New Project
          </button>
        )}
      </header>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem' }}>Loading workspace...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {projects.map((project) => (
            <div key={project.id} className="card" style={{ 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary-color)' }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ padding: '12px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', color: 'var(--primary-color)' }}>
                  <Target size={24} />
                </div>
                <div className="badge badge-manager" style={{ height: 'fit-content' }}>{project.team?.name || 'Shared'}</div>
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700' }}>{project.name}</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Calendar size={16} /> {project.tasks?.length || 0} Tasks
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <Users size={16} /> {project.team?.users?.length || 0} Members
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to={`/tasks?projectId=${project.id}`} className="btn btn-ghost" style={{ flex: 1, textDecoration: 'none', justifyContent: 'center' }}>
                  Open Project <ArrowRight size={16} />
                </Link>
                {user.role === 'ADMIN' && (
                  <button 
                    onClick={() => handleDeleteProject(project.id)}
                    className="btn btn-ghost" 
                    style={{ color: 'var(--danger)', borderColor: 'rgba(239, 68, 68, 0.2)', padding: '10px' }}
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div className="glass shadow-xl animate-fade-in" style={{ padding: '3rem', width: '100%', maxWidth: '450px' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', fontWeight: '800' }}>Create Project</h2>
            <form onSubmit={handleCreateProject}>
              <div className="input-group">
                <label>PROJECT NAME</label>
                <input value={projectName} onChange={(e) => setProjectName(e.target.value)} required placeholder="e.g. Q2 Product Launch" />
              </div>
              <div className="input-group">
                <label>ASSIGN TEAM</label>
                <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)} required>
                  <option value="">Select a team</option>
                  {teams.map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-ghost" style={{ flex: 1 }}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Create Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
