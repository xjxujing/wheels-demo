<template>
  <div>

    <h4>基础用法</h4>
    <gulu-button>默认按钮</gulu-button>
    <gulu-button icon="thumbs-up">点赞</gulu-button>

    <pre><code>{{ useBasic }}</code></pre>

    <h4>点击按钮</h4>
    <gulu-button
      icon="settings"
      icon-position="left"
      :loading="loading"
      @click="loading = !loading"
    >
      提交
    </gulu-button>

    <pre><code>{{ useEvent }}</code></pre>

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
        useBasic: `
      <gulu-button>默认按钮</gulu-button>
      <gulu-button icon="thumbs-up">点赞</gulu-button>
      `.replace(/\t+| +/g, "").trim(),

        useEvent: `
        <gulu-button icon="settings" icon-position="left" :loading="loading" @click="loading = !loading">提交</gulu-button>
        `.replace(/\t+| +/g, " ").trim(),
        loading: false
      }
    }
  }
</script>

<style>
</style>