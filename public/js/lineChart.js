var ctx = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6', 'Client 7'],
      datasets: [{
          label: 'Mortgage Qualification Percentages',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          data: [5, 10, 5, 2, 20, 30, 45],
      }]
  },

  // Configuration options go here
  options: {}
});
