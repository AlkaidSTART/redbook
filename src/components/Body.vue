<script setup>
import Refersh from './refersh.vue'
const props = defineProps({
    currentIndex: {
        type: Number,
        default: 0
    }
})
</script>
<template>
    <div class="r"><template>
            <Refersh></Refersh>
        </template></div>

    <div class="body">
        <template v-if="currentIndex === 0">
            <slot name="body1"></slot>
        </template>
        <template v-else-if="currentIndex === 1">
            <slot name="body2"></slot>
        </template>
        <template v-else-if="currentIndex === 2">
            <slot name="body3"></slot>
        </template>
        <template v-else-if="currentIndex === 3">
            <slot name="body4"></slot>
        </template>
    </div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

.body {
    width: 100%;
    height: calc(105 * #{$dp});
    overflow-y: scroll;
    background-color: #363636;
    overflow-x: hidden;
}
</style>