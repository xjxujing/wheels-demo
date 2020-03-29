const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";
import TabsHead from "../src/tabs-head";
import TabsItem from "../src/tabs-item";
import TabsBody from "../src/tabs-body";
import TabsPane from "../src/tabs-pane";

Vue.component("gulu-tabs", Tabs);
Vue.component("gulu-tabs-head", TabsHead);
Vue.component("gulu-tabs-body", TabsBody);
Vue.component("gulu-tabs-item", TabsItem);
Vue.component("gulu-tabs-pane", TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("TabsItem", () => {
    it("存在.", () => {
        expect(TabsItem).to.exist;
    });

    describe("测试 props 接受", () => {
        it("接收 name", () => {
            const Constructor = Vue.extend(TabsItem);
            const vm = new Constructor({
                propsData: {
                    name: "xxx"
                }
            }).$mount();
            expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
        });

        it("接受 disabled", () => {
            const Constructor = Vue.extend(TabsItem);
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            expect(vm.$el.classList.contains("disabled")).to.be.true;
            const callback = sinon.fake();
            vm.$on("click", callback);
            vm.$el.click();
            expect(callback).to.have.not.been.called;
        });
    });
});
