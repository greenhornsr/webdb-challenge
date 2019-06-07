
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Capture', description: 'Collect what has your attention.', completed: false},
        {name: 'Clarify', description: 'Process what it means.', completed: false},
        {name: 'Organize', description: 'Put it where it belongs.', completed: false},
        {name: 'Reflect', description: 'Review frequently.', completed: false},
        {name: 'Engage', description: 'Simply do.', completed: false},
      ]);
    });
};
