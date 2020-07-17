<template>
  <div id="app" class="container">
    <div class="jumbotron mt-3">
      <Contador valorInicial="5" estilo="warning" colorDeFondo="orange" titulo="Vue" />

      <Input titulo="Input" colorDeFondo="red" />
    </div>
  </div>
</template>

<script>
import Input from "./components/Input.vue";

export default {
  name: "App",
  components: {
    Input
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app {
}

h1 {
  color: blue;
}
</style>
