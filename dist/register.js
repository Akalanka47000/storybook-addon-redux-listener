'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _managerApi = require('@storybook/manager-api');

var _reduxListenerPanel = require('./components/redux-listener-panel');

var _reduxListenerPanel2 = _interopRequireDefault(_reduxListenerPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_managerApi.addons.register('addon/redux-listener', function (api) {
  _managerApi.addons.addPanel('addon/redux-listener', {
    title: 'Redux Action Listener',
    render: function render() {
      return _react2.default.createElement(_reduxListenerPanel2.default, { channel: _managerApi.addons.getChannel(), api: api });
    }
  });
});