
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adls').del()
    .then(function () {
      // Inserts seed entries
      return knex('adls').insert([
        {id: 1, time_done: '12/24/2019 13:30', bathing: 'completed', oral_care: "completed", trach_care: 'completed', gt_care: 'completed', nail_care: 'completed', dressing: 'completed', position: 'chair', nurse_id: 1, pt_id: 1},
        {id: 2, time_done: '12/24/2019 10:30',  oral_care: 'refused', trach_care: 'completed', gt_care: 'completed', dressing: 'completed', position: 'chair', nurse_id: 1, pt_id: 2},
        {id: 1, time_done: '12/24/2019 13:30', bathing: 'completed', oral_care: "completed", trach_care: 'completed', gt_care: 'completed',  position: 'laying right side', nurse_id: 2, pt_id: 2},
      ]);
    });
};
