import Vue from "vue";
import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";
import Icon from "./Icon";
import Input from "./input";

import chai from "chai";
import spies from "chai-spies";
chai.use(spies);

Vue.component("gulu-button", Button);
Vue.component("gulu-button-group", ButtonGroup);
Vue.component("gulu-icon", Icon);
Vue.component("gulu-input", Input);

new Vue({
    el: "#app",
    data: {
        message: "这是 message",
        loading: false
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
});