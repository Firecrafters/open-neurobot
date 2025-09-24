import { SlashCommandBuilder } from "discord.js";

const commands = [
    new SlashCommandBuilder()
        .setName("cookie")
        .setDescription("Gives the bot a cookie.")
        .toJSON()
];

export default commands;