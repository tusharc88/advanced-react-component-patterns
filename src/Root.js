import React from 'react';
import { hot } from 'react-hot-loader';
import Toggle from './components/Toggle/index';

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
    <Toggle onToggle={on => console.log('toggle', on)}>
      <Toggle.Button />
      <div>
        <div>
          <Toggle.On>The button is on</Toggle.On>
          <Toggle.Off>The button is off</Toggle.Off>
        </div>
      </div>
    </Toggle>
  </div>
);

export default hot(module)(Root);
