const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('suction');
}

function findById(id) {
    return db('suction')
    .where({id})
    .first();
}

async function add(suction) {
    return db('suction')
    .insert(suction)
    .returning('id');
    
}

function findBy(filter) {
    return db('suction').where(filter);
  }

function update(id, changes){
return db('suction')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('suction')
            .where({id})
            .first()
    })
}