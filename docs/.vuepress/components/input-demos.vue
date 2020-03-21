<template>
  <div>
    <div style="padding: 5px 0">
      <gulu-input v-model="value"></gulu-input>
    </div>
    <div style="padding: 5px 0">
      <gulu-input value="input 组件"></gulu-input>
    </div>
    <div style="padding: 5px 0">
      <gulu-input value="input 组件" disabled></gulu-input>
    </div>
    <div style="padding: 5px 0">
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