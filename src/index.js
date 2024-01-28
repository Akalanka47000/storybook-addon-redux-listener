import listen from 'redux-listener-middleware';
import { addons } from '@storybook/manager-api';

export default () => {
  const reduxListener = listen();
  const channel = addons.getChannel();

  const storybookListener = (action) => {
    channel.emit('addon/redux-listener/actionTriggered', action);
  };

  reduxListener
    .createListener(storybookListener)
    .addRule(/.*/)
  ;

  return reduxListener;
};
