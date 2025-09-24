import { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } from "discord.js";
import commands from "./commandDefs.js";
import dotenv from "dotenv";
import * as data from "./data.js";
import * as config from "./config.js";
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready
client.once("clientReady", async () => {
    console.log(`Ready! Logged in as ${client.user?.tag}`);

    const rest = new REST({ version: "10" }).setToken(
        process.env.DISCORD_TOKEN as string
    );

    try {
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID as string,
                process.env.GUILD_ID as string
            ),
            { body: commands }
        );
    } catch (error) {
        console.error(error);
    }
});

// Handle slash command interactions
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === "cookie") {
        if (config.LOG_SENT_COMMANDS)
            console.log(`/cookie sent by ${interaction.user.displayName} (${interaction.user.id})`);

        const fileData: string = await data.getData(`cookies/${interaction.user.id}`);
        if (config.LOG_COOKIES)
            console.log(`Original Cookies: ${fileData}`);
        
        let currentCount = 0;
        
        // Parse current count, default to 0 if file not found or invalid
        if (fileData !== "NotFound") {
            const parsed = parseInt(fileData);
            currentCount = isNaN(parsed) ? 0 : parsed;
        }
        
        // Increment count
        const newCount = currentCount + 1;

        if (config.LOG_COOKIES)
            console.log(`New Cookies: ${newCount}`);
        
        // Save new count
        await data.setData(`cookies/${interaction.user.id}`, newCount.toString());
        
        await interaction.reply(`:cookie: <:neurOMEGALUL:${process.env.OMEGALUL_ID}> Om nom nom\nYou've given me **${newCount}** cookies!`);
    }
});

// Login to Discord with client token
client.login(process.env.DISCORD_TOKEN);
