import React from 'react';
import { render } from 'react-dom';
import MyToggle from '../../components/Toggle/MyToggle/index';

export function test() {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const toggle = () => {
    toggle.called = true;
  };

  if (!div.innerHTML.includes('on')) {
    throw new Error(`Contents are wrong: ${div.innerHTML}`);
  }

  const button = div.getElementsByTagName('button')[0];
  button.click();

  if (!toggle.called) {
    throw new Error('toggle not called!');
  }

  render(<MyToggle.WrappedComponent toggle={{ on: true, toggle }} />);
}
