const inquirer = require("inquirer");
const { getAnswer3,getQuestion3 } = require("./module.js");


async function callInquirers2() {
  const quest = await getQuestion3();
  const trueAnswer = await getAnswer3();

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



module.exports = { callInquirers2 };