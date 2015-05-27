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
        return(
          <li>
          name: {this.props.hdd.hdd}
          free: {this.props.hdd.free}
          used: {this.props.hdd.used}
          total: {this.props.hdd.total}
          </li>
        )
    },

});

module.exports = ServerHDDList;
