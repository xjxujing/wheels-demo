import Toast from "./toast";

let currentToast;
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, propsData) {
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createToast({
                message,
                propsData,
                Vue,
                onClose: () => {
                    currentToast = null;
                }
            });
        };
    }
};

function createToast({ message, propsData, Vue, onClose }) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({ propsData });
    toast.$slots.default = [message];
    toast.$mount();
    toast.$on("close", onClose);
    document.body.appendChild(toast.$el);
    return toast;
}
