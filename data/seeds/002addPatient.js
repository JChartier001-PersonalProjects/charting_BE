
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('patient').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {mem_id: 1234, first_name: 'fake', last_name: 'name', address: '123 main st', city: 'Anywhere', state: 'US', zip: 12354, phone_number: 1234567890, d_o_b: 7/5/2001, code: true, user_id: 3},
        {id: 2, first_name: 'alsofake', last_name: 'name', address: '123 main st', city: 'Anywhere', state: 'US', zip: 12354, phone_number: 1234567890, d_o_b: 1/5/2001, code: true, user_id: 5},
        {id: 1, first_name: 'fake', last_name: 'name', address: '123 main st', city: 'Anywhere', state: 'US', zip: 12354, phone_number: 1234567890, d_o_b: 7/5/2001, code: true, user_id: 1}
        
      ]);
    });
};
