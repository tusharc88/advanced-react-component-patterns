import PropTypes from 'prop-types';
import { TOGGLE_CONTEXT } from '../constants';

const ToggleOn = ({ children }, context) => {
  const { on } = context[TOGGLE_CONTEXT];
  return on ? children : null;
};

ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

export default ToggleOn;
