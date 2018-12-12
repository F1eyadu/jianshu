import React from 'react'
import { connect } from 'react-redux'
class List extends React.Component {
    render() {
        const { list } = this.props
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <div key={item.get('id')} className="listItem">
                                <div className="listInfo">
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                </div>
                                <img alt='' src={item.get('imgSrc')} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('articleList')
})
export default connect(mapStateToProps, null)(List)