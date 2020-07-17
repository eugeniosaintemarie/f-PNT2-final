<template>
  <section class="src-components-binding">
    <div class="jumbotron mt-3">
      <div id="input">
        <div>
          <input type="text" v-model="message" />
          <button @click="reemplazar()">Cambiar</button>
        </div>
      </div>
    </div>
    <div align="center">
      <table>
        <tbody>
          <tr>
            <td class="pregunta">1</td>
            <td>B</td>
          </tr>
          <tr>
            <td class="pregunta">2</td>
            <td>B</td>
          </tr>
          <tr>
            <td class="pregunta">3</td>
            <td>D</td>
          </tr>
          <tr>
            <td class="pregunta">4</td>
            <td>B y C</td>
          </tr>
          <tr>
            <td class="pregunta">5</td>
            <td>B</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-binding',
    props: [],
    components : {
    },
    mounted () {

    },
    el: '#input',
    data () {
      return {
        message:'Texto a encriptar',
      }
    },
    methods: {
      reemplazar: function () {
                this.message = this.message.replace("a", "u");
                this.message = this.message.replace("e", "o");
                this.message = this.message.replace("o", "e");
                this.message = this.message.replace("u", "a");
                this.message = this.message.toUpperCase();
            }
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
.src-components-binding {
}

.jumbotron {
  background-color: black;
  color: white;
}

hr {
  background-color: white;
}
.pregunta {
  font-weight: bold;
}
</style>
