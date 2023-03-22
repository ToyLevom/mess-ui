<template>
  <div class="btn" @click="handleClick" @focus="handleFocus" @blur="handleBlur" @mousedown="handleMouseDown"
    @mouseup="handleMouseUp">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MessButton',
  methods: {
    handleClick(event: any) {
      this.$emit('click', event);
    },
    handleFocus(event: any) {
      this.$emit('focus', event);
    },
    handleBlur(event: any) {
      this.$emit('blur', event);
    },
    handleMouseDown(event: any) {
      this.$emit('mousedown', event);
    },
    handleMouseUp(event: any) {
      this.$emit('mouseup', event);
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  font-size: 1rem;

  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: var(--primary-color);
  border: var(--primary-color) .125em solid;
  padding: 0.125em 1em;
  border-radius: .25em;

  text-shadow:
    0 0 .125em rgba(255, 255, 255, 0.716),
    0 0 .25em currentColor;

  box-shadow:
    inset 0 0 .6em 0 var(--primary-color),
    0 0 .6em 0 var(--primary-color);
}

.btn::before {
  content: '';
  position: absolute;
  background-color: var(--primary-color);
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
  filter: blur(1.2em);
  opacity: .8;
  /* 让伪类不能获取事件 */
  pointer-events: none;
}

.btn::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em .5em var(--primary-color);
  opacity: 0;
  background-color: var(--primary-color);
  z-index: -1;
  transition: all 100ms linear;
}

.btn:hover,
.btn:focus {
  color: var(--background-black-color);
  text-shadow: none;
}

.btn:hover::before,
.btn:focus::after {
  opacity: 1;
}

.btn:hover::after,
.btn:focus::after {
  opacity: 1;
}
</style>