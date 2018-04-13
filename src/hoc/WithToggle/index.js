import React from 'react';
import PropTypes from 'prop-types';
import { TOGGLE_CONTEXT } from '../../constants';

function withToggle(Component) {
  function HOC(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT];
    return <Component toggle={toggleContext} {...props} />;
  }
  HOC.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };
  return HOC;
}

export default withToggle;
