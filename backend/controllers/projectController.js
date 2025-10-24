const Project = require('../models/Project')

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({order: 1});
        
        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch projects',
            error: error.message
        });
    }
}

//Get featured projects
exports.getFeaturedProjects = async (req, res) => {
    try {
        const projects = await Project.find({featured: true}).sort({order: 1});
        
        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch featured projects',
            error: error.message
        });
    }
}

// Get single project
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if(!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found'
            });
        }

        res.status(200).json({
            success: true,
            data: project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch project',
            error: error.message
        });
    }
}

// Create new project
exports.createProject = async (req, res) => {
    try {
        const project = Project.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Project created successfully',
            data: project
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create project',
            error: error.message
        });
    }
}

// Update project
exports.updateProject = async (req, res) => {
    try {
        const project = Project.findIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );

        if(!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found'
            });
        }

        res.status(201).json({
            success: true,
            message: 'Project updated successfully',
            data: project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update project',
            error: error.message
        });
    }
}

// Delete project
exports.deleteProject = async (req, res) => {
    try {
        const project = Project.findByIdAndDelete(req.params.id);
        
        if(!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Project deleted successfully',
            data: project
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete project',
            error: error.message
        });
    }
}