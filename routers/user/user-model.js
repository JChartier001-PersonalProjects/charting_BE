const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy,
    update
};

function find() {
    return db('user').select('id', 'username', 'password');
}

function findById(id) {
    return db('user')
    .where({id})
    .first();
}

async function add(user) {
    return db('user')
    .insert(user)
    .returning('id');
    
}

function findBy(filter) {
    return db('user').where(filter);
  }

function update(id, changes){
return db('user')
    .where({id})
    .update(changes, "id")
    .then(id => {
        return db('user')
            .where({id})
            .first()
    })
}