import React from 'react'
import { connect } from 'react-redux'
class Topic extends React.Component {
    render() {
        const { list } = this.props
        return (
            <div className="TopicWrapper">
                {
                    list.map((item) => {
                        return (
                            <div key={item.get('id')} className="TopicItem">
                                <img alt='' src={item.get('imgSrc')} />
                                {item.get('title')}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('TopicList')
})
export default connect(mapStateToProps, null)(Topic)