
exports.seed = function(knex) {
  return knex('tasks').insert([
    {project_id: 1, description: "Find the ladder", notes: "Make sure safety first."},
    {project_id: 2, description: "Write some Code", notes: "Get better at SQL."}
  ]); 
};
