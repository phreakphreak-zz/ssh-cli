import { Command, Argument, Option } from 'commander';
import { ICommand } from './ICommand';
import { IArgument } from './argument/IArgument';
import { IOption } from './option/IOption';
import optionBuilder from './option';
import argumentBuilder from './argument';

const CommandBuilder = (commandInput: ICommand, argsInput: IArgument[], optionsInput: IOption[]): Command => {
    const args: Argument[] = argumentBuilder(argsInput);
    const options: Option[] = optionBuilder(optionsInput);
    const command: Command = new Command(commandInput.name);
    args.forEach((arg: Argument) => command.addArgument(arg));
    options.forEach((option: Option) => command.addOption(option));
    return command;
};

export default CommandBuilder;
