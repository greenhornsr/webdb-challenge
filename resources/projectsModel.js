const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    // update,
    // remove
}


function find() {
    return db('actions')
}

function findById(id) {
    return db.select('projects.*', 'actions.*')
    .from('projects')
    .where('actions.project_id', id)
    .first()
}

function add(newProject) {
    return null
}

// function update(id) {
//     return null
// }

// function remove(id) {
//     return null
// }