<template>
  <div class="card mb-3">
      <div class="card-body">
          <h5>{{pais.name}}</h5>
          <p class="text-center">
              <img :src="pais.flag" :alt="`bandera-${pais.name}`" class="img-fluid w-50">
          </p>
          <p class="card-text">
              <span class="badge bg-primary d-block mb-1">
                 Nombre Nativo: {{ pais.nativeName }}
              </span>
              <span class="badge bg-info p-3 d-block mb-1">
                 Poblacion:  {{ numberFormat(pais.population) }}
              </span>
              <span class="badge bg-success d-block mb-1">
                 Capital: {{ pais.capital }}
              </span>
              <span class="badge bg-dark d-block mb-1">
                 Region: {{ pais.region }}
              </span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['pais'],
    setup() {
        const numberFormat = (num) => {
            return new Intl.NumberFormat("de-DE").format(num)
        }
        return { numberFormat }
    }
}
</script>
