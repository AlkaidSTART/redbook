<script setup>

</script>
<template>
<header>
    <headNave></headNave>
</header>
<Body>
    <!-- <template #body1>
        <Body1></Body1>
    </template> -->
    <template #body3>
        <Body3></Body3>
    </template>
</Body>
<footer>
    <Sfoot></Sfoot>
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
    Body1,
    Body3,
    Body2,
    Sfoot
  }
}
</script>
<style scoped>

</style>