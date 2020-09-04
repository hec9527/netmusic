<template>
  <div id="app">
    <div id="main">
      <!-- 左侧边栏 -->
      <aside id="aside"></aside>
      <!-- 主页面 -->
      <div id="content"></div>
    </div>
    <!-- 底部播放栏 -->
    <footer id="footer"></footer>
  </div>
</template>

<style lang="scss">
#app {
  min-width: 1000px;
  min-height: 670px;
  width: 1000px;
  height: 670px;
  border: 1px solid #6780;
  background: #6783;

  #main {
    display: flex;
    flex-direction: row;
    height: calc(100% - 60px);

    #aside {
      min-width: 200px;
      width: 200px;
      background: #abf3;
    }

    #content {
      min-width: calc(100% - 200px);
      width: calc(100% - 200px);
    }
  }

  #footer {
    height: 60px;
    background: #f673;
  }
}
</style>
