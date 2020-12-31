<template>
  <div class="home">
    <h1
     :style="{'color': cambiaColor}"
    >Contador: {{ contador }}</h1>
    <hr>
    <button class="btn btn-success"
      @click="suma"
    >
      +
    </button>
    
    <button class="btn btn-danger"
      @click="restar"
    >
      -
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contador: 0
    }
  },
  computed: {
    cambiaColor() {
      if (this.contador <= 0) {
        return 'red'
      } else {
        return 'blue'
      }
    }
  },
  methods: {
    suma() {
      this.contador ++
    },
    restar() {
      this.contador --
    }
  }
}
</script>
