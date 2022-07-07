<template>
  <li v-for="country in allCountries" class="col-12 col-ms-6 col-lg-3" :key="country.name">
    <div>
      <nuxt-link :to="`/country/${country.name}`">
        <div class="countryInfo">
          <img :src="country.flags.svg">
          <div class="aboutCountry">
            <p class="nameCountry">{{ country.name }}</p>
            <ul class="info">
              <li>
                <b>Population:</b>
                <span> {{ country.population }} </span>
              </li>
              <li>
                <b>Region:</b>
                <span> {{ country.region }} </span>
              </li>
              <li>
                <b>Capital:</b>
                <span> {{ country.capital }} </span>
              </li>
            </ul>
          </div>
        </div>
      </nuxt-link>
    </div>
  </li>
</template>

<script setup lang="ts">
import {useFetch} from "#app";
import {reactive, ref} from "vue";

const props = defineProps({
  allCountries: {
    type:Array
  }
})

console.log(props.allCountries)

const searchCountry = ref("")

const filterCountry = () => {

}


</script>

<style scoped>
.countryInfo {
  width: 100%;
  box-shadow: 0 0 3px #d2d2d2;
  margin: 2.7rem 0;
  border-radius: 0.5rem;
}

.countryInfo img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.aboutCountry {
  padding: 1.5rem;
}

.nameCountry {
  font-size: 14px;
  font-weight: bold;
}


.info {
  padding: 1rem 0 0;
}

.info li {
  font-size: 13px;
  font-weight: lighter;
  line-height: 1.7;
}

.info li b {
  font-weight: bold;
}

.info li span {
  margin: 0 0 0 5px;
}
</style>