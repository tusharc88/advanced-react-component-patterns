import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../../Switch/index';
import withToggle from '../../../hoc/WithToggle/index';

const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

ToggleButton.propTypes = {
  on: PropTypes.bool,
  toggle: PropTypes.func,
};

ToggleButton.defaultProps = {
  on: false,
  toggle: () => {},
};

export default withToggle(ToggleButton);
