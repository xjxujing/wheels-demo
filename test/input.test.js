const expect = chai.expect;
import Vue from "vue";
import Input from "../src/input";
import { compile } from "vue-template-compiler";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
    it("存在.", () => {
        expect(Input).to.exist;
    });

    describe("测试 props 接受", () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(() => {
            vm.$destroy();
        });
        it("接收 value", () => {
            vm = new Constructor({
                propsData: {
                    value: "这是一条 value"
                }
            }).$mount();
            const inputElement = vm.$el.querySelector("input");
            expect(inputElement.value).to.equal("这是一条 value");
        });

        it("接受 disabled", () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector("input");
            expect(inputElement.disabled).to.equal(true);
        });

        it("接受 error", () => {
            vm = new Constructor({
                propsData: {
                    error: "信息填错了"
                }
            }).$mount();
            const errorMessage = vm.$el.querySelector(".error-message");
            expect(errorMessage.innerText).to.equal("信息填错了");

            const useElement = vm.$el.querySelector("use");
            expect(useElement.getAttribute("xlink:href")).to.equal("#i-error");
        });
    });

    describe("测试事件", () => {
        const Constructor = Vue.extend(Input);
        let vm;
        it("支持 change 事件", () => {
            ["change", "input", "focus", "blur"].forEach(eventName => {
                vm = new Constructor().$mount();
                // 一个虚拟的函数
                const callback = sinon.fake();
                vm.$on(eventName, callback);

                // 定义一个事件
                let event = new Event(eventName);

                Object.defineProperty(event, "target", {
                    value: { value: "hello" },
                    enumerable: true
                });
            
                let inputElement = vm.$el.querySelector("input");

                // 触发 input 的 change 事件
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith("hello");
            });
        });
    });
});
