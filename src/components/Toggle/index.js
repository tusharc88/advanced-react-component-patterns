import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../Switch/index';

class Toggle extends React.Component {
  static defaultProps = {
    onToggle: () => {},
  };

  static propTypes = {
    onToggle: PropTypes.func,
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
    const { on } = this.state;
    return <Switch on={on} onClick={this.toggle} />;
  }
}

export default Toggle;
