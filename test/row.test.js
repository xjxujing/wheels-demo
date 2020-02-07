const expect = chai.expect;
import Vue from "vue";
import Row from "../src/row";
import Col from "../src/col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
    it("存在.", () => {
        expect(Row).to.exist;
    });

    describe("测试 props 接受", () => {
        it("接收 gutter", done => {
            Vue.component("gulu-row", Row);
            Vue.component("gulu-col", Col);

            // 通过这种方式把结构加入
            const div = document.createElement(div);
            document.body.appendChild(div);
            div.innerHTML = `
                <gulu-row gutter="20">
                    <gulu-col span="12"></gulu-col>
                    <gulu-col span="12"></gulu-col>
                </gulu-row>
            `;
            const vm = new Vue({
                el: div
            });
            setTimeout(() => {
                const cols = vm.$el.querySelectorAll(".gulu-col");
                expect(getComputedStyle(cols[0]).paddingRight).to.eq("10px");
                expect(getComputedStyle(cols[1]).paddingLeft).to.eq("10px");
                // 如果用到了 vue 的钩子, 异步的过程加个 done
                done();
                vm.$el.remove();
                vm.$destroy();
            });
        });

        it("接受 align", () => {
            const div = document.createElement("div");
            document.body.appendChild(div);
            const Constructor = Vue.extend(Row);
            const vm = new Constructor({
                propsData: {
                    align: "right"
                }
            }).$mount(div);
            const element = vm.$el;
            expect(getComputedStyle(element).justifyContent).to.eq("flex-end");
            div.remove();
            vm.$destroy();
        });
    });
});
