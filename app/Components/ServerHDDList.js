'use strict';

import React from 'react/addons';
var ServerHDDItem = require('./ServerHDDItem');

var ServerHDDList = React.createClass({
    getInitialState() {
       return {};
    },
    componentDidMount() {

    },

    componentWillUnmount() {

    },
    shouldComponentUpdate(next, prev) {
      console.log('should next', next);
      console.log('should prev', prev);
      return true;
    },
    render() {
      var hddList = this.props.hdd.map((hddItem, index) =>
            <ServerHDDItem key={index} index={index} hdd={hddItem} />
        );
        return(
          <div>
            <ul>
              {hddList}
            </ul>

          </div>
        )
    },

});

module.exports = ServerHDDList;
