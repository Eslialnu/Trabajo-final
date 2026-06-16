const YEARS = ['2022', '2023', '2024', '2025'];

const PUBLICOS = [
  { label: 'Infancia / Niñez',              color: '#1D9E75', data: [2, 5, 9, 9],  dash: []          },
  { label: 'Mujeres',                        color: '#D4537E', data: [3, 5, 9, 7],  dash: [6, 3]      },
  { label: 'Comunidades / Territorios',      color: '#7F77DD', data: [1, 4, 8, 9],  dash: [3, 3]      },
  { label: 'Adultos Mayores',                color: '#BA7517', data: [0, 4, 2, 7],  dash: [8, 3, 2, 3]},
  { label: 'Salud Mental',                   color: '#378ADD', data: [1, 3, 7, 3],  dash: [4, 2]      },
  { label: 'Adolescencia',                   color: '#D85A30', data: [0, 3, 7, 3],  dash: [2, 2]      },
  { label: 'Discapacidad / Neurodiversidad', color: '#639922', data: [0, 1, 4, 6],  dash: [6, 2, 2, 2]},
  { label: 'Disidencias / LGBTQ+',           color: '#E24B4A', data: [1, 1, 4, 2],  dash: [5, 2, 1, 2]},
  { label: 'Cuidadores / as',                color: '#888780', data: [0, 0, 0, 3],  dash: [3, 1]      },
];
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
const PUBLICOS_LABELS = [
  'Infancia / Niñez',
  'Adolescencia',
  'Adultos Mayores',
  'Mujeres',
  'Disidencias / LGBTQ+',
  'Comunidades / Territorios',
  'Discapacidad / Neurodiversidad',
  'Salud Mental',
  'Cuidadores / as',
];

const CATS = [
  { label: 'Salud y Bienestar',        color: '#1D9E75', data: [2, 4, 1, 0, 0, 2, 0, 9, 2] },
  { label: 'Género y Equidad',          color: '#D4537E', data: [1, 1, 0,10, 0, 0, 0, 0, 1] },
  { label: 'Aprendizaje / Didáctica',   color: '#7F77DD', data: [4, 0, 0, 0, 0, 0, 0, 0, 0] },
  { label: 'Inclusivo / Neurodiv.',     color: '#639922', data: [3, 0, 1, 1, 0, 0, 7, 0, 0] },
  { label: 'Activismo',                 color: '#E24B4A', data: [0, 0, 0, 3, 4, 3, 0, 0, 0] },
  { label: 'Territorio / Ciudadanía',   color: '#BA7517', data: [0, 0, 2, 0, 0, 2, 0, 0, 0] },
  { label: 'Cultura Popular',           color: '#D85A30', data: [0, 1, 0, 0, 0, 4, 0, 0, 0] },
  { label: 'Especulativo / Tech',       color: '#378ADD', data: [0, 0, 0, 0, 0, 2, 0, 0, 0] },
  { label: 'Editorial / Ilustración',   color: '#888780', data: [1, 1, 0, 0, 0, 0, 0, 0, 0] },
  { label: 'Divulg. Científica',        color: '#5DCAA5', data: [2, 0, 0, 0, 0, 0, 0, 0, 0] },
  { label: 'Tipografía',                color: '#EF9F27', data: [0, 0, 0, 0, 0, 1, 0, 0, 0] },
  { label: 'Com. Estratégica',          color: '#533AB7', data: [1, 0, 0, 0, 0, 1, 0, 0, 0] },
];

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
