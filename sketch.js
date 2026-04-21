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

  // 修正左右顛倒：使用 push/pop 進行水平翻轉
  push();
  translate(x + videoW, y); // 將原點移至影像右上角
  scale(-1, 1);             // 水平翻轉
  image(capture, 0, 0, videoW, videoH);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
