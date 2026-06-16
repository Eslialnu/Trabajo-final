const chart1 = new Chart(document.getElementById('chart1'), {
  type: 'line',
  data: {
    labels: YEARS,
    datasets: PUBLICOS.map(p => ({
      label: p.label,
      data: p.data,
      borderColor: p.color,
      backgroundColor: p.color + '20',
      borderDash: p.dash,
      borderWidth: 2.5,
      pointRadius: 5,
      pointHoverRadius: 7,
      tension: 0.35,
      fill: false,
    }))
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: item => ` ${item.dataset.label}: ${item.raw} proyectos`
        }
      }
    },
    scales: {
      x: {
        ticks: { font: { size: 12 } }
      },
      y: {
        beginAtZero: true,
        max: 12,
        ticks: {
          stepSize: 2,
          font: { size: 11 },
          callback: v => v + ' proy.'
        }
      }
    },
    interaction: { mode: 'index', intersect: false }
  }
});


const chart2 = new Chart(document.getElementById('chart2'), {
  type: 'bar',
  data: {
    labels: PUBLICOS_LABELS,
    datasets: CATS.map(c => ({
      label: c.label,
      data: c.data,
      backgroundColor: c.color + 'CC',
      borderColor: c.color,
      borderWidth: 0,
      borderRadius: 2,
    }))
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      tooltip: {
        callbacks: {
          label: item => ` ${item.dataset.label}: ${item.raw} proyectos`
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: { size: 11 },
          callback: v => v + ' proy.'
        }
      },
      y: {
        stacked: true,
        ticks: { font: { size: 12 } }
      }
    }
  }
});
