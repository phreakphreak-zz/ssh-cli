import { Command } from 'commander';
import { generateCommand } from './commands/generate';

// const program = new Command();

// program.parse(process.argv);
const program = new Command();

// const fooCommand = new Command('foo');
// const barCommand = new Command('bar');
// const yepCommand = new Command('yep');

// yepCommand
//     .argument('[arg]')
//     .option('-o, --opt <type>')
//     .description('yep bar')
//     .action((args, options) => {
//         console.log(args, options);
//     });

// fooCommand
//     .argument('<arg>')
//     .description('des bar')
//     .action((arg) => {
//         console.log(arg);
//     });

// barCommand
//     .argument('<arg>')
//     .description('des bar')
//     .action((arg) => {
//         console.log(arg);
//     });

// program.addCommand(fooCommand);
// program.addCommand(barCommand);
// program.addCommand(yepCommand);

program.addCommand(generateCommand);

program.parse(process.argv);
