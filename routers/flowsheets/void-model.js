const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('void');
}

function findById(id) {
    return db('void')
    .where({id})
    .first();
}

async function add(void) {
    return db('void')
    .insert(void)
    .returning('id');
    
}

function findBy(filter) {
    return db('void').where(filter);
  }

function update(id, changes){
return db('void')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('void')
            .where({id})
            .first()
    })
}