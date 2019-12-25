const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('nurse');
}

function findById(id) {
    return db('nurse')
    .where({id})
    .first();
}

async function add(nurse) {
    return db('nurse')
    .insert(nurse)
    .returning('id');
    
}

function findBy(filter) {
    return db('nurse').where(filter);
  }

function update(id, changes){
return db('nurse')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('nurse')
            .where({id})
            .first()
    })
}