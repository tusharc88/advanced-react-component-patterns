import React from 'react';
import { hot } from 'react-hot-loader';
import Toggle from './components/Toggle/index';
import Switch from './components/Switch/index';
// import MyUpperCaseInput from './components/MyUpperCaseInput/index';

const Root = () => (
  <div
    style={{
      marginTop: 40,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    }}
  >
    <Toggle
      defaultOn
      onToggle={on => console.log('toggle', on)}
      onReset={on => console.log('reset', on)}
      render={toggle => (
        <div>
          <Switch {...toggle.getTogglerProps({ on: toggle.on })} />
          <hr />
          <button onClick={() => toggle.reset()}>Reset</button>
        </div>
      )}
    />
    {/* <MyUpperCaseInput /> */}
  </div>
);

export default hot(module)(Root);
