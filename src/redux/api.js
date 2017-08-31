import axios from 'axios'

var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/'

export default {
    getBannerList:function(cb){
        axios.get(url + 'billboard/home?t=' + new Date()*1 + '&callback=?').then(function(res){
            if(res.status >= 200 && res.status <300){
                cb(res.data)
            }
        }).catch((error) => {
            // new Error('desc');
            return Promise.reject(error)
        })
    },
}