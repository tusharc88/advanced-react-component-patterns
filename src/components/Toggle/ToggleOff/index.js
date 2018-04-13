import withToggle from '../../../hoc/WithToggle/index';

const ToggleOff = ({ on, children }) => (on ? null : children);

export default withToggle(ToggleOff);
