<template>
  <div class="input-demos">
    <div>
      <gulu-input v-model="value"></gulu-input>
    </div>
    <div>
      <gulu-input value="input 组件"></gulu-input>
    </div>
    <div>
      <gulu-input value="input 组件" disabled></gulu-input>
    </div>
    <div>
      <gulu-input value="input 组件" error="请输入"></gulu-input>
    </div>
  </div>
</template>

<script>
  import Input from "../../../src/input"

  export default {
    name: "InputDemos",
    components: {
      "gulu-input": Input
    },

    data() {
      return {
        value: ""
      }
    },
  }
</script>

<style lang="scss" scoped>
  .input-demos {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
    div {
      padding-bottom: 10px;
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
</style>