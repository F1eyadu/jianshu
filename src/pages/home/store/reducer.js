import { fromJS } from 'immutable'
const defaultState = fromJS({
    TopicList: [{
        id: 1,
        title: '社会热点',
        imgSrc: 'http://upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }, {
        id: 2,
        title: '社会冷点',
        imgSrc: 'http://upload-images.jianshu.io/upload_images/1778939-c8af28ea3b9e573d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articleList: [{
        id: 1,
        title: '我终于买了简书会员',
        desc: '纠结了几天，今天终于果断买了简书会员。心里就像撒开的网，落了海。 不是买了会员，一定就能赚很多的钻回来，而是觉得，买了会员，心里踏实了。',
        imgSrc: 'http://upload-images.jianshu.io/upload_images/1778939-c8af28ea3b9e573d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 2,
        title: '我终于买了简书会员',
        desc: '纠结了几天，今天终于果断买了简书会员。心里就像撒开的网，落了海。 不是买了会员，一定就能赚很多的钻回来，而是觉得，买了会员，心里踏实了。',
        imgSrc: 'http://upload-images.jianshu.io/upload_images/1778939-c8af28ea3b9e573d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 3,
        title: '我终于买了简书会员',
        desc: '纠结了几天，今天终于果断买了简书会员。心里就像撒开的网，落了海。 不是买了会员，一定就能赚很多的钻回来，而是觉得，买了会员，心里踏实了。',
        imgSrc: 'http://upload-images.jianshu.io/upload_images/1778939-c8af28ea3b9e573d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 4,
        title: '我终于买了简书会员',
        desc: '纠结了几天，今天终于果断买了简书会员。心里就像撒开的网，落了海。 不是买了会员，一定就能赚很多的钻回来，而是觉得，买了会员，心里踏实了。',
        imgSrc: 'http://upload-images.jianshu.io/upload_images/1778939-c8af28ea3b9e573d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList: [{
        id: 1,
        imgSrc: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
        id: 2,
        imgSrc: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
        id: 3,
        imgSrc: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
        id: 4,
        imgSrc: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
        id: 5,
        imgSrc: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }],
    writerList:[
        {id:1, title: '小明', avatar: 'http://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp', writed: '187.3k', liked: '1.7k'},
        {id:2, title: '小明1', avatar: 'http://upload.jianshu.io/users/upload_avatars/6539412/824c3d2f-b0d2-43a6-885a-d2acd37fd364.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp', writed: '87.0k', liked: '2.7k'},
        {id:3, title: '小明2', avatar: 'http://upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp', writed: '200.3k', liked: '3.0k'},
        {id:4, title: '小明3', avatar: 'http:////upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp', writed: '55k', liked: '0.5k'},
        {id:5, title: '小明4', avatar: 'http://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp', writed: '22.3k', liked: '2.2k'}
    ]
})
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}