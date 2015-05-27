'use strict';
var React = require('react');
var ServerStatusContainer = require('./Components/ServerStatusContainer');
var ServerAPI = require('./Utils/ServerAPI');

console.log('hello');

ServerAPI.getServerStatusData();

React.render(
  <ServerStatusContainer />, document.getElementById('App')
);
