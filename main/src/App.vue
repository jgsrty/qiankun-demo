<template>
  <div id="main-app">
    <div id="main-nav">
      <router-link to="/">main</router-link> |
      <router-link to="/about">main-about</router-link> | 
      <router-link to="/first-vue">vue1</router-link> | 
      <router-link to="/second-vue">vue2</router-link>
    </div>
    <router-view/>
    <div id="firstVue"></div>
    <div id="secondVue"></div>
  </div>
</template>

<style lang="scss">
#main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main-nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
