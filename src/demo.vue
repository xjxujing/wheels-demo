<template>
  <div class="app">
<!--    <gulu-cascader :source="source" :selected="selected" @update:selected="selected = $event"></gulu-cascader>-->
    <gulu-button>ahhah</gulu-button>
  </div>

</template>

<script>
  import Cascader from "./cascader"
  import Button from "./button"

  export default {
    name: "Demo",
    components: {
      "gulu-cascader": Cascader,
      "gulu-button": Button
    },
    data() {
      return {
        selected: [],
        source: [
          {
            name: "安徽",
            children: [
              {
                name: "合肥",
                children: [
                  {
                    name: "蜀山区",
                    name: "包河区",
                    name: "瑶海区"
                  }
                ]
              },
              {
                name: "芜湖",
                children: [
                  {
                    name: "镜湖区",
                    name: "三山区"
                  }
                ]
              }

            ]
          },
          {
            name: "浙江",
            children: [
              {
                name: "杭州",
                children: [
                  {
                    name: "上城区",
                    name: "西湖区"
                  }
                ]
              }
            ]
          }

        ]
      }
    },
  }

</script>
