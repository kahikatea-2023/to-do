exports.seed = function (knex) {
  return knex('todo')
    .del()
    .then(function () {
      return knex('todo').insert([{ id: 1, name: 'Display here' }])
    })
}
