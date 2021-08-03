import { generateCommand as command } from '../../commands/generate';

describe('generate', () => {
    test('verify command name', () => {
        expect(command.name()).toBe('generate');
    });
    test('verify command description', () => {
        expect(command.description()).toBe('Generate a new SSH ID');
    });
});

// test('test command generate', () => {
//     expect(command.name()).toBe('generate');
//     // expect(command.description).toBe('Generate new component');
//     console.log(command.parse(['generate', 'id', '--bits', '2048', '--algorithm', 'rsa']));
//     // expect(command.opts()).toBe();
//     // expect(command.options[0].short).toBe('-t');
//     // expect(command.options[0].long).toBe('--template');
//     // expect(command.options[0].type).toBe('string');
//     // expect(command.options[0].description).toBe('Template name');
// });
