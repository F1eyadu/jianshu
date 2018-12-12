import React from 'react'
import { connect } from 'react-redux'
class Recommend extends React.Component {
    render() {
        const {list} = this.props
        return (
            <div className="recommendWrapper">
                {
                    list.map((item) => {
                        return (
                            <div key={item.get('id')} className="recommendItem">
                                <img src={item.get('imgSrc')} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.get('home').get('recommendList')
})
export default connect(mapStateToProps, null)(Recommend)