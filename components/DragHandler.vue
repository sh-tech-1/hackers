<template>
  <div class="drag-handler" />
</template>

<script>
export default {
  // methods: {
  //   onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
  //     if (first) {
  //       this.dragged = true
  //       return
  //     }
  //     if (last) {
  //       this.dragged = false
  //       return
  //     }
  //     var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0
  //     var t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0
  //     el.style.left = l + deltaX + 'px'
  //     el.style.top = t + deltaY + 'px'
  //   }
  // }
}
</script>

<style>
.drag-handler {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  cursor: pointer;
}
</style>
