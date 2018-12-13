import Loadable from 'react-loadable';
import React from 'react'
import './index.css'
const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading(){
      return <div className="loading">正在加载...</div>
  }
})
export default ()=> <LoadableComponent/>
