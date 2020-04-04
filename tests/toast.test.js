const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/toast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
    it("存在.", () => {
        expect(Toast).to.exist;
    });

    describe("props", function() {
        // this.timeout(15000);
        it("接受 autoClose & autoCloseDelay", done => {
            const div = document.createElement("div");
            document.body.appendChild(div);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: { autoClose: true, autoCloseDelay: 1 }
            }).$mount(div);
            // 这里也同时测试了 close 事件
            vm.$on("close", () => {
                expect(document.body.contains(vm.$el)).to.eq(false);
                done();
            });
        });

        it("接受 closeButton", () => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: "知道了",
                        callback
                    }
                }
            }).$mount();
            let closeElement = vm.$el.querySelector(".close");
            expect(closeElement.textContent.trim()).to.eq("知道了");
            closeElement.click();
            expect(callback).to.have.been.called;
        });

        it("接受 enableHtml", () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            });
            vm.$slots.default = [`<strong id="test">hi</strong>`];
            vm.$mount();
            let strong = vm.$el.querySelector("#tests");
            expect(strong).to.exist;
        });

        it("接受 position", () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    position: "bottom"
                }
            }).$mount();
            expect(vm.$el.classList.contains("bottom")).to.eq(true);
        });
    });
});
