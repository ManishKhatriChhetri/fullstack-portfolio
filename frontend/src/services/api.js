import axios from 'axios';

const API_URL=import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Projects API
export const projectsAPI = {
    getAll: () => api.get('/projects'),
    getFeatured: () => api.get('/projects/featured'),
    getById: (id) => api.get(`/projects/${id}`),
    create: (data) => api.post('/projects', data),
    update: (id, data) => api.put(`/projects/${id}`, data),
    delete: (id) => api.delete(`/projects/${id}`)
}

// Health check
export const healthCheck = () => api.get('/health');

export default api;