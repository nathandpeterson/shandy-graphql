const db = require('../db/knex')
const BookModel = require('./BookModel')

class AuthorModel {
    static getAll(){
        return db('authors')
    }
    static getOne(id){
        return db('authors').where({id}).first()
        .then(authorInfo => {
            return db('author_book').where({author_id: authorInfo.id})
            .then(joinInfo => {
                const bookIds = joinInfo.map(data => data.book_id)
                const bookPromises = []
                bookIds.forEach(id => {
                    const promise = db('books').where({id})
                    bookPromises.push(promise)
                })
                return Promise.all(bookPromises)
                .then(books => {
                    authorInfo.books = books
                    return authorInfo
                })
                
            })
        })
    }
}

module.exports = AuthorModel