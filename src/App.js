import React, { Component } from 'react'
import { Globalstyle } from './style'
import store from './store/index'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './common/Header'
import Home from './pages/home/index'
import Detail from './pages/detail/loadable'
import Login from './pages/login/index'
import Write from './pages/write/index'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
            {/* 传参 */}
            {/* <Route path="/detail/" exact component={Detail}></Route> */}
            {/* 动态路由 */}
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
