<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const colorList: string[] = ["#8AC6D6", "#87C8A0", "#FDFEB8", "#8CB6DE"]; // 各キャンバスの色情報

const unit = 100;
const adjustment = 0.1;
const info = {
  times: 1,
  pos: 0,
  canvasWidth: 0,
}; // 全キャンバス共通の描画情報
let contextCache: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;

function startAnimation() {
  canvas = <HTMLCanvasElement>document.getElementById("waveCanvas");
  canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
  info.canvasWidth = document.documentElement.clientWidth;
  canvas.height = 200; //波の高さ

  contextCache = canvas.getContext("2d") ?? new CanvasRenderingContext2D();
  update(canvas);
}

const update = (canvas: HTMLCanvasElement) => {
  // 各キャンバスの描画
  canvas.width = info.canvasWidth;
  draw(canvas, colorList);
  // 共通の描画情報の更新

  if (info.times < 5) {
    info.pos = 1 / info.times;
    info.times += 0.05;
  } else {
    info.pos -= Math.PI / 1000;
  }
  // 自身の再起呼び出し
  setTimeout(update, 30, canvas);
};

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
const draw = (canvas: HTMLCanvasElement, colors: string[]) => {
  // キャンバスの描画をクリア
  contextCache.clearRect(0, 0, canvas.width, canvas.height);

  //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
  drawWave(canvas, colors[0], 0.7, 3, 5, 1);
  drawWave(canvas, colors[1], 0.7, 4, 1.3, -1);
  drawWave(canvas, colors[2], 0.7, 1.6, 0, 1);
  drawWave(canvas, colors[3], 0.7, 3, 0, -1);
};
/**
 * 波を描画
 * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
 */
const drawWave = (
  canvas: HTMLCanvasElement,
  color: string,
  alpha: number,
  zoom: number,
  delay: number,
  multi: number = 1
) => {
  contextCache.strokeStyle = color; //線の色
  contextCache.lineWidth = 100; //線の幅
  contextCache.globalAlpha = alpha;
  contextCache.beginPath(); //パスの開始
  drawSine(canvas, info.pos * multi, zoom, delay);
  contextCache.stroke(); //線
};

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(
  canvas: HTMLCanvasElement,
  t: number,
  zoom: number,
  delay: number
) {
  const xAxis = Math.floor(canvas.height / 2);
  const yAxis = 0;
  // Set the initial x and y, starting at 0,0 and translating to the origin on
  // the canvas.
  let x = t; //時間を横の位置とする
  let y = Math.sin(x) / zoom;
  contextCache.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

  // Loop to draw segments (横幅の分、波を描画)
  for (let i = yAxis; i <= canvas.width + 10; i += 10) {
    x = t + (-yAxis + i) / unit / zoom;
    y = Math.sin(x - delay) / 2;
    contextCache.lineTo(i, unit * y + xAxis);
  }
}

onMounted(() => {
  startAnimation();
  window.onresize = () => {
    info.canvasWidth = document.documentElement.clientWidth;
  };
});
</script>

<template>
  <div class="page-title">
    <canvas id="waveCanvas" class="wave"></canvas>
    <p>{{ props.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  position: relative;

  > p {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 3em;
    font-weight: bold;
    color: #444455;
  }
}
</style>

