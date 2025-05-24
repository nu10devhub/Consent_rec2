const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 4000;

app.use(cors()); // allow frontend access

const storage = multer.memoryStorage();
const upload = multer({ storage });

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

app.post('/upload', upload.single('video'), async (req, res) => {
  const file = req.file;

  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `recordings/${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const result = await s3.upload(uploadParams).promise();
    res.status(200).json({ url: result.Location });
  } catch (err) {
    console.error(err);
    res.status(500).send('Upload failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
