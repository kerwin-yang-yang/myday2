<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Head from './components/Head.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

  <!-- <Head></Head>
  <Content></Content>
  <Footer></Footer> -->
  <router-view></router-view>
</template>


