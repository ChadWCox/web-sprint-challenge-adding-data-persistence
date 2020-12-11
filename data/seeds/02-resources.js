
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: "Truck"},
    {name: "Legos"},
    {name: "Glue"}
  ]); 
};
