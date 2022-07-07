<template>
  <section>
    <div class="container">
      <div class="box">
        {{id}}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useRoute} from "#app";
import {useFetch} from "#app";
import {reactive, ref} from "vue";


const route = useRoute()
const id = route.params.id

let allCountries = reactive([])

const url = 'https://restcountries.com/v2/all?fields=name,capital,flags,population,region'
const {pending, error} = await useFetch(url, {
  transform: (res: any) => {
    allCountries = res

    findItem()
  }
})

function findItem() {
  try {
    const itemIndex = allCountries.find(i => i.name == id)
    console.log(itemIndex)
  } catch (e) {
    console.log(e)
  }
}

</script>

<style scoped>
section {
  width: 100%;
  height: 90.6vh;
  background: #202c37;
  color: #fff;
  padding: 100px 0;
}

.box {
  padding: 0 63px;
}
</style>