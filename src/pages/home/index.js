import React from 'react'
import './index.css'
import {getHomeData, toggleTopShow} from './store/actionCreator'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
class Home extends React.PureComponent {
    componentDidMount() {
        this.props.getHomeData()
        this.bindEvents()
    }
    handleScrollTop(){
        window.scrollTo(0 ,0)
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollToShow)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollToShow)
    }
    render() {
        return (
            <div className="HomeWrapper">
                <div className="HomeLeft">
                    <img alt='' className="banner-img" src="http://upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </div>
                <div className="HomeRight">
                    <Recommend />
                    <Writer />
                </div>
                {
                    this.props.showScroll? <div className="backTop" onClick={this.handleScrollTop}>顶部</div> : null
                }
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        getHomeData() {
           dispatch(getHomeData())
        },
        changeScrollToShow(){
            if(document.documentElement.scrollTop > 400){
                dispatch(toggleTopShow(true))
            }else{
                dispatch(toggleTopShow(false))
            }
        }
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
export default connect(mapState, mapDispatch)(Home)