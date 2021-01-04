
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id'); 
        tbl.string('name', 128)
          .notNullable();
        tbl.string('description', 128).nullable(); 
        tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
      })
      .createTable('resources', tbl=> {
        tbl.increments('id'); 
        tbl.string('name', 128)
          .unique()
          .notNullable(); 
        tbl.string('description', 128).nullable(); 
      })
      .createTable('tasks', tbl => {
        tbl.increments('id'); 
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id').inTable('projects')
          .onDelete('RESTRICT').onUpdate('RESTRICT'); 
        tbl.string('description', 128)
          .notNullable();
        tbl.string('notes', 440).nullable(); 
        tbl.boolean('completed')
          .notNullable()
          .defaultTo(false);
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
