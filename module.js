const { log } = require("console");
const { EOL } = require("os");
const fs = require("fs").promises;

// ----------------------------------------------- тема 1 --------------------------------------------------

async function getAnswer1(arrAnswer = []) {
  let read = (
    await fs.readFile("./topics/raccoon_flashcard_data.txt", "utf-8")
  ).split(EOL);
  for (let i = 0; i < read.length; i += 1) {
    if (i % 2 !== 0) {
      arrAnswer.push(read[i]);
    }
    
  }
  return arrAnswer
}
getAnswer1().then((data) => data)


async function getQuestion1(arrQuestion = []) {
  let read = (
    await fs.readFile("./topics/raccoon_flashcard_data.txt", "utf-8")
  ).split(EOL);
  for (let i = 0; i < read.length; i += 1) {
    if (i % 2 === 0) {
      arrQuestion.push(read[i]);
    
  }
}
return arrQuestion
}
getQuestion1().then((answer) => answer)
// ----------------------------------------------- тема 2 --------------------------------------------------

async function getAnswer2(arrAnswer = []) {
  let read = (
    await fs.readFile("./topics/otter_flashcard_data.txt", "utf-8")
  ).split(EOL);
  for (let i = 0; i < read.length; i += 1) {
    if (i % 2 !== 0) {
      arrAnswer.push(read[i]);
    }
    
  }
  return arrAnswer
}
getAnswer2().then((data) => data)


async function getQuestion2(arrQuestion = []) {
  let read = (
    await fs.readFile("./topics/otter_flashcard_data.txt", "utf-8")
  ).split(EOL);
  for (let i = 0; i < read.length; i += 1) {
    if (i % 2 === 0) {
      arrQuestion.push(read[i]);
    
  }
}
return arrQuestion
}
getQuestion2().then((answer) => answer)





// ----------------------------------------------- тема 3 --------------------------------------------------
async function getAnswer3(arrAnswer = []) {
  let read = (
    await fs.readFile("./topics/nighthawk_flashcard_data.txt", "utf-8")
  ).split(EOL);
  for (let i = 0; i < read.length; i += 1) {
    if (i % 2 !== 0) {
      arrAnswer.push(read[i]);
    }
    
  }
  return arrAnswer
}
getAnswer3().then((data) => data)


async function getQuestion3(arrQuestion = []) {
  let read = (
    await fs.readFile("./topics/nighthawk_flashcard_data.txt", "utf-8")
  ).split(EOL);
  for (let i = 0; i < read.length; i += 1) {
    if (i % 2 === 0) {
      arrQuestion.push(read[i]);
    
  }
}
return arrQuestion
}
getQuestion3().then((answer) => answer)





module.exports = {getAnswer1, getQuestion1, getAnswer2, getQuestion2, getAnswer3, getQuestion3 }

