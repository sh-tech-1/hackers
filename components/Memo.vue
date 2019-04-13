<template>
  <div
    :style="{
      top: `${posY}px`,
      left: `${posX}px`
    }"
    class="memo">
    <span
    class="removeBtn"
    @click="oncklichd">X</span>
    <drag-handler
    @dragStart="$emit('dragStart',$event)"
    >
    </drag-handler>
    <text-box
      :text="text"
      @inputed="onInputed" />
  </div>
</template>

<script>
import DragHandler from '~/components/DragHandler.vue'
import TextBox from '~/components/TextBox.vue'

export default {
  components: {
    DragHandler,
    TextBox
  },
  props: {
    posX: {
      type: Number,
      required: true
    },
    posY: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onInputed(text) {
      this.$emit('inputed', text)
    }
  }
}
</script>

<style>
.memo {
  position: fixed;
  width: 200px;
  height: 300px;
  background: #ff0;
}
.removeBtn{
  position: absolute;
  right: 0;
  cursor: pointer;
}
</style>
