<template>
  <div class="container ">
    <select class="select, carm">
      <option class="">ORDEN CARMELITAS SEGLAR</option>
      <option>CHORDA: D</option>
      <option>SONUS: 008</option>
      <option>ACTIO: N+/A & +N/A </option>
    </select>

    <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
    <div class="header2">
      <v-select :items="select" v-model="selectedTono" label="TONOS" class="nota" />
    </div> <br>
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++ -->
    <div class="title">
      <a href="https://www.youtube.com/watch?v=QV9yfUTvKpE" target="_blank">
        <h2 class="h2">Dios Trino <img src="../../assets/youtube.png" alt="youtube" class="img"></h2>
      </a>
      <!-- ++++++++++++++++++++++++++++++ -->
      <h4><i>La Gracia del Señor Jesucristo, el amor del Padre y <br>la comunión del Espíritu Santo <br>este con todos
          ustedes. 2Co 13,13</i></h4> <br>
      <pre>{{ nc[0].value }}{{ nc[0].value }}</pre>
      <p>En nombre del Padre</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[9].value }}m {{ nc[9].value }}m</pre>
      <p>En nombre del Hijo</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[5].value }}{{ nc[5].value }}         {{ nc[7].value }}{{ nc[7].value }}</pre>
      <p>En nombre del Santo Espíritu</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[0].value }}{{ nc[0].value }}     {{ nc[0].value }}7 {{ nc[0].value }}</pre>
      <p>Estamos aquí</p>
      <hr>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[5].value }}      {{ nc[7].value }}      {{ nc[0].value }}</pre>
      <p>Para alabar y agradecer</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre> {{ nc[7].value }}     {{ nc[9].value }}m</pre>
      <p>Bendecir y adorar</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre> {{ nc[5].value }}     {{ nc[7].value }}</pre>
      <p>Estamos aquí</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>{{ nc[0].value }}      {{ nc[0].value }}7 {{ nc[0].value }}</pre>
      <p>A tu disposición</p>
      <hr>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre> {{ nc[5].value }}     {{ nc[7].value }}     {{ nc[0].value }}</pre>
      <p>Para alabar y agradecer</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre> {{ nc[7].value }}    {{ nc[9].value }}m</pre>
      <p>Bendecir y adorar</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre>       {{ nc[5].value }}   {{ nc[7].value }}</pre>
      <p>Estamos aquí Señor</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      <pre> {{ nc[0].value }}      {{ nc[0].value }}7</pre>
      <p>Dios Trino de Amor</p>
      <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
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
