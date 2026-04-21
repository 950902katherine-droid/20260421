let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 初始化攝影機擷取
  capture = createCapture(VIDEO);
  // 隱藏預設產生的 HTML 影片元件
  capture.hide();
}

function draw() {
  background('#e7c6ff');

  // 計算顯示大小（畫布寬高的 60%）
  let videoW = width * 0.6;
  let videoH = height * 0.6;
  // 計算置中座標
  let x = (width - videoW) / 2;
  let y = (height - videoH) / 2;

  image(capture, x, y, videoW, videoH);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
