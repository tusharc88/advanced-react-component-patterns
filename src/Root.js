import React from 'react';
import { hot } from 'react-hot-loader';
import Toggle from './components/Toggle/index';
import MyToggle from './components/Toggle/MyToggle/index';

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
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <MyToggle />
    </Toggle>
  </div>
);

export default hot(module)(Root);
