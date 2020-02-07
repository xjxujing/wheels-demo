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

import chai from "chai";
import spies from "chai-spies";
chai.use(spies);

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

new Vue({
    el: "#app",
    data: {
        message: "这是 message",
        loading: false,

        value: ""
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
});
