const {PREFIX} = require('../../config');
module.exports = {
    name:'prefix',
    execute(message, args ,client) {
        message.channel.send(`prefix: ${PREFIX}`)
           
    }
}