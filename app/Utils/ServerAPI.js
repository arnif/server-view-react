var FluxServerActions = require('../Actions/ServerStatusActions');

var API = process.env['HOME_SERVER_API']; //TODO
console.log(process);

if (!API) {
  console.log('please set HOME_SERVER_API');
}


module.exports = {

    getServerStatusData() {
      fetch(API)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        //console.log('parsed json', json)
        FluxServerActions.getServerStatusData(json);
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
    },

};
