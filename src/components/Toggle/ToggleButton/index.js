import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../../Switch/index';
import withToggle from '../../../hoc/WithToggle/index';

const ToggleButton = ({ toggle: { on, toggle } }) => (
  <Switch on={on} onClick={toggle} />
);

ToggleButton.defaultProps = {
  toggle: {
    on: false,
    toggle: () => {},
  },
};

ToggleButton.propTypes = {
  toggle: PropTypes.shape({
    on: PropTypes.bool,
    toggle: PropTypes.func,
  }),
};

export default withToggle(ToggleButton);
