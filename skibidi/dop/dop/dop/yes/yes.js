const ZazaChecker = (ctx) => {
    const msg = ctx.message.text.toLowerCase()
    const user = ctx.from.first_name
    if (msg.includes('zaza')) {
        if (user[user.length - 1] === 'a' || user[user.length - 1] === 'а') {
            ctx.reply(user + ' дала зазу')
        } else {
            ctx.reply(user + ' дал зазу')
        }
    }
}

module.exports = ZazaChecker