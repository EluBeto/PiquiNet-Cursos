const app = Vue.createApp({
    data(){
        return{
            titulo: "Mi banco con VUE.Js",
            cantidad: 1000,
            enlace: 'https://v3.vuejs.org/guide/installation.html#vue-devtools',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            this.cantidad = this.cantidad + 100
        },
        restaSaldo(valor){
            if(this.cantidad === 0){
                this.desactivar = true
                alert("Saldo en Cero")
               
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },
    computed:{
        colorCantidad(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusTexto(){
            return this.titulo.toUpperCase()
        }
    }
})