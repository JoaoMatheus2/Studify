const { SlashCommandBuilder } = require("discord.js")

module.exports = {    
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos"),
    
    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/3e6Uoz3JRuXn29SMoqBjYc?si=dbb2405cc9e841e6")
    }    
}