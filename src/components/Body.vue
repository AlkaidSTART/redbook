<script setup>

</script>
<template>
    <div class="body">
        <!-- <slot name="body1"></slot> -->
        <slot name="body3"></slot>
        <!-- <slot name="body3"></slot>
        <slot name="body4"></slot> -->
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