const { Telegraf } = require('telegraf')
const ZazaChecker = require('./dop/dop/dop/yes/yes.js')

require('dotenv').config()

const TOKEN = process.env.TOKEN
const Bot = new Telegraf(TOKEN)

Bot.use(ZazaChecker);
Bot.launch()


console.log('Bot has been started')