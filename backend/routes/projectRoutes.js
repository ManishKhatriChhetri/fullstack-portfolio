const express = required('express');
const router = express.Router();
const {
    getAllProjects,
    getFeaturedProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
} = require('./controllers/projectController');

//Public routes
router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getProjectById);

//Admin routes (will add authentication later)
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;