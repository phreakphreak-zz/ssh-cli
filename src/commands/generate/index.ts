import CommandHandler from '../../components/command';
import { options } from './options';
import { args } from './arguments';

export const generateCommand = CommandHandler(
    {
        name: 'generate',
        description: 'Generate a new SSH Id'
    },
    args,
    options
);
