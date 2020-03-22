<template>
  <div class="cascader">
    <div class="trigger"></div>
    <div class="item-wrapper">
      <CascaderItems :source="source" :selected="selected" @update:selected="onUpdateSelected"></CascaderItems>
    </div>
  </div>
</template>

<script>
  import CascaderItems from "./cascader-items"

  export default {
    name: "Cascader",

    components: { CascaderItems },

    props: {
      source: {
        type: Array,
        default: () => []
      },
      selected: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      onUpdateSelected(newSelected) {
        this.$emit("update:selected", newSelected)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cascader {
    position: relative;
    .trigger {
      width: 100px;
      height: 30px;
      border: 1px solid black;
    }
    .item-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
    }
  }

</style>