import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class Write extends React.Component {
    render() {
        const { loginStatue } = this.props
        if (loginStatue) {
            return (
                <div>写文章</div>
            )
        } else {
            return <Redirect to="/login"></Redirect>
        }
    }
}

const mapState = (state) => ({
    loginStatue: state.get('login').get('login')
})
export default connect(mapState, null)(Write)