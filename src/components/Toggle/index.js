import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
  static defaultProps = {
    defaultOn: false,
    onToggle: () => {},
    onReset: () => {},
    render: () => <div>Nothing to see here... Yet!</div>,
  };

  static propTypes = {
    defaultOn: PropTypes.bool,
    onToggle: PropTypes.func,
    onReset: PropTypes.func,
    render: PropTypes.func,
  };

  state = {
    on: this.props.defaultOn,
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

  reset = () => {
    this.setState({ on: this.props.defaultOn }, () => {
      this.props.onReset(this.state.on);
    });
  };

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
      reset: this.reset,
      getTogglerProps: this.getTogglerProps,
    });
  }
}

export default Toggle;
