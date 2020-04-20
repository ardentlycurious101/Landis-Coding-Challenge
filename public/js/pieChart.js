var ctx = document.getElementById('barChart').getContext('2d');

var chart = new Chart(ctx, {
  data = {
    type: 'bar',

    data: {
        datasets: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70]
        }]
    };

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
        'Purple'
    ],
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    };
});
