import withToggle from '../../../hoc/WithToggle/index';

const ToggleOn = ({ toggle: { on }, children }) => (on ? children : null);

export default withToggle(ToggleOn);
