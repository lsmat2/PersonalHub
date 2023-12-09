const { Client, GatewayIntentBits, Events } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');

// Need to declare these intents so the server gives the bot the messages to be read
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
  ]
});

// Logs in console to see bot has been launched
client.once(Events.ClientReady, (c) => {
	console.log(`${c.user.tag} logged in!`);
});

// Displays message to the text file
// Images show up as "empty" lines, but arent == "", so we just let it through
const options = {
  dateStyle: "short",
  timeStyle: "short",
};

client.on(Events.MessageCreate, (msg) => {
  let datetime = new Date().toLocaleString("en-US", options);
  fs.appendFileSync('./discord_notifs.txt', `|**|${datetime}|*|${msg.content}`);

  // Logs in console to show a new message has been displayed
  console.log(`${datetime}: Message has been logged.`)
});

client.login(token);

// Setup express backend server
const express = require('express');
const app = express();
const port = 3000;

// Setup routes for the bot
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Setup discord get
app.get('/discord', (req, res) => {
  data = fs.readFileSync('./discord_notifs.txt').toString().split("|**|");
  data.shift();

  messages = [];
  data.forEach((entry) => {
    datetime = entry.split("|*|");
    messages.push({ "date": datetime[0], "msg": datetime[1] });
  });

  res.send(messages);
});

// Listen on port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
