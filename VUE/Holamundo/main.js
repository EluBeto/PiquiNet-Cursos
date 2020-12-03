const app = Vue.createApp({
    data(){
        return{
            titulo: "Mi banco con VUE.Js",
            cantidad: 0,
            enlace: 'https://v3.vuejs.org/guide/installation.html#vue-devtools',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques']
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad = this.cantidad + 100
        }
    }
})