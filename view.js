const inquirer = require("inquirer");
// const { getAnswer } = require("./controller.js");
// const { getQuestion } = require("./controller.js");

const quest = [
  "Еноты являются травоядными, плотоядными или всеядными?",
  "Еноты ведут ночной образ жизни",
  "Еноты впадают в спячку",
];

async function callInquirers() {
  const inq = await inquirer
    .prompt([
      { type: "input", name: "username", message: "Введи имя:" },
    ])
    .then((answers) => console.log(answers));
  for (let i = 0; i < quest.length; i += 1) {
    const inq = await inquirer
    .prompt([
      {
        type: "input",
        name: "racoonMeal",
        message: `${quest[i]}`,
      },
    ])
    .then((answers) => console.log(answers));
  }
}

callInquirers();
