<script lang="ts" setup>
const waveCanvas = ref(null)
onMounted(
    () =>{
        console.log(waveCanvas)
    }
)

var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報
function init() {
    info.seconds = 0;
    info.t = 0;
    colorList = [];
    // canvas1個めの色指定
    colorList.push(['#8AC6D6', '#87C8A0', '#FDFEB8', '#8CB6DE']);//重ねる波線の色設定
    // 各キャンバスの初期化
        const canvas = waveCanvas.value
        canvas.contextCache = canvas.getContext("2d");
    // 共通の更新処理呼び出し
    update();
}

function update() {
    for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 *
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
    // 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 0.7, 3, 5);
    drawWave(canvas, color[1], 0.7, 4, 1.3);
    drawWave(canvas, color[2], 0.7, 1.6, 0);
    drawWave(canvas, color[3], 0.7, 3, 0);
}

/**
 * 波を描画
 * drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.strokeStyle = color;//線の色
    context.lineWidth = 100;//線の幅
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.stroke(); //線
}

/**
 * Function to draw sine
 *
 * The sine curve is drawn in 10px segments starting at the origin.
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/2;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();
</script>

<template>
  <div class="page-title">
      <canvas ref="waveCanvas" class="wave"></canvas>
      <p>apple</p>
  </div>
</template>

<style scoped>
.wave{
    width: 100svw;
    height: 200px;
}
</style>
