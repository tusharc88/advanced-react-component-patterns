import React from 'react';
import PropTypes from 'prop-types';
import ToggleOn from './ToggleOn/index';
import ToggleOff from './ToggleOff/index';
import ToggleButton from './ToggleButton/index';
import { TOGGLE_CONTEXT } from '../../constants';

class Toggle extends React.Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;

  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };

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

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle,
      },
    };
  }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Toggle;
