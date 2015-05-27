var AppDispatcher = require('../Dispatcher/ServerDispatcher');
var EventEmitter = require('events').EventEmitter;
var ServerConstants = require('../Constants/ServerConstants');
var API = require('../Utils/ServerAPI');
var _ = require('underscore');

var serverStatusData = {};

function getStatusData(data) {
  serverStatusData = data;
}

var ServerStatusStore = _.extend({}, EventEmitter.prototype, {

    getStatusData: function() {
        return serverStatusData;
      },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

ServerStatusStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {

        case ServerConstants.GET_STATUS_DATA:
            getStatusData(action.data);
            ServerStatusStore.emitChange();
            break;

        default:
            return true;
    }
    return true;
});

module.exports = ServerStatusStore;
