<script setup>

</script>
<template>
    <div class="container">
        <div class="items">
            <div class="logo"><img src="../assets/1.jpg" alt=""></div>
            <div class="body">
                <p class="username">AlkaidSTART</p>
                <span class="cd">
                    <p class="cd1">收藏了你的笔记</p>
                    <p class="time">2025-10-12</p>
                </span>
            </div>
            <div class="img"><img src="../assets/主页.png" alt=""></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

.container {
    font-size: 16px;
    width: 100%;
    height: calc(100* $dp);
    border-top: 1px solid #f1f1f1;
    margin-top: calc(2* $dp);
    overflow: scroll;
    .items {
        width: 100%;
        height: calc(25* $dp);
        display: flex;
        justify-content: space-between;
        padding: calc(2* $dp);
        border-bottom: 1px solid #f1f1f1;
        .logo{
            width: calc(16* $dp);
             height: calc(16* $dp);
             border-radius: 50%;
             overflow: hidden;
             img{
                width: 100%;
                height: 100%;
                object-fit: cover;
             }
        }
        .body{
            width: calc(60* $dp);
            height: calc(20* $dp);
            line-height: calc(30* $dp);
            .username{
                height: calc(10* $dp);
                font-size: 16px;
                font-weight: bold;
                text-align: left;
                line-height: calc(10* $dp);
            }
            .cd{
                height: calc(6* $dp);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                p:nth-child(1){
                    height: calc(6* $dp);
                    line-height: calc(6* $dp);
                    font-size: 14px;
                    color: #999;
                }
                p:nth-child(2){
                      height: calc(6* $dp);
                    line-height: calc(6* $dp);
                    font-size: 14px;
                    color: #999;
                    margin-left: calc(3* $dp);
                }
            }
        }
        .img{
            width: calc(16* $dp);
             height: calc(16* $dp);
             border-radius: calc(8* $dp);
             background-color: transparent;
             img{
                width: 100%;
                height: 100%;
                object-fit: cover;
             }
        }
    }

}
</style>
