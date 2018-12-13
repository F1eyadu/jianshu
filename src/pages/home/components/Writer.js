import React from 'react'
import { connect } from 'react-redux'
class Writer extends React.PureComponent {
    render() {
        const { list } = this.props
        return (
            <div className="writerWrapper">
                <div className="writeHeader">
                    <div>推荐作者</div>
                    <div><i style={{ marginRight: 5 }} className="iconfont">&#xe851;</i>换一批</div>
                </div>
                <div>
                    {
                        list.map((item) => {
                            return (
                                <div className="writerItem" key={item.get('id')}>
                                    <img alt="" src={item.get('avatar')} />
                                    <div className="writerInfo">
                                        <div className="writerName">
                                            <div>{item.get('title')}</div>
                                            <div>+关注</div>
                                        </div>
                                        <div className="writeNum">
                                            写了{item.get('writed')}字 - {item.get('liked')}喜欢
                            </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.get('home').get('writerList')
    }
}
export default connect(mapState, null)(Writer)