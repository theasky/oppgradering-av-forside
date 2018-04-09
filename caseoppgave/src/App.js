import React, { Component } from 'react';
import Square from './components/Square';

const appStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  height: '52px',
  backgroundColor: 'blue'
};
const divStyle = {
  display: 'block',
  paddingBottom: '100%'
};

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <Square
          name="assets/bolig.png"
          url="https://xn--ln-yia.no/boligl%C3%A5n"
        />
        <div style={divStyle} />
        <Square name="../assets/bil" url="https://xn--ln-yia.no/bill%C3%A5n" />
        <div style={divStyle} />
        <Square
          name="../assets/forbruk"
          url="https://xn--ln-yia.no/forbruksl%C3%A5n"
        />
        <div style={divStyle} />
        <Square
          name="../assets/refinans"
          url="https://xn--ln-yia.no/refinansiering"
        />
        <div style={divStyle} />
      </div>
    );
  }
}

export default App;
