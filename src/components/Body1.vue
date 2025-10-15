<script setup>
import { ref } from 'vue'
import { watch } from 'vue'
import Refersh from './refersh.vue'
import body1box from './Body1-box.vue'
const activeIndex = ref(0)
const delayIndex = ref(0)
const showRefersh = ref(false)
const rotate = ref(false)
const userBoxs = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }])
const handleClick = (index) => {
  activeIndex.value = index

  // 每次点击都显示刷新动画
  showRefersh.value = true
  rotate.value = true
  setTimeout(() => {
    showRefersh.value = false
    rotate.value = false
  }, 1800)
}
rotate.value = true
watch(activeIndex, (newVal) => {
  setTimeout(() => {
    delayIndex.value = newVal
  }, 300)
})
</script>
<template>

  <nav class="nave">
    <ul>
      <li :class="{ 'active': activeIndex === 0, 'delayIndex': delayIndex === 0 }" @click="handleClick(0)">推荐</li>
      <li :class="{ 'active': activeIndex === 1, 'delayIndex': delayIndex === 1 }" @click="handleClick(1)">穿搭</li>
      <li :class="{ 'active': activeIndex === 2, 'delayIndex': delayIndex === 2 }" @click="handleClick(2)">美食</li>
      <li :class="{ 'active': activeIndex === 3, 'delayIndex': delayIndex === 3 }" @click="handleClick(3)">彩妆</li>
      <li :class="{ 'active': activeIndex === 4, 'delayIndex': delayIndex === 4 }" @click="handleClick(4)">影视</li>
    </ul>
  </nav>
  <div class="r" :class="{ 'hide': !showRefersh }">
    <Refersh :rotate="rotate"></Refersh>
  </div>
  <div class="main" :class="{ 'moved-up': !showRefersh }">
    <body1box v-for="item in userBoxs" :key="item.id"></body1box>
  </div>
</template>
<style lang="scss" scoped>
$dp: 0.1rem;

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

a {
  text-decoration: none;
  color: #fff;
}

.nave {
  width: 100%;
  height: calc(10 * #{$dp});
  // margin-bottom: calc(4 * #{$dp});
  background-color: #363636;
  font-size: 16px;

  ul {
    display: flex;
  }

  li {
    flex: 1;
    text-align: center;
    color: #ffa2b6;
    line-height: calc(10 * #{$dp});

    &.active {
      background-color: #141414;
      border-radius: calc(2 * #{$dp});
    }
  }
}

.r {
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  max-height: 100px;

  &.hide {
    max-height: 0;
    margin-top: 0;
    opacity: 0;
  }
}

.main {
  width: 100%;
  display: grid;
  // grid-template-columns: 1fr 1fr;  // 两列布=>两列
  gap: calc(2 * #{$dp});  // 网格间隙
  margin-top: calc(4 * #{$dp});
  overflow-y: scroll;
  padding-left: calc(3 * #{$dp});
  padding-right: calc(3 * #{$dp});
  transition: margin-top 1.2s ease-in-out;
  &.moved-up {
    margin-top: calc(1 * #{$dp});
  }

  // flex-wrap: wrap;
  .container {
    width: calc(90* #{$dp});
    background-color: #363636;
    display: flex;
    padding-top: calc(2 * #{$dp});
    padding-right: calc(2 * #{$dp});
border: 1px solid #fff;
    .a-s {
      width: calc(46* #{$dp});
      height: calc(120 * #{$dp});
      background-color: #363636;


      .banner {
        width: calc(45 * #{$dp});
        height: calc(50 * #{$dp});
        background-color: #363636;
        border: 1px solid #fff;
        border-radius: calc(2 * #{$dp});

      }

      span {
        width: 100%;
        height: calc(10 * #{$dp});
        font-size: 16px;
        color: #fff;
        text-align: center;
      }

      .user-box {
        width: calc(50* #{$dp});
        height: calc(16 * #{$dp});
        background-color: #363636;
        display: flex;
        justify-content: flex-start;
        margin-top: calc(4 * #{$dp});
        margin-right: calc(3 * #{$dp});

        .user {
          width: calc(8 * #{$dp});
          height: calc(8 * #{$dp});
          line-height: calc(8 * #{$dp});
          border-radius: 50%;
          overflow: hidden;
          margin-top: calc(3 * #{$dp});
          margin-right: calc(2 * #{$dp});

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

        }

        .user-name {
          width: calc(20 * #{$dp});
          height: calc(8 * #{$dp});
          line-height: calc(8 * #{$dp});
          margin-right: calc(2 * #{$dp});
          font-size: 8px;
          color: #fff;
          text-align: center;

          span {
            width: 100%;
            height: calc(10 * #{$dp});
            font-size: 16px;
            color: #fff;
            text-align: center;
            display: inline-block;
            margin-top: calc(3 * #{$dp});
          }
        }

        .user-info {
          width: calc(13 * #{$dp});
          height: calc(10 * #{$dp});
          line-height: calc(10 * #{$dp});
          font-size: 16px;
          color: #fff;
          display: flex;
          margin-top: calc(2.5 * #{$dp});
          text-align: center;

          .like {
            width: calc(10 * #{$dp});
            height: calc(10 * #{$dp});
            margin-right: calc(4 * #{$dp});

            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }

            .follow {
              display: flex;
              font-size: 16px;
              margin-top: calc(5 * #{$dp});
              margin-left: calc(2 * #{$dp});
              align-items: center;
            }
          }
        }

      }
    }
  }
}
</style>
