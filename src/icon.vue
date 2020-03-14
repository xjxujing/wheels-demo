<template>
    <svg class="gulu-icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>

<script>
import './svg'
export default {
    name: "GuluIcon",
    props: {
        icon: {
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
.gulu-icon {
    width: 1em;
    height: 1em;
}
</style>
