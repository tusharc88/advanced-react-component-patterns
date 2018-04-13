import React from 'react';
import PropTypes from 'prop-types';
import withToggle from '../../../hoc/WithToggle/index';

class MyToggle extends React.Component {
  static defaultProps = {
    toggle: {
      on: false,
      toggle: () => {},
    },
  };

  static propTypes = {
    toggle: PropTypes.shape({
      on: PropTypes.bool,
      toggle: PropTypes.func,
    }),
  };

  focus = () => this.button.focus();

  render() {
    const {
      toggle: { on, toggle },
    } = this.props;
    return (
      <button
        onClick={toggle}
        ref={button => {
          this.button = button;
        }}
      >
        {on ? 'on' : 'off'}
      </button>
    );
  }
}

export default withToggle(MyToggle);
