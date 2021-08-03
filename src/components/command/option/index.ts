import { Option } from 'commander';
import { IOptionInput } from './IOptionInput';

const OptionBuilder = (options: IOptionInput[]): Option[] => {
    return options.map((option): Option => {
        return new Option(option.flag, option.description);
    });
};

export default OptionBuilder;
