var AppDispatcher = require('../Dispatcher/ServerDispatcher');
var ServerConstants = require('../Constants/ServerConstants');

// Define actions object
var ServerStatusActions = {

    getServerStatusData: function(data) {
        AppDispatcher.handleAction({
            actionType: ServerConstants.GET_STATUS_DATA,
            data: data
        })
    },
};

module.exports = ServerStatusActions;
