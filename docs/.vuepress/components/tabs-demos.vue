<template>
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
</template>

<script>
  import Icon from "../../../src/icon"
  import Tab from "../../../src/tabs"
  import TabsHead from "../../../src/tabs-head"
  import TabsItem from "../../../src/tabs-item"
  import TabsPane from "../../../src/tabs-pane"
  import TabsBody from "../../../src/tabs-body"

  export default {
    components: {
      "gulu-icon": Icon,
      "gulu-tabs": Tab,
      "gulu-tabs-head": TabsHead,
      "gulu-tabs-item": TabsItem,
      "gulu-tabs-pane": TabsPane,
      "gulu-tabs-body": TabsBody
    },

    data() {
      return {
        selected: "onepeace"
      }
    }
  }
</script>