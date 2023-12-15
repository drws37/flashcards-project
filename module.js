const { log } = require("console");
const { EOL } = require("os");
const fs = require("fs").promises;

async function getAnswer(arrAnswer = []) {
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
getAnswer().then((data) => console.log(data))


async function getQuestion(arrQuestion = []) {
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
getQuestion().then((answer) => console.log(answer))

