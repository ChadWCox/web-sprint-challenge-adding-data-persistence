
exports.seed = function(knex) {
  return knex('projects').insert([
    {name: "Put up lights", description: "christmas is fun"},
    {name: "Read SQL", description: "Become a valued programer."}
  ]); 
};
