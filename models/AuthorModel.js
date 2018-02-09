const db = require('../db/knex')

class AuthorModel {
    static getAll(){
        return db('authors')
    }
    static getOne(id){
        return db('authors').where({id})
    }
}

module.exports = AuthorModel