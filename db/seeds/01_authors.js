
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, first_name: 'Virginia', last_name: 'Woolf'},
        {id: 2, first_name: 'Charles', last_name: 'Dickens'}, 
        {id: 3, first_name: 'T.S.', last_name: 'Eliot'},
        {id: 4, first_name: 'Bram', last_name: 'Stoker'},
        {id: 5, first_name: 'Jacob', last_name: 'Grimm'},
        {id: 6, first_name: 'Wilhelm', last_name: 'Grimm'},
        {id: 7, first_name: 'Laurence', last_name: 'Sterne'},
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('authors_id_seq', (SELECT MAX(id) FROM authors));`
      )
    })
}
