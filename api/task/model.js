const db = require('../../data/dbConfig');

module.exports = {

    getAll() {
        return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.name as project_name',
         'p.description as project_description',
        't.description',
        't.notes',
        db.raw("CASE WHEN t.completed = 0 THEN 'false' ELSE 'true' END AS completed")
        )
    },
    create(task) {
        return db('tasks').insert(task)
          .then(([id]) => {
            return db('tasks as t')
            .join('projects as p', 'p.id', 't.project_id')
            .select('p.name as project_name',
            'p.description as project_description',
            't.description',
            't.notes',
            db.raw("CASE WHEN t.completed = 0 THEN 'false' ELSE 'true' END AS completed"))
            .where('t.id', id).first()
        })
    }
}
