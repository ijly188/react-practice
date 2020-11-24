const express = require('express');
const cors = require('cors');
const lessons = require('./lessons.json');

const server = express();
const PORT = 3001;

server.use(cors());
server.listen(PORT, () => 
  console.log(`server started at ${PORT}`),
);

server.get('/api/lessons', (req, res) => {
  const { filter = '' } = req.query;

  if(!filter) {
    res.json(lessons);
  } else {
    res.json(
      lessons.filter(({ title }) =>
        title.toLowerCase().includes(filter.toLowerCase()),
      )
    );
  };
});

// 啟用方式node server.js