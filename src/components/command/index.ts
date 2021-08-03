import { Command, Argument, Option } from 'commander';
import { ICommandInput } from './ICommandInput';
import { IArgumentInput } from './argument/IArgumentInput';
import { IOptionInput } from './option/IOptionInput';
import optionBuilder from './option';
import argumentBuilder from './argument';
import actionBuilder from './action';

const CommandBuilder = (
    commandInput: ICommandInput,
    argsInput: IArgumentInput[],
    optionsInput: IOptionInput[]
): Command => {
    const args: Argument[] = argumentBuilder(argsInput);
    const options: Option[] = optionBuilder(optionsInput);
    const command: Command = new Command(commandInput.name).description(commandInput.description);
    args.forEach((arg: Argument) => command.addArgument(arg));
    options.forEach((option: Option) => command.addOption(option));

    command.action((args, options, command) => {
        actionBuilder({ command, options, args });
    });

    return command;
};

export default CommandBuilder;
