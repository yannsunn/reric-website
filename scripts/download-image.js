const axios = require('axios');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80',
    path: '../public/images/wholesale-warehouse.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    path: '../public/images/retail-online.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
    path: '../public/images/hero-business.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    path: '../public/images/consulting-meeting.jpg'
  }
];

async function downloadImage(url, imagePath) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(imagePath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`画像のダウンロードに失敗しました (${url}):`, error);
  }
}

async function downloadAllImages() {
  try {
    // 必要なディレクトリの作成
    const directories = [
      '../public/images',
      '../public/images/common'
    ];

    directories.forEach(dir => {
      const fullPath = path.resolve(__dirname, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });

    // すべての画像をダウンロード
    for (const image of images) {
      const fullPath = path.resolve(__dirname, image.path);
      console.log(`Downloading: ${image.url} to ${fullPath}`);
      await downloadImage(image.url, fullPath);
    }

    console.log('すべての画像のダウンロードが完了しました。');
  } catch (error) {
    console.error('画像のダウンロード中にエラーが発生しました:', error);
  }
}

downloadAllImages(); 