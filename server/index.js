const express = require('express');
const cors = require('cors');
const logger = require('./logger');

const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());

app.post('/log', (req, res) => {
  const { message, stack, route } = req.body;

  logger.error({
    message,
    stack,
    route,
    source: 'frontend',
  });

  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Error logging server running on http://localhost:${PORT}`);
});
