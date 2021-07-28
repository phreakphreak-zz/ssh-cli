import { Argument } from 'commander';
import { IArgument } from './IArgument';

const ArgumentBuilder = (args: IArgument[]): Argument[] => {
    return args.map(({ arg, description }): Argument => {
        return new Argument(arg, description);
    });
};

export default ArgumentBuilder;
