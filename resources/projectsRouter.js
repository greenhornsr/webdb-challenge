const express = require('express');
const router = express.Router();
const db = require('./projectsModel');

router.use(express.json());

// get all projects list only
router.get('/projects', (req, res) => {
    db.find()
    .then(projects => {
        projects.length >= 1 ? res.status(200).json({success: true, projects}):
        res.status(404).json({success: false, message: 'Sorry, no projects atm!'})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})

// get only a project by id
router.get('/projects/:id', (req, res) => {
    const {id} = req.params
    db.findById(id)
    .then(project => {
        project ? res.status(200).json({success: true, project}):
        res.status(404).json({success: false, message: `no project with id: ${id} located.`})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})

// gets projects by id, with actions
router.get('/projects/:id', (req, res) => {
    const {id} = req.params
    db.findPAById(id)
    .then(projects => {
        projects ? res.status(200).json({success: true, projects}):
        res.status(404).json({success: false, message: `no project with id: ${id} located.`})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})

router.post('/projects', (req, res) => {
    const newProject = req.body
    db.add(newProject)
    .then(count => {
        const unit = count > 1 ? 'projects': 'project';
        count ? res.status(201).json({success: true, message: `${newProject.name} ${unit} created`, newProject}):
        res.status(400).json({success: false, message: 'could not add new'})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})

router.post('/projects/actions', (req, res) => {
    const newAction = req.body
    db.addAction(newAction)
    .then(count => {
        const unit = count > 1 ? 'actions': 'action';
        count ? res.status(201).json({success: true, message: `${newAction.description} ${unit} created`, newAction}):
        res.status(400).json({success: false, message: 'could not add new'})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})


// error middleware
const errorRef = (error) => {
    const hash = Math.random().toString(36).substring(2);
    console.log(hash, error)
    return { message: `Unknown Error, Ref: ${hash}`, error }
}

module.exports = router;