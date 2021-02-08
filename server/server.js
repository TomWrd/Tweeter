const express = require('express');
const app = express();

var UploadImage = require('./routes/UploadImage');

app.use('/UploadImage', UploadImage);
app.use('/uploads/', express.static('uploads'));
app.use(express.static('build'));

// if not in production use the port 5000
const PORT = process.env.PORT || 8080;
app.listen(PORT);

