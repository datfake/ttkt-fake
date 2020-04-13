<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import'~bootstrap/dist/css/bootstrap.css';


:root {
  --white-color: #fff;
  --black-color: #000;
  --text-color: #333;
}

* {
  box-sizing: inherit;
  font-family: 'Roboto', sans-serif;
}

</style>
