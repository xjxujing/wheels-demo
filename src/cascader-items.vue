<template>
  <div class="cascader-items">
    <div class="left">
      <div v-for="item in source" @click="handleClick(item)">{{ item.name }}</div>
    </div>
    <div class="right" v-if="rightItems">
      <CascaderItems :level="level+1" :source="rightItems" :selected="selected"
                     @update:selected="onUpdateSelected"></CascaderItems>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CascaderItems",
    props: {
      source: {
        type: Array,
        default: () => []
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      }
    },

    computed: {
      rightItems() {
        let currentSelected = this.selected[this.level]
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        } else {
          return null
        }
      }
    },

    methods: {
      handleClick(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1)
        this.$emit("update:selected", copy)
      },
      onUpdateSelected(newSelected) {
        this.$emit("update:selected", newSelected)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cascader-items {
    border: 1px solid black;
  }
</style>