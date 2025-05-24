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
      <v-select :items="select" v-model="selectedTono" label="CAMBIAR TONO" class="nota" />

    </div>
    <br>
    <!-- ++++++++++++++++++++++++++++++ -->
    <div class="title">
      <a href="https://www.youtube.com/watch?v=c5LlRG8Ic_M" target="_blank">
        <h2 class="h2">Vienen con Alegría <img src="../../assets/youtube.png" alt="youtube" class="img"></h2>
      </a>
      <!-- ++++++++++++++++++++++++++++++ -->
      <h4><i>"Estén siempre Alegres en el Señor" Fil 4,4</i></h4> <br>
      <pre>{{ nc[0].value }}</pre>
      <p>Vienen con alegría, Señor,</p>
      <p>Cantando vienen con alegría, Señor,</p>
      <pre>{{ nc[5].value }}               {{ nc[0].value }}</pre>
      <p>Los que caminan por la vida, Señor</p>
      <pre>{{ nc[7].value }}            {{ nc[0].value }}</pre>
      <p>Sembrando tu paz y amor.</p><br>
      <hr>
      <pre>{{ nc[0].value }}            {{ nc[7].value }}</pre>
      <p>Vienen trayendo la esperanza</p>
      <pre>             {{ nc[0].value }}</pre>
      <p>A un mundo cargado de ansiedad,</p>
      <pre>            {{ nc[7].value }}</pre>
      <p>Un mundo que busca y que no alcanza</p>
      <pre>         {{ nc[0].value }}</pre>
      <p>Caminos de amor y de amistad.</p>
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
