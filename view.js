const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?\n'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });