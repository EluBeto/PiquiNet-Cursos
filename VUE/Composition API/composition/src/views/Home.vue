<template>
  <div class="home">
    <h1>Contador: {{ contador }}</h1>
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
