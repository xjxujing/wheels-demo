<template>
  <div class="app">
    <gulu-button icon-position="left" :loading="loading" @click="loading = !loading">
      保存哈哈
    </gulu-button>
    <gulu-button
      icon="settings"
      icon-position="left"
      :loading="loading"
      @click="loading = !loading"
    >
      提交
    </gulu-button>

    <div style="margin: 50px">
      <gulu-tabs :selected.sync="selected">
        <gulu-tabs-head>
          <template slot="actions">
            <button>设置</button>
          </template>
          <gulu-tabs-item name="gintama">
            银魂
          </gulu-tabs-item>
          <gulu-tabs-item name="onepeace">
            <gulu-icon icon="settings"></gulu-icon>
            海贼
          </gulu-tabs-item>
          <gulu-tabs-item name="naruto" disabled>火影</gulu-tabs-item>
        </gulu-tabs-head>
        <gulu-tabs-body>
          <gulu-tabs-pane name="onepeace">海贼王更新到 600 集了！</gulu-tabs-pane>
          <gulu-tabs-pane name="naruto">鸣人练成螺旋丸！</gulu-tabs-pane>
          <gulu-tabs-pane name="gintama">夜兔族超级强</gulu-tabs-pane>
        </gulu-tabs-body>
      </gulu-tabs>
    </div>
  </div>

</template>

<script>
  import Button from "./button"
  import Icon from "./icon"
  import Tab from "./tabs"
  import TabsHead from "./tabs-head"
  import TabsItem from "./tabs-item"
  import TabsPane from "./tabs-pane"
  import TabsBody from "./tabs-body"

  export default {
    name: "Demo",
    components: {
      "gulu-button": Button,
      "gulu-icon": Icon,
      "gulu-tabs": Tab,
      "gulu-tabs-head": TabsHead,
      "gulu-tabs-item": TabsItem,
      "gulu-tabs-pane": TabsPane,
      "gulu-tabs-body": TabsBody
    },
    data() {
      return {
        loading: true,
        selected: "onepeace"
      }
    },
  }

</script>