<template>
  <div class="demos-wrapper">
    <gulu-button @click="showToast('top')">top</gulu-button>
    <gulu-button @click="showToast('center')">center</gulu-button>
    <gulu-button @click="doNotAutoClose('bottom')">不会自动关闭</gulu-button>
    <hr />
    <gulu-button @click="definedCloseButton">自定义关闭</gulu-button>
  </div>
</template>

<script>
  import Button from "../../../src/button"
  import plugin from "../../../src/plugin"
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    name: "ToastDemos",

    components: {
      "gulu-button": Button
    },

    methods: {
      showToast(position) {
       this.$toast("你好呀！", {
          position: position
       })
      },
      doNotAutoClose(position) {
        this.$toast("你好呀！", {
          position: position,
          autoClose: false
        })
      },
      definedCloseButton() {
        this.$toast("你喜欢吃梨子吗", {
          closeButton: {
            text: "喜欢",
            callback: () => {
              alert("你说喜欢！")
            }
          }
        })
      }
    }

  }
</script>

<style scoped>
  .demos-wrapper {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>
