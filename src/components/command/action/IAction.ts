import { Command, Argument, Option } from 'commander';

export interface IAction {
    args: Argument[];
    options: Option[];
    command?: Command;
}
