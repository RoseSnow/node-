// const request = require('request');
// function getNews(){
//     request.get('http://v.juhe.cn/toutiao/index?key=030199af1649b49b8da6bf2ca54d968e').then(res => {
//         var dat = console.log(res.data);
//     })
// }



var data_list = require('./www/goodslist.json');
var data_info = require('./www/goodsinfo.json');

exports.list = (req, res) => {
    // res.send(data);
    // 设置跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 清除缓存
    // res.setHeader('Cache-Control', 'no-cache');
    res.send(data_list);
}

exports.info = (req, res) => {
    res.send(data_info);
}