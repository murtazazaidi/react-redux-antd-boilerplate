import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from 'AppRoot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRoot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
