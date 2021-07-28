import { IAction } from './IAction';

const ActionBuilder = (actionInputs: IAction) => {
    const { options, args } = actionInputs;
    console.log(args, options);
};

export default ActionBuilder;
