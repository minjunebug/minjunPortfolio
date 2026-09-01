let leadCostChartInstance = null;

function renderLeadCostChart(lang) {
    const ctx = document.getElementById('leadCostChart');
    if (!ctx || !translations[lang]) return;

    const labels = translations[lang].chartMonths;
    const datasetLabel = translations[lang].chartDatasetLabel;

    // 기존 차트가 있으면 파괴하고 새로 그림 (중복 렌더링 방지)
    if (leadCostChartInstance) {
        leadCostChartInstance.destroy();
    }

    leadCostChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: datasetLabel,
                data: [59997, 71364, 113951, 121389, 54380, 55271, 27114, 35419, 60322, 57168],
                borderColor: '#1A1A1A',
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#1A1A1A',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#999', font: { size: 11 } }
                },
                y: {
                    grid: { color: '#E5E5E5' },
                    ticks: {
                        color: '#999',
                        font: { size: 11 },
                        callback: (value) => value.toLocaleString()
                    }
                }
            }
        }
    });
}
