<script setup>
import TitleBar from "./components/TitleBar.vue";

</script>

<template>
  <TitleBar />
  <div class="fixed bottom-0 right-0 md:hidden z-[999]">
    <a href="https://www.producthunt.com/posts/inspolist?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-inspolist"
      target="_blank"><img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=365366&theme=neutral"
        alt="Inspolist - Get&#0032;website&#0032;inspiration&#0032;and&#0032;submit&#0032;your&#0032;own&#0033;&#0046; | Product Hunt"
        style="width: 250px; height: 36px;" width="200" height="36" /></a>

  </div>

  <div class="pt-20">
    <router-view></router-view>

  </div>
</template>

