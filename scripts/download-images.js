const axios = require('axios');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    path: 'public/images/hero/hero-business.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    path: 'public/images/business/retail-online.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    path: 'public/images/business/wholesale-warehouse.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    path: 'public/images/business/consulting-meeting.jpg'
  }
];

async function downloadImage(url, imagePath) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    // プロジェクトルートからの絶対パスを取得
    const projectRoot = path.resolve(__dirname, '..');
    const fullPath = path.join(projectRoot, imagePath);
    
    // ディレクトリが存在しない場合は作成
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const writer = fs.createWriteStream(fullPath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading image (${url}):`, error.message);
  }
}

async function downloadAllImages() {
  try {
    for (const image of images) {
      console.log(`Downloading: ${image.url} to ${image.path}`);
      await downloadImage(image.url, image.path);
    }
    console.log('All images downloaded successfully.');
  } catch (error) {
    console.error('Error downloading images:', error.message);
  }
}

downloadAllImages(); 