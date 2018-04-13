import React from 'react';
import { hot } from 'react-hot-loader';
import Toggle from './components/Toggle/index';
import MyToggle from './components/Toggle/MyToggle/index';
import MyEventComponent from './components/MyEventComponent/index';

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
    <Toggle onToggle={on => (on ? this.myToggle.focus() : null)}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
      <hr />
      <MyToggle
        innerRef={myToggle => {
          this.myToggle = myToggle;
        }}
      />
      <hr />
      <MyEventComponent event="onClick" on={e => alert(e.type)} />
    </Toggle>
  </div>
);

export default hot(module)(Root);
