import CommandHandler from '../../components/command';
import { options } from './options';
import { args } from './arguments';
import { input } from './input';

export const generateCommand = CommandHandler(input, args, options);
