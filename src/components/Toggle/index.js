import React from 'react';
import PropTypes from 'prop-types';
import ToggleOn from './ToggleOn/index';
import ToggleOff from './ToggleOff/index';
import ToggleButton from './ToggleButton/index';

class Toggle extends React.Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;

  static defaultProps = {
    onToggle: () => {},
  };

  static propTypes = {
    onToggle: PropTypes.func,
    children: PropTypes.node.isRequired,
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
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      })
    );

    return <div>{children}</div>;
  }
}

export default Toggle;
