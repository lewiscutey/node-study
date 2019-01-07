const {
  Wechaty,
  MediaMessage,
  Room
} = require('wechaty')

const QrcodeTerminal = require('qrcode-terminal')
const path = require('path')
const QRODE_IMAGE_FILE = path.join(__dirname, 'qrcode.jpg')

Wechaty.instance() // Singleton
  .on('scan', (url, code) => {
    let loginUrl = url.replace('qrcode', 'l')
    QrcodeTerminal.generate(loginUrl)
    console.log(url)
  })
  .on('login', user => console.log(`User ${user} logined`))
  .on('friend', async (contact, request) => {
    if (request) {
      if (/JavaScript|Js/i.test(request.hello)) {
        logMsg = 'accepted because verify messsage is "JS"'
        request.accept()
      } else {
        logMsg = 'not auto accepted, because verify message is: ' + request.hello
      }
    } else {
      logMsg = 'friend ship confirmed with ' + contact.get('name')
    }
  })
  .on('message', async (message) => {
    const contact = message.from()
    const content = message.content()
    const room = message.room()
    if (room) {
      console.log(`Room: ${room.topic()} Contact: ${contact.name()} Content: ${content}`)
    } else {
      console.log(`Contact: ${contact.name()} Content: ${content}`)
    }

    if (message.self()) {
      return
    }

    if (content === '指令') {
      await message.say(
        `欢迎欢迎。。。
        你可以回复以下指令：
        回复【指令】查看指令
        回复【lewis】自动回复
        回复【加群】自动加群
        来都来了，快去关注下公众号
        [天道酬勤Lewis]`)
      await message.say(new MediaMessage(QRODE_IMAGE_FILE))
    }


    if (/lewis/i.test(content)) {
      await message.say('关注公众号[天道酬勤Lewis]没？')
      await message.say(new MediaMessage(QRODE_IMAGE_FILE))
    }

    if (/猪/i.test(content)) {
      await message.say('你是头大笨猪！哈哈哈😄')
    }

    if (/哼/i.test(content)) {
      await message.say('你是头大笨猪！哼哼哈嘿😄')
    }

    if (/加群/.test(content)) {
      const wechaty = new Wechaty()
      let keyroom = await wechaty.Room.create({
        topic: '新哥测试群'
      })
      if (keyroom) {
        await keyroom.add(contact)
        await keyroom.say('欢迎新朋友！', contact)
      }
    }
  })
  .start()
