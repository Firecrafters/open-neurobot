# Open-NeuroBot

An open-source clone of NeuroBot from the Neuro-sama discord server. This is still in early development, and there are many features that it will lack, since, due to not being a mod on the server, I don't know about, or have access to, a large portion of what NeuroBot can do. So likely the only things being added will be things that regular users can do with the original.

## Setup

Copy `.env.example` to a `.env`, and replace the placeholders with the correct info.

## Usage

### Commands

| Command    | Description                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| `/cookie`  | The bot will be given a cookie and tell you how many cookies you have given it. |
| `/felloff` | The bot will respond with a RIPBOZO emote.                                      |
| `/nothing` | The bot will respond with "Nothing ever happens, all-in"                        |
| `/bwaa`    | The bot will respond with a neuroBwaa emote                                     |

## Troubleshooting

### Bot not responding to commands

1. Make sure the bot is online (check Discord server member list)
2. Verify the bot has permission to read and send messages in the channel
3. Check that slash commands are registered (you should see them when typing `/`)
4. Look at console output for any error messages

### "Invalid token" error

- Double-check your `DISCORD_TOKEN` in the `.env` file
- Make sure there are no extra spaces around the token

### Commands not showing up

- Verify `CLIENT_ID` and `GUILD_ID` are correct in `.env`
- It may take a few minutes for slash commands to appear after first registration
- Try restarting the bot

### Other

- Check console for error messages
- Verify all environment variables are set correctly
- Make sure you've installed dependencies with `bun install`

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## Inviting the bot

https://<span>discord</span>.com/api/oauth2/authorize?client_id=<code>ClientID</code>&permissions=377957312512&scope=bot%20applications.commands
