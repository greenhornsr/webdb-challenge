
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: 'Collect', notes: 'going to collect what has my attention', completed: false},
        {project_id: 2, description: 'Process', notes: 'processing what it means', completed: false},
        {project_id: 3, description: 'Put', notes: 'need to put it where it belongs', completed: false},
        {project_id: 4, description: 'Review', notes: 'reviewing frequently', completed: false},
        {project_id: 5, description: 'Do IT', notes: 'i must simply do this', completed: false},
      ]);
    });
};
