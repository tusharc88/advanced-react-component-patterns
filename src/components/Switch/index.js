import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ on, className = '', ...props }) => (
  <div className="toggle">
    <input className="toggle-input" type="checkbox" />
    <button
      className={`${className} toggle-btn ${
        on ? 'toggle-btn-on' : 'toggle-btn-off'
      }`}
      aria-expanded={on}
      {...props}
    />
  </div>
);

Switch.defaultProps = {
  on: false,
  className: '',
};

Switch.propTypes = {
  on: PropTypes.bool,
  className: PropTypes.string,
};

export default Switch;
