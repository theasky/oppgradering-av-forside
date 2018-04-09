import React, { Component } from 'react';
//import './App.css';

const boxStyle = {
  flex: '1 0 calc(25% - 8px)',
  margin: '5px',
  background: '#E9D2FF',

  backgroundColor: 'black'
};

export default class Square extends Component {
  render() {
    return (
      <a style={boxStyle} className="Square" href={this.props.url}>
        <img src={this.props.name} />
      </a>
    );
  }
}
