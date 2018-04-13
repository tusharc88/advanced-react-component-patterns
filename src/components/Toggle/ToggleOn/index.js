import withToggle from '../../../hoc/WithToggle/index';

const ToggleOn = ({ on, children }) => (on ? children : null);

export default withToggle(ToggleOn);
