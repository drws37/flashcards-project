const inquirer = require("inquirer");
const { getAnswer2,getQuestion2 } = require("./module.js");


async function callInquirers1() {
  const quest = await getQuestion2();
  const trueAnswer = await getAnswer2();

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



module.exports = { callInquirers1 };