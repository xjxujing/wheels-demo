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

describe("Tabs", () => {
    it("存在.", () => {
        expect(Tabs).to.exist;
    });

    // 因为不方便测抛出的错误，暂时放弃
    /* it("子组件只能是 tabs-head 和 tabs-body", () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
            <gulu-tabs>
                <div>hi</div>
            <.gulu-tabs>
        `;
        expect(() => {
            const vm = new Vue({
                el: div
            });
        }).to.throw();
    }); */

    describe("测试 props 接受", () => {
        it("接收 selected ", done => {
            // 通过这种方式把结构加入
            const div = document.createElement(div);
            document.body.appendChild(div);
            div.innerHTML = `
                <gulu-tabs selected="onepeace">
                    <gulu-tabs-head>
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
            `;
            const vm = new Vue({
                el: div
            });
            setTimeout(() => {
                const selectedElement = vm.$el.querySelector(".tabs-item:nth-child(2)");
                expect(selectedElement.classList.contains("active")).to.be.true;
                // 如果用到了 vue 的钩子, 异步的过程加个 done
                done();
                vm.$el.remove();
                vm.$destroy();
            });
        });

        it("接受 direction", () => {});
    });
});
