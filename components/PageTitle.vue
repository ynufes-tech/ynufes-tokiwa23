<script lang="ts" setup>
onMounted(() => {
  const unit = 100;
  let canvas: HTMLCanvasElement;
  const info = {
    seconds: 0,
    t: 0,
  }; // 全キャンバス共通の描画情報
  const colorList: string[] = ["#8AC6D6", "#87C8A0", "#FDFEB8", "#8CB6DE"]; // 各キャンバスの色情報
  let contextCache: CanvasRenderingContext2D;

  function init() {
    // canvas1個めの色指定
    canvas = <HTMLCanvasElement>document.getElementById("waveCanvas");
    // 各キャンバスの初期化
      canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
      canvas.height = 200; //波の高さ
    contextCache = canvas.getContext("2d") ?? new CanvasRenderingContext2D();
    // 共通の更新処理呼び出し
    update(canvas);
  }

  const update = (canvas: HTMLCanvasElement) => {
    Math.random();
    // 各キャンバスの描画
    draw(canvas, colorList);
    // 共通の描画情報の更新
    info.seconds = info.seconds + 0.014;
    info.t = info.seconds * Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
  };

  /**
   * Draw animation function.
   *
   * This function draws one frame of the animation, waits 20ms, and then calls
   * itself again.
   */
  const draw = (canvas: HTMLCanvasElement, colors: string[]) => {
    // 対象のcanvasのコンテキストを取得
    const context = contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, colors[0], 0.7, 3, 5);
    drawWave(canvas, colors[1], 0.7, 4, 1.3);
    drawWave(canvas, colors[2], 0.7, 1.6, 0);
    drawWave(canvas, colors[3], 0.7, 3, 0);
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
    delay: number
  ) => {
    const context = contextCache;
    context.strokeStyle = color; //線の色
    context.lineWidth = 100; //線の幅
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.stroke(); //線
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
    const context = contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    let x = t; //時間を横の位置とする
    let y = Math.sin(x) / zoom;
    context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (let i = yAxis; i <= canvas.width + 10; i += 10) {
      x = t + (-yAxis + i) / unit / zoom;
      y = Math.sin(x - delay) / 2;
      context.lineTo(i, unit * y + xAxis);
    }
  }

  init();
});
</script>

<template>
  <div class="page-title">
    <canvas id="waveCanvas" class="wave"></canvas>
    <p>apple</p>
  </div>
</template>

<style scoped>
/* .wave {
  width: 100svw;
  height: 200px;
} */
</style>
