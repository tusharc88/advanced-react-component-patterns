import React from 'react';

class MyUpperCaseInput extends React.Component {
  state = { upperValue: '', lowerValue: '' };
  handleChange = e =>
    this.setState({
      upperValue: e.target.value.toUpperCase(),
      lowerValue: e.target.value.toLowerCase(),
    });
  render() {
    const { upperValue, lowerValue } = this.state;
    return (
      <div>
        <label htmlFor="upperValue">
          Upper:
          <input value={upperValue} onChange={this.handleChange} />
        </label>
        <hr />
        <label htmlFor="lowerValue">
          Lower:
          <input value={lowerValue} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default MyUpperCaseInput;
