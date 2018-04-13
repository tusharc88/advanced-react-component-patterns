import React from 'react';
import PropTypes from 'prop-types';
import withToggle from '../../hoc/WithToggle/index';

const MyEventComponent = ({ toggle: { on: onToggle }, on, event }) => {
  // console.log(`Toggle: ${toggle} on: ${on} event: ${event}`);
  const props = { [event]: on };
  return onToggle ? <button {...props}>The {event} event</button> : null;
};

MyEventComponent.propTypes = {
  event: PropTypes.string,
  on: PropTypes.func,
  toggle: PropTypes.shape({
    on: PropTypes.bool,
  }),
};

MyEventComponent.defaultProps = {
  event: '',
  on: () => {},
  toggle: {
    on: false,
  },
};

export default withToggle(MyEventComponent);
