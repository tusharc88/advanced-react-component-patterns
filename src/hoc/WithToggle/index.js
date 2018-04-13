import React from 'react';
import PropTypes from 'prop-types';
import { TOGGLE_CONTEXT } from '../../constants';

function withToggle(Component) {
  function HOC({ innerRef, ...props }, context) {
    const toggleContext = context[TOGGLE_CONTEXT];
    return <Component ref={innerRef} toggle={toggleContext} {...props} />;
  }

  HOC.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };

  HOC.defaultProps = {
    innerRef: () => {},
  };

  HOC.propTypes = {
    innerRef: PropTypes.func,
  };

  HOC.displayName = `withToggle ${Component.displayName || Component.name}`;
  return HOC;
}

export default withToggle;
