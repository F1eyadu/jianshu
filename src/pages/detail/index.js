import React from 'react'
import './index.css'
import { connect} from 'react-redux'
import { withRouter} from 'react-router-dom'
import {getDetailInfo} from './store/actionCreator'
class Detail extends React.Component{
    componentDidMount(){
        let id = this.props.match.params.id
        this.props.getDetail(id)
    }
    render(){
        const {title, content} = this.props
        return(
            <div className="DetailWrapper">
                <div className="Header">{title}</div>
                <div className="content" dangerouslySetInnerHTML={{__html:content}}></div>
            </div>
        )
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) =>({
    getDetail(id){
        dispatch(getDetailInfo(id))
    }
})
export default connect(mapState,mapDispatch)(withRouter(Detail))