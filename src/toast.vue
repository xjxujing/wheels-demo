<template>
    <div class="toast" ref="wrapper" :class="toastClass">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="this.$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{ closeButton.text }}
        </span>
    </div>
</template>

<script>
// export default 是 Vue 构建组件的选项
export default {
    name: "GuluToast",
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 3
        },
        closeButton: {
            type: Object,
            default: function() {
                return {
                    text: "关闭",
                    callback: undefined
                };
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: "top",
            validator(value) {
                return ["top", "bottom", "center"].indexOf(value) >= 0;
            }
        }
    },

    computed: {
        toastClass() {
            let { position } = this;
            return position;
        }
    },

    mounted() {
        this.updateStyles();
        this.execAutoClose();
    },

    methods: {
        updateStyles() {
            this.$nextTick(() => {
                this.$refs.line.style.height = `${
                    this.$refs.wrapper.getBoundingClientRect().height
                }px`;
            });
        },
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000);
            }
        },
        close() {
            this.$el.remove();
            this.$emit("close");
            this.$destroy();
        },
        onClickClose() {
            this.close();
            if (this.closeButton && typeof this.closeButton.callback === "function") {
                this.closeButton.callback(this);
            }
        },
        log() {
            console.log("通过 callback 回调, 传递的 this, 然后调用了我");
        }
    }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-time: 1s;
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes slide-top {
    0% {
        opacity: 0;
        transform: translate(-50%, -100%);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, 0);
    }
}
@keyframes slide-bottom {
    0% {
        opacity: 0;
        transform: translate(-50%, 100%);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, 0);
    }
}
.toast {
    font-size: $font-size;
    min-height: $toast-min-height;
    line-height: 1.8;
    position: fixed;
    left: 50%;
    display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0 16px;
    transform: translateX(-50%);
    z-index: 30;
    &.top {
        top: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-top $animation-time;
    }
    &.bottom {
        bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-bottom $animation-time;
    }
    &.center {
        top: 50%;
        transform: translate(-50%, -50%);
        animation: fade-in $animation-time;
    }
    > .message {
        padding: 10px;
    }
    > .line {
        border-left: 1px solid #666;
        margin: 0 16px;
    }
    > .close {
        flex-shrink: 0;
        cursor: pointer;
    }
}
</style>
