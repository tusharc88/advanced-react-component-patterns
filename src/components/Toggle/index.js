import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
  static defaultProps = {
    onToggle: () => {},
    render: () => <div>Nothing to see here... Yet!</div>,
  };

  static propTypes = {
    onToggle: PropTypes.func,
    render: PropTypes.func,
  };

  state = {
    on: false,
  };

  getTogglerProps = ({ onClick, ...props } = {}) => ({
    'aria-expanded': this.state.on,
    onClick: (...args) => {
      if (onClick) {
        onClick(...args);
      }
      this.toggle(...args);
    },
    ...props,
  });

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps,
    });
  }
}

export default Toggle;
