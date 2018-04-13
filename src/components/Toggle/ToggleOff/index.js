import withToggle from '../../../hoc/WithToggle/index';

const ToggleOff = ({ toggle: { on }, children }) => (on ? null : children);

export default withToggle(ToggleOff);
