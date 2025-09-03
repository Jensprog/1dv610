/** 
 * Greets the user with a friendly message.
 */

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import chalk from 'chalk';

const rl = readline.createInterface({ input, output });

const name = await rl.question("Vad heter du?: ");

console.log(chalk.blue("Hej " + name + "!🫡"));

rl.close();