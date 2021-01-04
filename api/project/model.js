const db = require('../../data/dbConfig');

module.exports = {

    getAll() {
        return db('projects')
        .select(
            'id',
            'name',
            'description',
            db.raw("CASE WHEN completed = 0 THEN 'false' ELSE 'true' END AS completed"))      
    },
    create(project) {
    return db('projects').insert(project)
      .then(([id]) => {
        return db('projects')
        .select(
            'id',
            'name',
            'description',
            db.raw("CASE WHEN completed = 0 THEN 'false' ELSE 'true' END AS completed"))
            .where('id', id).first()
      })
    }

}

