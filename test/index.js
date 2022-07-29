const express = require('express');
const app = express();
const port = 3500;
const { logger, logEvents } = require('expressql-log');

app.use(logger);
app.get('/', (req, res) => {
  res.send('Hello World! Was this logged?');
})

app.listen(port, () => {
    const cyan = '\x1b[36m%s\x1b[0m';
  console.log(cyan, `Test app listening on port ${port}`);
});