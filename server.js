const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 模拟数据库
let records = [];

// API接口
app.get('/api/records', (req, res) => {
  res.json(records);
});

app.post('/api/records', (req, res) => {
  const record = { ...req.body, id: Date.now() };
  records.push(record);
  res.json(record);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
