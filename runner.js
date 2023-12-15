const inquirer = require("inquirer");
const { callInquirers1 } = require("./theme1");
const { callInquirers2 } = require("./theme2");
const { callInquirers3 } = require("./theme3");
const { EOL } = require("os");
const fs = require("fs").promises;

async function quiz() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "theme",
        message: "Выберите тему:",
        choices: ['Тема 1',"Тема 2", 'Тема 3']
      },
    ])
    .then((themes) => {
      if (themes.theme === 'Тема 1'){
        callInquirers1();
      }
      if (themes.theme === 'Тема 2'){
        callInquirers2();
      }
      if (themes.theme === 'Тема 3'){
        callInquirers3();
      }
    });
}
quiz();
