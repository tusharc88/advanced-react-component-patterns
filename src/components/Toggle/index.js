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
      togglerProps: {
        'aria-expanded': this.state.on,
        onClick: this.toggle,
      },
    });
  }
}

export default Toggle;
