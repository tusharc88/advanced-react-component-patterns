import PropTypes from 'prop-types';
import { TOGGLE_CONTEXT } from '../constants';

const ToggleOff = ({ children }, context) => {
  const { on } = context[TOGGLE_CONTEXT];
  return on ? null : children;
};

ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

export default ToggleOff;
