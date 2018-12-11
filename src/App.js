import React, { Component } from 'react'
import { Globalstyle } from './style'
import Header from './common/Header'
class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <Header/>
      </div>
    );
  }
}

export default App;
