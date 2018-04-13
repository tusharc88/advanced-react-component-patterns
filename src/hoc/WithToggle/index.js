import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { TOGGLE_CONTEXT } from '../../constants';

function withToggle(Component) {
  function HOC(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT];
    return <Component toggle={toggleContext} {...props} />;
  }
  HOC.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  };

  // for referring to inner component while testing,
  // or using for React Storybook
  HOC.WrappedComponent = Component;

  // for better debugging, it shows descriptive displayName in React dev tools
  HOC.displayName = `withToggle ${Component.displayName || Component.name}`;

  // wrapping HOC in hoistNonReactStatics to make all non react static things
  // in Wrapped Component available at this HOC level
  return hoistNonReactStatics(HOC, Component);
}

export default withToggle;
