<template>
  <textarea
    class="text-box"
    @input="onInput"
  />
</template>

<script>
export default {
  methods: {
    onInput() {
      this.$emit('inputed')
    }
  }
}
</script>

<style>
.text-box {
  position: absolute;
  bottom: 0;
  top: 60px;
  left: 0;
  width: 100%;
}
</style>
