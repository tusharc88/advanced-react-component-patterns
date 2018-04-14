import React from 'react';
import { hot } from 'react-hot-loader';
import Toggle from './components/Toggle/index';
import Switch from './components/Switch/index';

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
      onToggle={on => console.log('toggle', on)}
      render={({ on, getTogglerProps }) => (
        <div>
          <Switch on={on} {...getTogglerProps()} />
          <hr />
          <button
            {...getTogglerProps({
              onClick: () => alert('hi'),
            })}
          >
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}
    />
  </div>
);

export default hot(module)(Root);
