import React from 'react'
import './index.css'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
class Home extends React.Component{
    render(){
        return(
            <div className="HomeWrapper">
                <div className="HomeLeft">
                    <img alt='' className="banner-img" src="http://upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </div>
                <div className="HomeRight">
                    <Recommend/>
                    <Writer/>
                </div>
            </div>
        )
    }
}

export default Home