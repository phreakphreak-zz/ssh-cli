import { Argument } from 'commander';
import { IArgumentInput } from './IArgumentInput';

const ArgumentBuilder = (args: IArgumentInput[]): Argument[] => {
    return args.map(({ arg, description }): Argument => {
        return new Argument(arg, description);
    });
};

export default ArgumentBuilder;
