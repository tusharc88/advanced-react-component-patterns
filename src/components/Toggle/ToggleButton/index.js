import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../../Switch/index';
import { TOGGLE_CONTEXT } from '../constants';

const ToggleButton = (props, context) => {
  const { on, toggle } = context[TOGGLE_CONTEXT];
  return <Switch on={on} onClick={toggle} />;
};

ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

ToggleButton.defaultProps = {
  on: false,
  toggle: () => {},
};

export default ToggleButton;
