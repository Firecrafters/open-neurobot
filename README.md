# Open-NeuroBot

An open-source clone of NeuroBot from the Neuro-sama discord server.

## Setup

Copy .env.example to a .env, and replace the placeholders with the correct info. N

### Getting `OMEGALUL_ID`

1. Upload an emoji to the bot in the Discord Developer Portal. [Click here for the emoji image](./images/1097297318119743638.webp).
2. Set the name of the emoji to "neurOMEGALUL"
3. Set `OMEGALUL_ID` in `.env` to the `EMOJI ID`

## Usage

Current features:

### Cookies

1. Type `/cookie` in any channel where the bot has permissions
2. The bot will respond with the total number of times you have given it a cookie

## Troubleshooting

### Bot not responding to commands

1. Make sure the bot is online (check Discord server member list)
2. Verify the bot has permission to read and send messages in the channel
3. Check that slash commands are registered (you should see them when typing `/`)
4. Look at console output for any error messages

### "Invalid token" error

- Double-check your `DISCORD_TOKEN` in the `.env` file
- Make sure there are no extra spaces or quotes around the token

### Commands not showing up

- Verify `CLIENT_ID` and `GUILD_ID` are correct in `.env`
- It may take a few minutes for slash commands to appear after first registration
- Try restarting the bot

### Bot goes offline immediately

- Check console for error messages
- Verify all environment variables are set correctly
- Make sure you've installed dependencies with `bun install`

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## Invite

<span>https:</span>//discord.com/api/oauth2/authorize?client_id=<code>ClientID</code>&permissions=377957312512&scope=bot%20applications.commands
