const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

class TextModel {
  static getOneText(path){
    return fs.readFileSync(path, 'utf-8')
  }

  static async getFragment(path, paragraphNumber){
    // Returns a promise that returns a specified paragraph number
    return this.getOneText(path)
      .then(text => {
        const paragraphs = this.breakIntoParagraphs(text)
        return paragraphs[paragraphNumber]
      })
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
  static createMultipleFrequencies(paragraphs){
    // Takes an indeterminate amount of paragraphs and returns a word frequency object for all paragraphs
    const wordFrequency = {}
    paragraphs.forEach(paragraph => {
      let p_freq = this.createOneFrequency([paragraph])
      let p_keys = Object.keys(p_freq)
      p_keys.forEach(key => {
        (!wordFrequency[key]) ? wordFrequency[key] = p_freq[key] :
        wordFrequency[key] += p_freq[key]
      })
    })
    return wordFrequency
  }
  static returnFrequencies(filepath, start, end){
    // takes a filepath and an array of paragraph indexes
    const text = this.getOneText('../texts/mrs_dalloway.txt')
        console.log(text);
        const allParagraphs = this.breakIntoParagraphs(text)
        const selectedParagraphs = []
        for(let i = start; i <= end; i++){
          selectedParagraphs.push(allParagraphs[i])
        }
        console.log(selectedParagraphs);
        return this.createMultipleFrequencies(selectedParagraphs)

  }
}

module.exports = TextModel

//
// TextModel.getOneText('../texts/mrs_dalloway.txt')
//   .then(text => {
//       const paragraphs = TextModel.breakIntoParagraphs(text)
//       const freq = TextModel.createMultipleFrequencies(paragraphs[3], paragraphs[4])
//       console.log(freq);
//       return freq
// })
