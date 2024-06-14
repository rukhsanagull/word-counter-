#! /user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const sen = await inquirer.prompt([
    { name: "sentence",
        type: "input",
        message: "Enter your sentence to count word" }
]);
const words = sen.sentence.trim().split(" ");
console.log(words);
console.log(chalk.bold.greenBright(`Your sentence has ${words.length} words`));
