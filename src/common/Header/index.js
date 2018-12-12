import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import { getSearchFoucs, getSearchBlur, getList, mouseEnter, mouseLeave, changePage } from './store/actionCreator'
// import { CSSTransition } from 'react-transition-group'
class Header extends React.Component {
    getListArea = (show) => {
        const { page, list,mouseIn,totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        if (show || mouseIn) {
            return (
                <div className="searchInfo" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <div className="searchInfo-title">热门搜索
                        <span className="searchInfo-switch" onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
                            换一批
                            <i ref={(icon)=>{ this.spinIcon = icon}} className="iconfont zoom">&#xe851;</i>
                        </span>
                    </div>
                    <div>
                        {
                            list.map((item, index) => {
                                if (index >= page * 10 && index < (page + 1) * 10)
                                    return <a href="###" key={index} className="searchInfoItem">{item}</a>
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
    render() {
        const { handleBlur, handleFocus, focused, list } = this.props
        return (
            <div className="header">
                <a href="/" className="logo"></a>
                <div className="nav">
                    <div className="left">
                        <div className="nav-item active">首页</div>
                        <div className="nav-item">下载App</div>
                        <div className="navSearch">
                            {/* <CSSTransition
                                timeout={300}
                                in={this.state.focused}
                                classNames="slide"
                            > */}
                            <div>
                                <input onBlur={handleBlur} onFocus={()=>handleFocus(list)} className={focused ? 'focused' : ''} placeholder="搜索" />
                                <i className={focused? 'iconfont searchIcon focus' : 'iconfont searchIcon'}>&#xe623;</i>
                            </div>
                            {/* </CSSTransition> */}
                            {this.getListArea(focused)}
                        </div>
                    </div>
                    <div className="right">
                        <div style={{ fontSize: 20 }} className="nav-item iconfont">&#xe636;</div>
                        <div className="nav-item">登录</div>
                    </div>
                </div>
                <div className="addition">
                    <button>注册</button>
                    <button><i style={{ marginRight: 5 }} className="iconfont">&#xe670;</i>写文章</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        mouseIn: state.get('header').get('mouseIn'),
        totalPage: state.get('header').get('totalPage')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleBlur() {
            dispatch(getSearchBlur())
        },
        handleFocus(list) {
            if(list.size === 0){
                dispatch(getList())
            }
            dispatch(getSearchFoucs())
            
        },
        handleMouseEnter(){
            dispatch(mouseEnter())
        },
        handleMouseLeave(){
            dispatch(mouseLeave())
        },
        handleChangePage(page, totalPage, spin){
            spin.style.transform = `rotate(${360 *(page+1)}deg)`
            if(page < totalPage){
                dispatch(changePage(page+1))
            }else{
                dispatch(changePage(0))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)