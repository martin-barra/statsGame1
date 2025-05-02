// src/main.js
import Chart from "chart.js/auto";
import { db, ref, onValue } from "./firebase"; // importamos los métodos de firebase

const ctx = document.getElementById("scoreChart").getContext("2d");
let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [{
      label: "Puntaje",
      data: [],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    }],
  },
  options: {
    responsive: true
  }
});

// Ruta donde se encuentran los datos de puntuación en Firebase
const statsRef = ref(db, "stats");

onValue(statsRef, (snapshot) => {
  const data = snapshot.val();
  const names = Object.keys(data);
  const scores = Object.values(data).map(d => d.score);

  // Actualizamos las etiquetas y los datos del gráfico
  chart.data.labels = names;
  chart.data.datasets[0].data = scores;
  chart.update();
});
