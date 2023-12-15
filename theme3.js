const inquirer = require("inquirer");
const { getAnswer } = require("./module.js");
const { getQuestion } = require("./module.js");

async function callInquirers() {
  const quest = await getQuestion();
  const trueAnswer = await getAnswer();

  await inquirer
    .prompt([
      {
        type: "rawlist",
        name: "theme",
        message: "Выберите тему",
        choices: ["ракун", "гг", "проебали"],
      },
    ])

    .then((themes) => {
      if (themes.theme === "ракун") {
      }
    });
  for (let i = 0; i < quest.length; i += 1) {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "answer",
          message: `${quest[i]}`,
        },
      ])
      .then((answers) => {
        if (answers.answer === trueAnswer[i]) {
          console.log("Правильно!!!!!!");
        } else if (answers.answer !== trueAnswer[i]) {
          console.log("Не верно");
        }
      });
  }
}

callInquirers();

module.exports = { callInquirers };
