import { ref, computed, watch } from 'vue';

export function useTonos() {
  const notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const select = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const selectedTono = ref('C');

  const tonos = Array.from({ length: 12 }, (_, i) => ref(i + 1));

  const tonoAMapearNota = (tono) => notas[(tono.value - 1) % 12];

  const nc = tonos.map((tono) => computed(() => tonoAMapearNota(tono)));

  const notaAIndice = {
    C: 0,
    D: 2,
    E: 4,
    F: 5,
    G: 7,
    A: 9,
    B: 11,
  };

  watch(selectedTono, (newVal) => {
    const offset = notaAIndice[newVal];
    tonos.forEach((tonoRef, index) => {
      tonoRef.value = index + 1 + offset;
    });
  });

  return {
    nc,
    select,
    selectedTono,
  };
}
