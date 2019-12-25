const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('assessment');
}

function findById(id) {
    return db('assessment')
    .where({id})
    .first();
}

async function add(assessment) {
    return db('assessment')
    .insert(assessment)
    .returning('id');
    
}

function findBy(filter) {
    return db('assessment').where(filter);
  }

function update(id, changes){
return db('assessment')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('assessment')
            .where({id})
            .first()
    })
}