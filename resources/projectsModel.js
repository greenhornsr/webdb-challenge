const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    findActionById,
    findPAById,
    add,
    addAction,
    // update,
    // remove
}


function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
    .where({id})
    .first()
}

function findActionById(id) {
    return db('actions')
    .where({id})
    .first()
}

function findPAById(id) {
    return db.select('projects.*', 'actions.*')
    .from('projects')
    .where('actions.project_id', id)
    .leftJoin('actions', `projects.id`, 'actions.project_id')
    .groupBy('actions.project_id')
    .first()
}

async function add(newProject) {
    const [id] = await db('projects')
    .insert(newProject)

    return findById(id)
}

async function addAction(newAction) {
    const [id] = await db('actions')
    .insert(newAction)

    return findById(id)
}

// function update(id) {
//     return null
// }

// function remove(id) {
//     return null
// }