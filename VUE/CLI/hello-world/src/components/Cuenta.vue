<template>
    <div>
        <h2>Tipo de Cuenta: {{cuenta}}</h2>
        <h2>Saldo: {{saldo}}</h2>
        <h2>Cuenta {{estado ? ' Activa': ' Desactivada'}}</h2>
        <div v-for="(servicio, index) in servicios" :key="index">
            {{index}} - {{ servicio }}
        </div>
        <AccionSaldo 
            texto="Aumentar Saldo" 
            @accion="aumentar"
        />
        <AccionSaldo 
            texto="Disminuir Saldo"
            @accion="disminuir"
            :desactivar="desactivar"
        />
    </div>
</template>

<script>
import AccionSaldo from './AccionSaldo'

export default {
    components:{
        AccionSaldo
    },
    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: true,
            servicios: ['giro', 'abono', 'transferencia'],
            desactivar: false
        }
    },
    methods:{
        aumentar() {
            this.saldo = this.saldo + 100
            this.desactivar = false
        },
        disminuir() {
            if (this.saldo === 0) {
                this.desactivar = true
                alert('Te has quedado sin saldo')
                return
            }
            this.saldo = this.saldo - 100
        }
    }
}
</script>

<style>

</style>