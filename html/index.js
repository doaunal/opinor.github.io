const express = require('express');
const app = express();

// Ana sayfa rotası
app.get('/', (req, res) => {
    res.send('Merhaba, Express!');
});

// Sunucuyu başlat
app.listen(3000, () => {
    console.log('Sunucu çalışıyor: http://localhost:3000');
});