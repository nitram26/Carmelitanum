<template>
  <div class="container ">
    <select class="select, carm ">
      <option class="">ORDEN CARMELITAS SEGLAR</option>
      <option>CHORDA: D</option>
      <option>SONUS: 008</option>
      <option>ACTIO: N+/A & +N/A </option>
    </select>

    <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
    <div class="uno">
      <v-select :items="select" v-model="selectedTono" label="TONOS" width="10em" class="nota" />
    </div> <br>
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
    <div class="title">
      <a href="" target="_blank">
        <h2 class="h2">02 01 Ten Piedad<img src="../../assets/youtube.png" alt="youtube" class="img"></h2>
      </a>
      <!-- ++++++++++++++++++++++++++++++ -->
      <h4><i>Indiscutiblemente grande es el misterio de la piedad 1Tim 3,16</i></h4> <br>
      <pre>{{ nc[0].value }}m {{ nc[5].value }}m     {{ nc[10].value }}m  {{ nc[3].value }}     {{ nc[8].value }}</pre>
      <p>Señor ten piedad, Señor ten piedad</p>
      <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[5].value }}m       {{ nc[7].value }}              {{ nc[0].value }}m</pre>
      <p>Señor ten piedad, ten piedad, ten piedad [2]</p><br>
      <hr>
      <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[0].value }}m  {{ nc[5].value }}m                  {{ nc[10].value }}</pre>
      <p>Cristo ten piedad, ten piedad, ten piedad</p>
      <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>   {{ nc[3].value }}                 {{ nc[8].value }}</pre>
      <p>Cristo ten piedad, Señor ten piedad</p> <br>
      <hr>
      <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[0].value }}m {{ nc[5].value }}m     {{ nc[10].value }}m  {{ nc[3].value }}     {{ nc[8].value }}</pre>
      <p>Señor ten piedad, Señor ten piedad</p>
      <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[5].value }}m       {{ nc[7].value }}              {{ nc[0].value }}m</pre>
      <p>Señor ten piedad, ten piedad, ten piedad [2]</p><br>
      <hr>
      <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->

    </div>
  </div>
</template>
<!-- ************************************* -->
<script setup>
import { useTonos } from '../../composable/useTonos.js';

const { nc, select, selectedTono } = useTonos();
</script>

<!-- ************************************* -->
<style scoped></style>
