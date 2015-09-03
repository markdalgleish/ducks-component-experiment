import React from 'react';
import { Provider } from 'react-redux';

import Demo from './Demo';
import createStore from './flux/createStore';
import template from './template.ejs';

// Client render
if (typeof document !== 'undefined') {
  const store = createStore(window.__redux_data__);

  React.render((
    <Provider store={store}>
      {() => <Demo />}
    </Provider>
  ), document.getElementById('outlet'));
}

// Render function for static-site-generator-webpack-plugin
export default function(locals, callback) {
  const store = createStore();

  callback(null, template({
    html: React.renderToString(
      <Provider store={store}>
        {() => <Demo />}
      </Provider>
    ),
    data: store.getState(),
    assets: locals.assets
  }));
};
