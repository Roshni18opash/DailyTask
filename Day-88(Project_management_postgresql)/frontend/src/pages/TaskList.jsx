import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Plus, CheckCircle2, Clock, AlertCircle, User as UserIcon, Trash2, Calendar, GripVertical } from 'lucide-react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', projectId: '', assignedTo: '', priority: 'MEDIUM' });
  const { user } = useAuth();
  const location = useLocation();

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams(location.search);
      const projectId = params.get('projectId');
      
      const res = await axios.get('http://localhost:5000/api/task', {
        headers: { Authorization: `Bearer ${token}` },
        params: projectId ? { projectId } : {}
      });
      setTasks(res.data.tasks);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchInitialData = async () => {
    try {
      const token = localStorage.getItem('token');
      const [projRes, userRes] = await Promise.all([
        axios.get('http://localhost:5000/api/project', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('http://localhost:5000/api/user', { headers: { Authorization: `Bearer ${token}` } })
      ]);
      setProjects(projRes.data.projects);
      setUsers(userRes.data.users || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchInitialData();
  }, [location.search]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/task', newTask, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShowModal(false);
      setNewTask({ title: '', projectId: '', assignedTo: '', priority: 'MEDIUM' });
      fetchTasks();
    } catch (err) {
      alert(err.response?.data?.message || 'Error creating task');
    }
  };

  const updateStatus = async (taskId, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:5000/api/task/${taskId}`, 
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Delete this task?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/task/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (err) {
      alert('Error deleting task');
    }
  };

  const statusColors = {
    TODO: '#94a3b8',
    IN_PROGRESS: '#6366f1',
    DONE: '#10b981'
  };

  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Tasks</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Manage and organize your team's workflow.</p>
        </div>
        {user.role !== 'USER' && (
          <button onClick={() => setShowModal(true)} className="btn btn-primary" style={{ padding: '12px 24px' }}>
            <Plus size={20} /> Create Task
          </button>
        )}
      </header>

      <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '1rem' }}>
        {['TODO', 'IN_PROGRESS', 'DONE'].map(status => (
          <div key={status} style={{ flex: 1, minWidth: '350px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: '1.5rem', 
              padding: '0 8px'
            }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', fontWeight: '700' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: statusColors[status] }}></div>
                {status.replace('_', ' ')}
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '400', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '10px' }}>
                  {tasks.filter(t => t.status === status).length}
                </span>
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tasks.filter(t => t.status === status).map(task => (
                <div key={task.id} className="card" style={{ 
                  padding: '1.25rem', 
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  transition: 'transform 0.2s ease'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: '700', textTransform: 'uppercase' }}>
                      {task.project?.name}
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {user.role !== 'USER' && (
                        <button onClick={() => handleDeleteTask(task.id)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>

                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.25rem', lineHeight: '1.5' }}>{task.title}</h4>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.2)', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
                        {task.assignee?.name?.charAt(0) || '?'}
                      </div>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{task.assignee?.name || 'Unassigned'}</span>
                    </div>

                    <select 
                      value={task.status} 
                      onChange={(e) => updateStatus(task.id, e.target.value)}
                      style={{ 
                        background: 'var(--bg-card)', 
                        border: '1px solid var(--border-color)', 
                        color: 'white', 
                        fontSize: '0.75rem', 
                        padding: '6px 10px', 
                        borderRadius: '6px',
                        cursor: 'pointer',
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none'
                      }}
                    >
                      <option value="TODO" style={{ background: '#1e293b', color: 'white' }}>To Do</option>
                      <option value="IN_PROGRESS" style={{ background: '#1e293b', color: 'white' }}>In Progress</option>
                      <option value="DONE" style={{ background: '#1e293b', color: 'white' }}>Done</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div className="glass shadow-xl animate-fade-in" style={{ padding: '3rem', width: '100%', maxWidth: '450px' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', fontWeight: '800' }}>Create Task</h2>
            <form onSubmit={handleCreateTask}>
              <div className="input-group">
                <label>TASK TITLE</label>
                <input value={newTask.title} onChange={(e) => setNewTask({...newTask, title: e.target.value})} required placeholder="What needs to be done?" />
              </div>
              <div className="input-group">
                <label>PROJECT</label>
                <select value={newTask.projectId} onChange={(e) => setNewTask({...newTask, projectId: e.target.value})} required>
                  <option value="">Select project</option>
                  {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="input-group">
                <label>ASSIGNEE</label>
                <select value={newTask.assignedTo} onChange={(e) => setNewTask({...newTask, assignedTo: e.target.value})} required>
                  <option value="">Select member</option>
                  {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-ghost" style={{ flex: 1 }}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Create Task</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
