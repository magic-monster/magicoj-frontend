<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img class="logo" src="../assets/logo.png" />
          <div>magicOJ</div>
        </a-space>
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
#userLayout {
  text-align: center;
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .header {
  margin-top: 16px;
}

#userLayout .contnet {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .-footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts"></script>
