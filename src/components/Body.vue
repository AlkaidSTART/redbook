<script setup>

</script>
<template>
    <div class="body">
        <slot name="body1"></slot>
    </div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

.body {
    width: 100%;
    height: calc(100 * #{$dp});
    background-color: #363636;
}
</style>