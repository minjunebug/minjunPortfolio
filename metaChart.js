document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('leadCostChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10월', '11월', '12월', '1월', '2월', '3월', '4월', '5월', '6월', '7월'],
            datasets: [{
                label: '유효 리드 단가',
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
});