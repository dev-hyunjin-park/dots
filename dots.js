const circleSize = 10;
const speedMultiplier = 20;

function setup() {
  createCanvas(windowWidth, windowHeight / 3);
  //   noLoop(); // draw 함수를 한 번만 실행한다
  noStroke();
}

function draw() {
  background("#0C134F");
  fill("#5C469C");

  let i = circleSize * -1;
  let j = circleSize * -1;

  while (i < width) {
    let lerpWidth = map(i, 0, width, 0, 2 * PI);
    // map(value, start1, stop1, start2, stop2)
    // value는 변환할 값, start1과 stop1은 원래 값의 범위, start2와 stop2는 변환될 값의 범위입니다.
    let distWidth =
      (0.5 * cos(lerpWidth + frameCount / speedMultiplier) + 0.5) * circleSize;
    // 0~1 사이의 숫자로 보간 -> * circleSize
    i += circleSize + distWidth;

    while (j < height) {
      let lerpHeight = map(j, 0, height, 0, 2 * PI);
      let distHeight = (0.5 * cos(lerpHeight) + 0.5) * circleSize; // 0~1 사이의 숫자로 보간 -> * circleSize

      j += circleSize + distHeight;
      ellipse(i, j, circleSize);
    }
    j = circleSize * -1;
  }
}
