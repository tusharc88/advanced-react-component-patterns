import React from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch/index';

export function renderSwitch({ on, toggle }) {
  return <Switch on={on} onClick={toggle} />;
}

renderSwitch.defaultProps = {
  on: false,
  toggle: () => {},
};

renderSwitch.propTypes = {
  on: PropTypes.bool,
  toggle: PropTypes.func,
};
