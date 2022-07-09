exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('login').then(function () {
      // Inserts seed entries
      return knex('login').insert([
        { user: 'admin', password: 'admin' }
      ]);
    });
};