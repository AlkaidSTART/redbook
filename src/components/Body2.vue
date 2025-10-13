<script setup></script>
<template>
    <div class="bt">
        nothing here
    </div>
    <div class="img">
        <img src="../assets/1.jpg" alt="">
    </div>
</template>
<style lang="scss" scoped>
$dp:0.10rem;
.bt {
    text-align: center;
    color: #141411;
}

.img {
    width: calc(50* #{$dp});
    height: calc(50* #{$dp});
    margin:  calc(10* #{$dp}) auto ;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
