const express = require('express');
const router = express.Router();
const service = require('./service.js');


// 显示商品信息
router.get('/goodslist', service.list);

// 获取商品详情
router.get('/goodsinfo/:id', service.info)

// router.get('/newsList', service.getNewsList);


module.exports = router;