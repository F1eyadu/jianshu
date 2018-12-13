import React from 'react'
import { connect } from 'react-redux'
import { getMoreList } from '../store/actionCreator'
import { Link } from 'react-router-dom'
class List extends React.PureComponent {
    render() {
        const { list, getMoreList, page } = this.props
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            /* 传参 */
                            /* <Link key={index} to={'/detail?id='+item.get('id')}> */
                            /* 动态路由 */
                            <Link key={index} to={'/detail/'+item.get('id')}>
                                <div  className="listItem">
                                    <div className="listInfo">
                                        <h3>{item.get('title')}</h3>
                                        <p>{item.get('desc')}</p>
                                    </div>
                                    <img alt='' src={item.get('imgSrc')} />
                                </div>
                            </Link>
                        )
                    })
                }
                <div className="loadMore" onClick={() => getMoreList(page)}>加载更多</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.get('home').get('articleList'),
    page: state.get('home').get('articlePage')
})
const mapDispath = (dispatch) => ({
    getMoreList(page) {
        dispatch(getMoreList(page))
    }
})
export default connect(mapStateToProps, mapDispath)(List)