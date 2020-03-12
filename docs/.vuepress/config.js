module.exports = {
    base: "/wheels-demo/",
    title: "我的咕噜文档",
    description: "Just playing around",
    themeConfig: {
        sidebar: [
            {
                title: "入门",
                children: ["/install/", "/get-started/"]
            },

            {
                title: "组件",
                children: ["/components/button"]
            }
        ]
    }
};
