<script setup>
import { ref } from 'vue'
const currentIndex = ref(0)
const handlechange = (index) => {
    currentIndex.value = index
}
</script>
<template>
    <header>
        <headNave></headNave>
    </header>
    <Body :currentIndex="currentIndex">
        <template #body1 v-if="currentIndex === 0">
            <Body1></Body1>
        </template>
        <template #body2 v-if="currentIndex === 1">
            <Body2></Body2>
        </template>
        <template #body3 v-if="currentIndex === 2">
            <Body3></Body3>
        </template>
        <template #body4 v-if="currentIndex === 3">
            <Body4></Body4>
        </template>
    </Body>
    <footer>
        <Sfoot @change="handlechange"></Sfoot>
    </footer>



</template>
<script>
import headNave from './components/headNave.vue'
import Body from './components/Body.vue'
import Body1 from './components/Body1.vue'
import Body4 from './components/Body4.vue'
import Sfoot from './components/Sfoot.vue'
import Body3 from './components/Body3.vue'
import Body2 from './components/Body2.vue'
export default {
    name: 'App',
    components: {
        headNave,
        Body,
        Body1,
        Body4,
        Body3,
        Body2,
        Sfoot
    }
}
</script>
<style scoped></style>