const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { color } = require("../config");

module.exports = {
    showHelp: true,
    
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Réponds pong"),
    
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024})})
            .setDescription(`Pong !`)
            .setColor(color)
            .setTimestamp()
            .setFooter({ text: `${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ size: 1024})})

        interaction.reply({ embeds: [embed] })
    }
};