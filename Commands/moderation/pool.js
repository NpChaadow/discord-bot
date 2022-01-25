
module.exports = {
    name:'pool',
    execute(message, args ,client) {
        message.channel.send("📊SONDAGE📊 \ntu préfère ? \n1️⃣: One Piece \n2️⃣: Dragon Ball ")
    		.then(function (message) {
          message.react("1️⃣")
          message.react("2️⃣")
    			});
          message.channel.bulkDelete(1)
    }
}