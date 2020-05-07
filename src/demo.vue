<template>
  <div class="app">
    <!--    <gulu-cascader :source="source" :selected="selected" @update:selected="selected = $event"></gulu-cascader>-->

    <gulu-table :columns="columns" :dataSource="dataSource" compact @changeItem="x"></gulu-table>
    <hr>
    <gulu-table :columns="columns" :dataSource="dataSource" :striped="false"></gulu-table>
  </div>

</template>

<script>
  import Cascader from "./cascader"
  import Button from "./button"

  import GuluTable from "./table"

  export default {
    name: "Demo",
    components: {
      "gulu-cascader": Cascader,
      "gulu-button": Button,
      "gulu-table": GuluTable
    },
    data() {
      return {
        columns: [
          {text: "姓名", field: "name"},
          {text: "分数", field: "score"},
        ],
        dataSource: [
          {id: 1, name: "lucky", score: 100},
          {id: 2, name: "apple", score: 80},
          {id: 3, name: "dream", score: 100},
          {id: 4, name: "bucky", score: 80},
          {id: 5, name: "nana", score: 100},
          {id: 6, name: "frank", score: 80},
        ],

        // 下面是三级联动
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

    methods: {
      x(obj) {
        console.log(obj)
      }
    }

  }

</script>
