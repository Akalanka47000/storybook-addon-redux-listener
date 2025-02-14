import React from 'react';
import { addons } from '@storybook/manager-api';

import ReduxListenerPanel from './components/redux-listener-panel';

addons.register('addon/redux-listener', (api) => {
  addons.addPanel('addon/redux-listener', {
    title: 'Redux Action Listener',
    render: () => (
      <ReduxListenerPanel channel={addons.getChannel()} api={api} />
    )
  });
});
