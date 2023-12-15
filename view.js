const inquirer = require("inquirer");

const quest = ['Твоё любимое животное?', 'Твоё не любимое животное?'];

async function callInquirers() {
  const inq1 = await inquirer.prompt([
    { type: "input", name: "username", message: "Введи имя:" },
    {
      type: "input",
      name: "racoonMeal",
      message: "Являются ли еноты травоядными, плотоядными или всеядными??",
    },
    {
      type: "list",
      name: "favAnimal",
      message: `${quest[0]}`,
      choices: ['Енот', 'Не енот'],
    }
  ]).then((answers) => console.log(answers));

}


callInquirers();