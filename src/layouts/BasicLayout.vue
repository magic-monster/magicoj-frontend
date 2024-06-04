<template>
  <div id="basticLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="contnet">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="-footer">
        <a href="#" target="_blank">magic的GitHub</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basticLayout {
}

#basticLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basticLayout .contnet {
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#basticLayout .-footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
