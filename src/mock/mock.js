import Mock from 'mockjs'

const Random = Mock.Random

var listData = function(num) {
    let data = []
    for (let i = 0; i < num; i++) {
        let newList = { // 详细 规则 参照mockjs官网
            name: Random.cword(1, 6), // 书名
            Author: Random.cname(), // 作者 Random.cname() 随机生成中文名
            imgPath: Random.dataImage('132x176', '这是图片中的文本'), // 书籍图片 Random.dataImage( size, text ) 生成图片（base64位数据格式）
            category: Random.pick(['玄幻', '仙侠', '武侠', '都市', '恐怖']), // 分类 Random.pick()单选分类
            word_number: Random.float(10, 1000, 2, 2), //字数
            status: Random.pick(['连载', '完本']),
            description: Random.cparagraph(),
            star: Random.integer(3, 5),
            hot: Random.integer(100,1000),
            url: Random.url(),
            newCharpter: Random.cword(6, 10), // 最新章节
            uptime: Random.date() + ' ' + Random.time() //书籍更新时间 Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        data.push(newList)
    }
    return {data}
}
// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
Mock.mock('http://route.getRecommend.com/', 'get', listData(10));
Mock.mock('http://route.getHot.com/', 'get', listData(10))
Mock.mock('http://route.getNew.com/', 'get', listData(5))
Mock.mock('http://route.getRank.com/', 'get', listData(5))