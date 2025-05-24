<template>
  <v-app>
    <v-app-bar app color="teal-darken-4" scroll-target="#scrolling-container">

      <!-- botón de menú lateral -->
      <v-btn icon @click="toggleDrawer"><img src="./assets/ESCUDOCARM.png" alt="" class="img"></v-btn>
      <v-app-bar-title>CARMELITAS </v-app-bar-title>
      <!-- botones de enlace a páginas +++++++++++++++++++++++-->
      <v-app-bar-nav-icon>
        <v-btn to="/">
          <img src="./assets/CERVERA.png" alt="CERVERA" class="img">
        </v-btn>
      </v-app-bar-nav-icon>
      <!-- ++++++++++++++++++++++++++++++ -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-arrange-bring-to-front" to=""></v-btn>
        <a href="https://translate.google.com.pe/?sl=es&tl=en&op=translate" class="text-white"
          target="_blank">Traductor</a>

      </v-app-bar-nav-icon>

    </v-app-bar>
    <!-- /////////////////////////////////////// -->
    <v-navigation-drawer v-model="drawer" color="teal-darken-4">
      <v-list-item link to="/indexEntrada" title=" ENTRADA" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/indexPenitencial" title=" PENITENCIAL" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/" title=" GLORIA" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/" title=" ALELUYA" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/" title=" OFERTORIO" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/" title=" SANTO" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/" title=" CORDERO" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/" title=" COMUNIÓN" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/" title=" ENVÍO" class="ml-12" @click="handle"></v-list-item>
      <v-list-item link to="/" title=" " class="ml-12" @click="handle"></v-list-item>

      <!-- sección de acordes -->
      <h2 class="ma-2 ml-12 text-white">Acordes</h2>
      <ol>
        <li>
          <select name="" id="" class="select">
            <option value="">Acordes Mayores </option>
            <option> C => C - E - G </option>
            <option class="text-red"> C# = Db → C# - F - G# </option>
            <option> D => D - F# - A </option>
            <option class="text-red"> D# = Eb => D# - G - A# </option>
            <option> E => E - G# - B </option>
            <option class="text-red"> F => F - A - C </option>
            <option> F# = Gb => F# - A# - C# </option>
            <option class="text-red"> G => G - B - D </option>
            <option> G# = Ab => G# - B - D# </option>
            <option class="text-red"> A => A - C# - E </option>
            <option> A# = Bb => A# - C - E# </option>
            <option class="text-red"> B => B - D# - F#]; </option>
            <option> C => C - E - G </option>
          </select>
        </li>
        <!-- ++++++++++++++++++++++++++++++ -->
        <li>
          <select name="" id="" class="select">
            <option value="">Acordes Menores</option>
            <option value=" Cm → C - Eb - G " class="text-red"> Cm → C - Eb - G </option>
            <option value=" C#m / Dbm → C# - E - G# "> C#m / Dbm → C# - E - G# </option>
            <option value=" Dm → D - F - A " class="text-red"> Dm → D - F - A </option>
            <option value=" D#m / Ebm → D# - F# - A# "> D#m / Ebm → D# - F# - A# </option>
            <option value=" Em → E - G - B " class="text-red"> Em → E - G - B </option>
            <option value=" Fm → F - Ab - C "> Fm → F - Ab - C </option>
            <option value=" F#m / Gbm → F# - A - C# " class="text-red"> F#m / Gbm → F# - A - C# </option>
            <option value=" Gm → G - Bb - D "> Gm → G - Bb - D </option>
            <option value=" G#m / Abm → G# - B - D# " class="text-red"> G#m / Abm → G# - B - D# </option>
            <option value=" Am → A - C - E "> Am → A - C - E </option>
            <option value=" A#m / Bbm → A# - C# - F " class="text-red"> A#m / Bbm → A# - C# - F </option>
            <option value=" Bm → B - D - F# "> Bm → B - D - F# </option>
          </select>
        </li>
        <!-- ++++++++++++++++++++++++++++++ -->
        <li>
          <select name="" id="" class="select">
            <option value="">Acordes Séptimos </option>
            <option value="">DOMINANTES</option>
            <option value=" C7 → C - E - G - Bb " class="text-red"> C7 → C - E - G - Bb </option>
            <option value=" C#7 / Db7 → C# - F - G# - B "> C#7 / Db7 → C# - F - G# - B </option>
            <option value=" D7 → D - F# - A - C " class="text-red"> D7 → D - F# - A - C </option>
            <option value=" D#7 / Eb7 → D# - G - A# - C# "> D#7 / Eb7 → D# - G - A# - C# </option>
            <option value=" E7 → E - G# - B - D " class="text-red"> E7 → E - G# - B - D </option>
            <option value=" F7 → F - A - C - Eb "> F7 → F - A - C - Eb </option>
            <option value=" F#7 / Gb7 → F# - A# - C# - E " class="text-red"> F#7 / Gb7 → F# - A# - C# - E </option>
            <option value=" G7 → G - B - D - F "> G7 → G - B - D - F </option>
            <option value=" G#7 / Ab7 → G# - C - D# - F# " class="text-red"> G#7 / Ab7 → G# - C - D# - F# </option>
            <option value=" A7 → A - C# - E - G "> A7 → A - C# - E - G </option>
            <option value=" A#7 / Bb7 → A# - D - F - G# " class="text-red"> A#7 / Bb7 → A# - D - F - G# </option>
            <option value=" B7 → B - D# - F# - A "> B7 → B - D# - F# - A </option>
            <option value="">MENORES</option>
            <option value=" Cm7 → C - Eb - G - Bb " class="text-red"> Cm7 → C - Eb - G - Bb </option>
            <option value=" C#m7 / Dbm7 → C# - E - G# - B "> C#m7 / Dbm7 → C# - E - G# - B </option>
            <option value=" Dm7 → D - F - A - C " class="text-red"> Dm7 → D - F - A - C </option>
            <option value=" D#m7 / Ebm7 → D# - F# - A# - C# "> D#m7 / Ebm7 → D# - F# - A# - C# </option>
            <option value=" Em7 → E - G - B - D " class="text-red"> Em7 → E - G - B - D </option>
            <option value=" Fm7 → F - Ab - C - Eb "> Fm7 → F - Ab - C - Eb </option>
            <option value=" F#m7 / Gbm7 → F# - A - C# - E " class="text-red"> F#m7 / Gbm7 → F# - A - C# - E </option>
            <option value=" Gm7 → G - Bb - D - F "> Gm7 → G - Bb - D - F </option>
            <option value=" G#m7 / Abm7 → G# - B - D# - F# " class="text-red"> G#m7 / Abm7 → G# - B - D# - F#
            </option>
            <option value=" Am7 → A - C - E - G "> Am7 → A - C - E - G </option>
            <option value=" A#m7 / Bbm7 → A# - C# - F - G# " class="text-red"> A#m7 / Bbm7 → A# - C# - F - G#
            </option>
            <option value=" Bm7 → B - D - F# - A "> Bm7 → B - D - F# - A </option>
          </select>
        </li>
        <!-- ++++++++++++++++++++++++++++++ -->
      </ol>
    </v-navigation-drawer>
    <v-main>
      <div id="scrolling-container">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';


// navigation-drawer
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;

}
const handle = () => {
  drawer.value = false;
};

</script>
<!-- ************************************* -->
<style scoped></style>

//vue3 profesional
// https://www.youtube.com/watch?v=Ln1SN43jtG8&list=PLDllzmccetSNgykILXnHMeuO-y-gRcF-i&index=4
