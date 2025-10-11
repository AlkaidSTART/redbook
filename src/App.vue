<script setup>

</script>
<template>
<header>
    <headNave></headNave>
</header>
<!-- <main>
    <template>
        <Body1></Body1>
        <Body2></Body2>
        <Body3></Body3>
        <Body4></Body4>
    </template>
</main>
<footer>
    <Sfoot></Sfoot>
</footer> -->



</template>
<script>
import headNave from './components/headNave.vue'
// import Body4 from './components/Body4.vue'
// import Body1 from './components/Body1.vue'
// import Sfoot from './components/Sfoot.vue'
// import Body3 from './components/Body3.vue'
// import Body2 from './components/Body2.vue'
export default {
  name: 'App',
  components: {
    headNave,
    // Body4,
    // Body1,
    // Body3,
    // Body2,
    // Sfoot
  }
}
</script>
<style scoped>

</style>