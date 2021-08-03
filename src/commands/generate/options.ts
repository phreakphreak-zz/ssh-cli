import { IOptionInput } from '../../components/command/option/IOptionInput';

export const options: IOptionInput[] = [
    {
        name: 'bits',
        flag: '-b, --bits <type>',
        description: 'The number of bits to use for the generated key. Default: 2048'
    },
    {
        name: 'algorithm',
        flag: '-a, --algorithm <type>',
        description: 'The algorithm to use for the generated key. Default: RSA'
    },
    {
        name: 'service',
        flag: '-s, --service <type>',
        description: 'The service to use for the generated key. Default: Github'
    },
    {
        name: 'passphrase',
        flag: '-p, --passphrase <type>',
        description: 'The passphrase to use for the generated key. Default: empty'
    }
];
