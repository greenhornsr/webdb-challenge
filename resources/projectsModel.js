const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    // update,
    // remove
}


function find() {
    return db('projects')
}

function findById(id) {
    return null
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