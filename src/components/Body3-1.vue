<script setup>
import { ref } from 'vue'
// const like=ref(false)
// like.style.backgroundColor=like?'#007aff':'#ababab'


</script>
<template>
    <div class="container">
        <div class="clogo"><img src="../assets/1.jpg" alt=""></div>
        <div class="comment">
            <header class="name">用户1</header>
            <div class="rep">
                <p class="content">这是一条评论</p>
                <p class="data">2025-01-01</p>
            </div>
            <div class="r1">
                <div class="rep1">你好</div>
                <div class="rep2">我是被回复的消息</div>
            </div>
            <div class="repbox">
                <button class="btn">回复</button>
                <div class="like" ref="like" @click="like=!like"><img src="../assets/喜欢.png" alt=""></div>
            </div>
        </div>
        <div class="plogo">无</div>
    </div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

.container {
    font-size: 16px;
    width: 100%;
    height: calc(100* $dp);
    display: flex;
    justify-content: space-between;
    // padding: calc(4* $dp);
    border-top: 1px solid #f1f1f1;
    margin-top: calc(2* $dp);

    .clogo {
        width: calc(10* $dp);
        height: calc(10* $dp);
        border-radius: 50%;
        overflow: hidden;
        margin-top: calc(4* $dp);
        margin-left: calc(4* $dp);
        margin-right: calc(3* $dp);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .comment {
        width: calc(80* $dp);
        height: auto;
        line-height: calc(10* $dp);
        text-align: flex-start;
        border-radius: calc(5* $dp);
        flex: 1;
        padding: calc(2* $dp);

        .name {
            font-size: 16px;
            font-weight: bold;
            color: #f1f1f1;

        }

        .rep {
            display: flex;
            justify-content: flex-start;

            p:nth-child(1) {
                color: #f1f1f1;
            }

            p:nth-child(2) {
                color: #999;
                margin-left: calc(3* $dp);
            }
        }

        .r1 {
            div:nth-child(1) {
                color: #f1f1f1;
            }

            div:nth-child(2) {
                color: #999;
            }
        }
    }

    .repbox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: calc(2* $dp);
        background-image: url('../assets/评论.png');

        .btn {
            background-color: #ababab;
            color: #333;
            border: none;
            outline: none;
            padding: calc(2* $dp);
            border-radius: calc(5* $dp);
        }
        .like{
            width: calc(10* $dp);
            height: calc(10* $dp);
            margin-left: calc(3* $dp);
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .plogo {
        width: calc(10* $dp);
        height: calc(10* $dp);
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
