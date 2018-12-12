import React, { Component } from 'react'
import { Globalstyle } from './style'
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './common/Header'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Globalstyle />
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
