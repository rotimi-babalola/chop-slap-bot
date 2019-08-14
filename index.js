const Express = require('express');
const dotenv = require('dotenv');
const Slack = require('slack');

dotenv.config();

const app = new Express();
const PORT = 5000;
const token = process.env.SLACK_TOKEN;

const bot = new Slack({ token });

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.post('/chop-slap', (req, res) => {
  console.log(req.body);
  const { text } = req.body;
  // return 'Hello'
  // bot.chat.postMessage({ token, channel, text, as_user: true });
  bot.chat.postMessage({ token, channel: text, text: ':chop-slap:' });
  return res.send('Slap sent!!!');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
