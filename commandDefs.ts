import { SlashCommandBuilder } from "discord.js";

const commands = [
    new SlashCommandBuilder()
        .setName("cookie")
        .setDescription("Gives the bot a cookie.")
        .toJSON(),

    // TODO: Add functionality for these commands
    // new SlashCommandBuilder()
    //     .setName("bwaa")
    //     .setDescription("Bwaa")
    //     .toJSON(),

    // new SlashCommandBuilder()
    //     .setName("felloff")
    //     .setDescription("RIPBOZO")
    //     .toJSON(),

    new SlashCommandBuilder()
        .setName("nothing")
        .setDescription("nothing ever happens")
        .toJSON()
];

export default commands;
