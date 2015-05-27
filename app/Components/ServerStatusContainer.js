//API CALL send stuff as prop to each component
'use strict';

import React from 'react/addons';
var ServerStatusStore = require('../Stores/ServerStatusStore');
var ServerCPU = require('./ServerCPU');
var ServerHDDList = require('./ServerHDDList');
var ServerAPI = require('../Utils/ServerAPI');

function _getStateFromStore() {

  var f = ServerStatusStore.getStatusData();
  console.log('react f', f);
    return {
        status: f,
    }
}


var ServerStatusContainer = React.createClass({
  getInitialState() {
    return _getStateFromStore();
   },
   componentDidMount() {
     ServerStatusStore.addChangeListener(this._onChange);
   },

   componentWillUnmount() {
     ServerStatusStore.removeChangeListener(this._onChange);
   },

   getStatusFromAPI() {
     ServerAPI.getServerStatusData();
   },

   renderUpdateButton() {
     return (
       <button onClick={this.getStatusFromAPI}>refresh</button>
     )
   },

  render() {


    console.log('state',this.state);
    if (this.state.status.cpu) {
      return (
        <div>
        {this.renderUpdateButton()}
          <ServerCPU cpu={this.state.status.cpu}/>
          <ServerHDDList hdd={this.state.status.harddrives}/>
        </div>
      )
    }
    return (
      <div>Empty
    {this.renderUpdateButton()}
      </div>

    )


  },

  _onChange() {
    console.log('event fired');
        this.setState(_getStateFromStore());
    }
});

module.exports = ServerStatusContainer;
