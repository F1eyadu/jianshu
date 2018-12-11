import React from 'react'
import './index.css'
// import { CSSTransition } from 'react-transition-group'
class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleFocus() {
        this.setState({
            focused: true
        })
    }
    handleBlur() {
        this.setState({
            focused: false
        })
    }
    render() {
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
                                    <input onBlur={this.handleBlur} onFocus={this.handleFocus} className={this.state.focused ? 'focused' : ''} placeholder="搜索" />
                                    <i className={this.state.focused ? 'iconfont focus' : 'iconfont'}>&#xe623;</i>
                                </div>
                            {/* </CSSTransition> */}
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

export default Header