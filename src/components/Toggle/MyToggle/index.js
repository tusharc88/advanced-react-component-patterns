import React from 'react';
import PropTypes from 'prop-types';
import withToggle from '../../../hoc/WithToggle/index';

const MyToggle = ({ toggle: { on, toggle } }) => (
  <button onClick={toggle}>{on ? 'on' : 'off'}</button>
);

MyToggle.defaultProps = {
  toggle: {
    on: false,
    toggle: () => {},
  },
};

MyToggle.propTypes = {
  toggle: PropTypes.shape({
    on: PropTypes.bool,
    toggle: PropTypes.func,
  }),
};

export default withToggle(MyToggle);
