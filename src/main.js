import Vue from "vue";
import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";
import Icon from "./Icon";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Sider from "./sider";
import Toast from "./toast";
import plugin from "./plugin";
import Tabs from "./tabs";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover"

Vue.use(plugin);

Vue.component("gulu-button", Button);
Vue.component("gulu-button-group", ButtonGroup);
Vue.component("gulu-icon", Icon);
Vue.component("gulu-input", Input);
Vue.component("gulu-row", Row);
Vue.component("gulu-col", Col);
Vue.component("gulu-layout", Layout);
Vue.component("gulu-header", Header);
Vue.component("gulu-content", Content);
Vue.component("gulu-footer", Footer);
Vue.component("gulu-sider", Sider);
Vue.component("gulu-toast", Toast);
Vue.component("gulu-tabs", Tabs);
Vue.component("gulu-tabs-head", TabsHead);
Vue.component("gulu-tabs-body", TabsBody);
Vue.component("gulu-tabs-item", TabsItem);
Vue.component("gulu-tabs-pane", TabsPane);
Vue.component("gulu-popover", Popover);

new Vue({
    el: "#app",
    data: {
        message: "这是 message",
        loading: false,
        value: "",
        selected: "onepeace"
    },
    created() {},
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        },

        showToast(position) {
            this.$toast("这是个 toast!", {
                closeButton: {
                    text: "知道了",
                    callback(toast) {
                        toast.log();
                        console.log("用户知道了");
                    }
                },
                position: position
            });
        },

        yyy(e) {
            console.log(e)
        }

    
    }
});
