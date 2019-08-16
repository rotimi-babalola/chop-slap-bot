const express = require('express');
const dotenv = require('dotenv');
const Slack = require('slack');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const token = process.env.SLACK_TOKEN;
const botToken = process.env.BOT_TOKEN;

const bot = new Slack({ token });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/chop-slap', (req, res) => {
  const { text } = req.body;
  bot.chat.postMessage({
    token: botToken,
    channel: text,
    text: ':chop-slap:',
    as_user: true,
  });
  return res.send('Your anonymous slap was sent!!! 😊');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
