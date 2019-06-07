const express = require('express');
const router = express.Router();
const db = require('./projectsModel');

router.use(express.json());

router.get('/projects', (req, res) => {
    db.find()
    .then(projects => {
        projects ? res.status(200).json({success: true, projects}):
        res.status(404).json({success: false, message: 'Sorry, no projects atm!'})
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