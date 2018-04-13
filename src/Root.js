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
    <p>My React App</p>
    <Toggle onToggle={on => console.log('toggle', on)} />
  </div>
);

export default hot(module)(Root);
