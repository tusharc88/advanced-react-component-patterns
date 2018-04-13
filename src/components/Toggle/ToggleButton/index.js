import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../../Switch/index';

const ToggleButton = ({ on, toggle, ...props }) => (
  <Switch on={on} onClick={toggle} {...props} />
);

ToggleButton.propTypes = {
  on: PropTypes.bool,
  toggle: PropTypes.func,
};

ToggleButton.defaultProps = {
  on: false,
  toggle: () => {},
};

export default ToggleButton;
