const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { color } = require("../config");

module.exports = {
    showHelp: true,
    
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Affiche la liste des commandes"),
    
    run: async (client, interaction) => {
        const commands = client.commands.filter(c => c.showHelp !== false)

        const embed = new EmbedBuilder()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024})})
            .setDescription(`Liste des commandes disponibles sur ce serveur`)          
            .addFields({ name: `Disponibles - ${commands.size}`, value: `\`\/${commands.map(c => c.data.name).join("`, `/")}\``})
            .setColor(color)
            .setTimestamp()
            .setFooter({ text: `${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ size: 1024})})
            
        interaction.reply({ embeds: [embed] })
    }
};