import { Option } from 'commander';
import { IOption } from './IOption';

const OptionBuilder = (options: IOption[]): Option[] => {
    return options.map((option): Option => {
        return new Option(option.flag, option.description);
    });
};

export default OptionBuilder;
