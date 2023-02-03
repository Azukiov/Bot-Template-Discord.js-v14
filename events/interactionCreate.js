const { InteractionType } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    name: 'interactionCreate',

    execute: async(interaction) => {
        let client = interaction.client;
        
        if (interaction.type == InteractionType.ApplicationCommand) {
            if(interaction.user.bot) return;

            readdirSync('./slashCommands').forEach(file => {
            const command = require(`../../slashCommands/${file}`);
        
                if(interaction.commandName.toLowerCase() === command.data.name.toLowerCase()) {
                    command.run(client, interaction)
                }
            })
        }
    }
}
