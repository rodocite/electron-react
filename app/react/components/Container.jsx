import React, { Component } from 'react';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: []
    }

    this.processData = this.processData.bind(this);
  }

  componentDidMount() {
    this.readFile(this.processData);
  }

  nodeRequire(name) {
    return window.require(name);
  }

  processData(data) {
    var newName = this.state.names.concat(data);

    this.setState({
      names: newName
    });
  }

  readFile(dataHandler) {
    var fs = this.nodeRequire('fs');
    fs.readFile('public/filesystem/names.txt', 'utf-8', function(err, data) {
      var names = data.trim().split('\n');

      names.forEach(name => {
        dataHandler(name);
      });
    });
  }

  render() {
    var names = this.state.names.map(name => {
      return (
        <li key={name}>{name}</li>
      );
    });

    if(this.state.names.length) {
      return (
        <div>
          <h1>Yay, reading from a file</h1>
          <ul>{names}</ul>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
};
