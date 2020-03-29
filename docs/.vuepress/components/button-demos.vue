<template>
  <div class="button-demos">
    <gulu-button>默认按钮</gulu-button>
    <gulu-button icon="thumbs-up">点赞</gulu-button>
    <gulu-button icon-position="right" icon="download">下载</gulu-button>
    <gulu-button
      icon="settings"
      icon-position="left"
      :loading="loading"
      @click="loading = !loading"
    >
      提交
    </gulu-button>

    <gulu-button-group>
      <gulu-button icon="left">上一页</gulu-button>
      <gulu-button>第 3 页</gulu-button>
      <gulu-button icon="right" icon-position="right">
        下一页
      </gulu-button>
    </gulu-button-group>
  </div>
</template>

<script>
  import Button from "../../../src/button"
  import ButtonGroup from "../../../src/button-group"

  export default {
    name: "ButtonDemos",

    components: {
      "gulu-button": Button,
      "gulu-button-group": ButtonGroup
    },
    data() {
      return {
        loading: false
      }
    }
  }
</script>

<style scoped>
  .button-demos {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>