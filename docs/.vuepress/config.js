module.exports = {
  base: "/wheels-demo/",
  title: "我的咕噜文档",
  description: "Just playing around",
  themeConfig: {
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: ["/install/"]
      },

      {
        title: "组件",
        collapsable: false,
        children: ["/components/button", "/components/input", "/components/tabs", "/components/toast", "/components/grid"]
      }
    ]
  }
}
