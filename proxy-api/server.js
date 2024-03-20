const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8000;

// 定義路由以接收來自Vue應用程式的請求並轉發給Yahoo Finance
app.get('/yahoo', async (req, res) => {
  const stockCode = req.query.stockCode
  const country = req.query.country
  console.log(`https://finance.yahoo.com/quote/${stockCode}.${country}`)
  try {
    const response = await axios.get(`https://finance.yahoo.com/quote/${stockCode}.${country}`, {
      headers: {
        'User-Agent': 'wei',
      },
    });
    res.json(response.data);
    // 將從Yahoo Finance收到的資料直接返回給Vue應用程式
  } catch (error) {
    // 如果發生錯誤，返回錯誤訊息
    res.status(500).json({ error: '無法獲取資料' });
  }
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器運行在 http://localhost:${PORT}`);
});
