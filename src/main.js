console.log("El script main.js se está ejecutando.");


import Chart from "chart.js/auto";
import { db, ref, onValue } from "./firebase";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("scoreChart");
  if (!canvas) {
    console.error("No se encontró el canvas con ID scoreChart.");
    return;
  }

  const ctx = canvas.getContext("2d");

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

  const scoresRef = ref(db, "scores");

  onValue(scoresRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    const names = [];
    const scores = [];

    for (const key in data) {
      const player = data[key];
      names.push(player.name || key);
      scores.push(player.score || 0);
    }

    chart.data.labels = names;
    chart.data.datasets[0].data = scores;
    chart.update();
  });
});
