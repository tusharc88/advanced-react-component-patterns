import React from 'react';
import PropTypes from 'prop-types';
import withToggle from '../../../hoc/WithToggle/index';

const MyToggle = ({ on, toggle }) => (
  <button onClick={toggle}>{on ? 'on' : 'off'}</button>
);

MyToggle.defaultProps = {
  on: false,
  toggle: () => {},
};

MyToggle.propTypes = {
  on: PropTypes.bool,
  toggle: PropTypes.func,
};

export default withToggle(MyToggle);
