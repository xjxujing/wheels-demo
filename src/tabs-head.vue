<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuluTabsHead",
    inject: ["eventBus"],

    mounted() {
      this.eventBus.$on("update:selected", (item, vm) => {
        let { width, left } = vm.$el.getBoundingClientRect()
        let { left: left2 } = this.$refs.head.getBoundingClientRect()
        this.$nextTick(() => {
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left - left2}px`
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  $tabs-height: 40px;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;

    .line {
      position: absolute;
      bottom: 0;
      border: 1px solid #409eff;
      transition: all .3s;
    }

    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
