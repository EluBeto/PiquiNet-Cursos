<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Numero</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in tareas" :key="item.id">
      <th scope="row">{{ item.id }}</th>
      <td>{{ item.nombre }}</td>
      <td>
          <span v-for="(categoria, index) in item.categorias" :key="index">
            {{ categoria }}
            {{
                item.categorias.length === index + 1 ? '' : ', '
            }}
          </span>
      </td>
      <td>{{ item.estado }}</td>
      <td>{{ item.numero }}</td>
      <td>
          <button @click="deleteTareas(item.id)" class="btn btn-danger btn-sm ml-2">
              Eliminar
          </button>
          <router-link class="btn btn-warning btn-sm ml-2"
                       :to="{
                           name: 'Editar',
                           params: {
                               id: item.id
                           }
                       }">
              Editar
          </router-link>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    computed:{
        ...mapState(['tareas'])
    },
    methods:{
        ...mapActions(['deleteTareas'], )
    }
}
</script>
