const { REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const commands = [
    new SlashCommandBuilder()
        .setName('games')
        .setDescription('عرض قائمة الألعاب')
        .toJSON()
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

async function deployCommands() {
    try {
        console.log('🔄 Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );

        console.log('✅ Slash commands registered.');
    } catch (error) {
        console.error(error);
    }
}

deployCommands();
