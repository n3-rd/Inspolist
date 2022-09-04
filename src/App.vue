<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Home from './pages/Home.vue';
import TitleBar from "./components/TitleBar.vue";

</script>

<template>
        <TitleBar />

<div class="pt-20">
    <router-view></router-view>

</div>
</template>

