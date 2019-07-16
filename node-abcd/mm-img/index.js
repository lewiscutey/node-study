const request = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs-extra')
const path = require('path')

let url = 'https://www.mzitu.com/xinggan/page/'

async function getUrl() {
  let linkArr = [];
  let pages = 1;
  for (let i = 1; i <= pages; i++) {
    const res = await request.get(url + i)
    const $ = cheerio.load(res.text)
    if (i === 1) {
      pages = parseInt($('nav .page-numbers').last().prev().text());
    }
    $('#pins li').each(function (i, elem) {
      const link = $(this).find('a').attr('href')
      linkArr.push(link)
    })
  }
  console.log('获取初始链接成功！')
  return linkArr
}

async function getPic(url) {
  const res = await request.get(url)
  const $ = cheerio.load(res.text)
  // 以图集名称来分目录
  const title = $('.main .main-meta span a').text()
  console.log(`开始创建${title}文件夹`)
  await fs.mkdir(path.join(__dirname, '/mm', title), function(err){
    if(err){
      console.log(err);
     }else{
      console.log(`创建${title}文件夹成功！`);
     }
  })
  const pageCount = parseInt($('.pagenavi a').last().prev().find('span').text())
  for (let i = 1; i <= pageCount; i++) {
    let pageUrl = url + '/' + i
    const data = await request.get(pageUrl)
    const _$ = cheerio.load(data.text)
    // 获取图片的真实地址
    const imgUrl = _$('.main-image p a img').attr('src')
    download(title, imgUrl) // TODO
  }
}

function download(dir, imgUrl) {
  console.log(`正在下载${imgUrl}`)
  const filename = imgUrl.split('/').pop()  
  const req = request.get(imgUrl)
    .set({ 'Referer': 'https://www.mzitu.com' }) // 根据Referer来限制访问
  req.pipe(fs.createWriteStream(path.join(__dirname, 'mm', dir, filename)))
}

async function init(){
  let urls = await getUrl()
  for (let url of urls) {
    await getPic(url)
  }
}

init()