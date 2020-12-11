const db = require('../../data/dbConfig'); 

module.exports = {
  getAll() {
    return db('resources');
  }, 
  create(resource) {
    return db('resources').insert(resource)
      .then(([id]) => {
        return db('resources').where('id', id).first()
      })
    }
}
