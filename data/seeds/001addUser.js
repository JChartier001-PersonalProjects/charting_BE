
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, email: 'nurse1@email.com', password: 'pass'}
        
      ]);
    });
};
