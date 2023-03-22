<script lang="ts">
export default {
  name: 'MessCodeDropBg'
}
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { hexToRGBA, colorNameToRGBA } from '../../../utils'


const canvasRef = ref<HTMLCanvasElement | null>(null)

interface CodeProps {
  dropChars: string,
  bgColor?: string,
  fontSize?: number
  fontColor?: string
}

const {
  dropChars = '李明正 JavaScript HTML CSS Vue React',
  fontColor = 'green',
  fontSize = 12,
  bgColor = '#000000'
} = defineProps<CodeProps>()

let _bgColor = bgColor.startsWith("#") ? hexToRGBA(bgColor, 0.05) : colorNameToRGBA(bgColor, 0.05)
let timer: NodeJS.Timer | undefined

onMounted(() => {
  const canvas = canvasRef.value
  const context = canvas!.getContext("2d");
  const W = (canvas?.parentNode as HTMLDivElement)?.offsetWidth || window.innerWidth
  const H = (canvas?.parentNode as HTMLDivElement)?.offsetHeight || window.innerHeight
  canvas!.width = W
  canvas!.height = H
  // 列
  const colunms = Math.floor(W / fontSize);
  // 记录每列文字的y轴坐标，起始为0
  const drops: number[] = Array(colunms).fill(0);
  const len = dropChars.length

  context!.font = "700 " + fontSize + "px";
  function draw() {
    context!.fillStyle = _bgColor;
    context!.fillRect(0, 0, W, H);
    context!.fillStyle = fontColor;
    for (let i = 0; i < colunms; i++) {
      let x = i * fontSize;
      // 也让y轴方向也向下掉一个文字的距离
      let y = drops[i] * fontSize;
      // 随机字符
      context!.fillText(dropChars[Math.floor(Math.random() * len)], x, y);
      // 加一个随机数，第二次坠落随机
      if (y >= canvas!.height && Math.random() > 0.99) {
        drops[i] = 0;
      }
      // 让数组里面的值每次加一，用于上面的y轴下掉
      drops[i]++;
    }
  }
  draw();
  timer = setInterval(draw, 40);
})

onUnmounted(() => {
  clearInterval(timer)
})


</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style lang="scss" scoped>
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -10000;
  image-rendering: pixelated;
}
</style>