import React from 'react'
import { connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './index.css'
import { loginAction} from './store/actionCreator'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.account = React.createRef()
        this.pwd = React.createRef()
    }
    render(){
        const {loginStatue} = this.props
        if(!loginStatue){
            return(
                <div className="loginWrapper">
                    <div className="loginBox">
                        <input ref={this.account} type="text" placeholder="请输入账号"></input>
                        <input ref={this.pwd} type="password" type="text" placeholder="请输入密码"></input>
                        <button onClick={()=> this.props.login(this.account, this.pwd)}>登录</button>
                    </div>
                </div>
            )
        }else{
            return <Redirect to="/"></Redirect>
        }
    }
}

const mapState = (state) => ({
    loginStatue: state.get('login').get('login')
})
const mapDispatch = (dispatch) =>({
    login(account, pwd){
       account = account.current.value
       pwd = pwd.current.value
       dispatch(loginAction(account,pwd))
    }
})
export default connect(mapState,mapDispatch)(Login)