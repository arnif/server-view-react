'use strict';

import React from 'react/addons';

var ServerCPU = React.createClass({
    getInitialState() {
       return {};
    },
    componentDidMount() {
      console.log('did munt', this.props);
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
          <div>
            <div>CPU temperature {this.props.cpu.temperature}</div>
            <div>CPU usage {this.props.cpu.usage}</div>
          </div>
        )
    },

});

module.exports = ServerCPU;
