
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(table) {
        table.increments()

        table
        .string('name', 128)
        .unique()
        .notNullable()

        table
        .string('description', 255)
        .notNullable()

        table
        .boolean('completed')
        .notNullable()

        table
        .timestamp('createdAt')
        .defaultTo(knex.fn.now());
    })

    .createTable('actions', function(tbl) {
        tbl.increments()

        tbl
        .string('description', 128)

        tbl
        .string('notes', 255)

        tbl
        .boolean('completed')
        .notNullable()

        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl
        .timestamp('createdAt')
        .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
