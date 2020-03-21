<template>
    <div class="app">
        <gulu-button icon-position="left" :loading="loading" @click="loading = !loading">
            保存哈哈
        </gulu-button>
        <gulu-button
                icon="settings"
                icon-position="left"
                :loading="loading"
                @click="loading = !loading"
        >
            提交
        </gulu-button>
    </div>

</template>

<script>
    import Button from "./button"

    export default {
        name: "Demo",
        components: {
            "gulu-button": Button
        },
        data() {
            return {
                loading: true
            }
        },
    }

</script>