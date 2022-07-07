<template>
  <main>
    <div class="container">
      <div class="searchTypeCountry">
        <input
            type="search"
            placeholder="Search Countries"
            class="searchCountry"
        >

        <select id="selectRegion">
          <option>All</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>

      <div class="countryBox">
        <ul class="row">
          <get-all-countries :allCountries="allCountries"></get-all-countries>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {useFetch} from "#app";
import {reactive, ref} from "vue";

let allCountries: any = reactive([])

const url = 'https://restcountries.com/v2/all?fields=name,capital,flags,population,region'

function getApi() {
  fetch(url)
      .then(response => response.json())
      .then(data => {
        for (let date of data) {
          allCountries = date
        }
      })
      .catch(e => console.log(e))
}

getApi()
</script>

<style scoped>
main {
  background: #202c37;
  color: #fff;
  padding: 2rem 0;
}

.searchTypeCountry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 63px;
}

.searchCountry {
  margin-bottom: 0;
  padding: 15px 25px;
  width: 262px;
  border: 0;
  outline: 0;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 8px #d2d2d2;
  background: #202c37;
  color: #fff;
}

#selectRegion {
  width: 180px;
  padding: 10px 15px;
  background: #2b3945;
  border: 0;
  outline: 0;
  color: #fff;
  border-radius: 0.5rem;
}

.countryBox {
  margin: 4rem 0;
  padding: 0 50px;
}


</style>