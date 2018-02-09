const db = require('../db/knex')

class BookModel {
    static getAll(){
        return db('books')
    }
    static getOne(id){
        return db('books').where({id})
    }
}

module.exports = BookModel