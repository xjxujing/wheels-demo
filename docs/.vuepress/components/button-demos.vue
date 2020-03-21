<template>
  <div>
    <gulu-button>默认按钮</gulu-button>
    <gulu-button icon="thumbs-up">点赞</gulu-button>
    <gulu-button
      icon="settings"
      icon-position="left"
      :loading="loading"
      @click="loading = !loading"
    >
      提交
    </gulu-button>
  </div>
</template>

<script>
  import Button from "../../../src/button"

  export default {
    name: "ButtonDemos",
    components: {
      "gulu-button": Button
    },
    data() {
      return {
        loading: false
      }
    }
  }
</script>

<style>
</style>