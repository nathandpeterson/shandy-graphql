const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const txt = require('txt')

class TextModel {
  static async getOneText(path){
    return await fs.readFileSync(path, 'utf-8')
  }
  static breakIntoParagraphs(text){
    const lines = text.split('\n')
    const paragraphs = {}
    let counter = 0
    for(let i = 0; i < lines.length; i++) {
      if(!lines[i]) {
        counter++
        continue
      }
      if(paragraphs[counter]) {
        paragraphs[counter].push(lines[i])
      } else {
          paragraphs[counter] = []
          paragraphs[counter].push(lines[i])
      }
    }
    return paragraphs
  }
  static createOneFrequency(paragraph){
    // Takes one paragraphs and returns a word frequency object
    const wordFrequency = {}
    for(let i = 0; i < paragraph.length; i++){
      let line = paragraph[i]
      // removes punctuation from line, leaving only alphabetic chars
      let alphabetLine = line.replace(/[^\w\s]/g,' ')
      let words = alphabetLine.split(' ')
      for(let i = 0; i < words.length; i++){
        if(!words[i]) continue
        let word = words[i].toLowerCase()
        if(!wordFrequency[word]){
          wordFrequency[word] = 1
        } else {
          wordFrequency[word] += 1
        }
      }
    }
    return wordFrequency
  }
  static createMultipleFrequencies(...paragraphs){
    // Takes an indeterminate amount of paragraphs and returns a word frequency object for all paragraphs
    const wordFrequency = {}
    paragraphs.forEach(paragraph => {
      let p_freq = this.createOneFrequency(paragraph)
      let p_keys = Object.keys(p_freq)
      p_keys.forEach(key => {
        (!wordFrequency[key]) ? wordFrequency[key] = p_freq[key] :
        wordFrequency[key] += p_freq[key]
      })
    })
    return wordFrequency
  }
}


// TextModel.getOneText('../texts/mrs_dalloway.txt')
//   .then(text => {
//       const paragraphs = TextModel.breakIntoParagraphs(text)
//       TextModel.createMultipleFrequencies(paragraphs[2], paragraphs[3])
// })
