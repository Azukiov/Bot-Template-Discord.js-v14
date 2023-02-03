const { ActivityType } = require("discord.js");

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {

    client.user.setActivity('Update .gg/maskfr', { type: ActivityType.Watching });1e4
}};
