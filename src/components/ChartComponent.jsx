import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const chartContainer = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const chartCanvas = chartContainer.current;

    const data = {
      labels: [
        "Jan 2022",
        "juni2022",
        "Jan 2023",
        "juni2023",
        "Jan 2024",
        "juni2024",
      ],
      datasets: [
        {
          label: "Nilai Siswa",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: "rgba(22, 152, 89,0.2)",
          borderColor: "white",
          borderWidth: 3,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "white", // Ubah warna garis kotak di belakang chart menjadi putih
          },
        },
        x: {
          grid: {
            color: "white", // Ubah warna garis kotak di belakang chart menjadi putih
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    };

    chartInstance = new Chart(chartCanvas, {
      type: "line",
      data: data,
      options: options,
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartContainer} />;
};

export default ChartComponent;
