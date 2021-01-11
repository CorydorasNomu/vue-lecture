import barChart from '../../chart/bar-chart.js';

export default {
  name: 'Manage',

  data() {
    return {
      chartData: null,
      chartOptions: null,
      chartHight: 150,
    }
  },

  components: {
    'bar-chart': barChart,
  },

  created() {
    // prepare data for chart
    this.chartData = {
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
      ],
      datasets: [{
        label: '勤務時間',
        backgroundColor: 'rgba(230, 200, 255, 0.9)',
        data: [
          8.5, 9, 7.5, 9.5, 8.25, 10, 8, 8.25, 3.75, 9, 9.25, 7.5, 10.25, 8, 7.5,
          7.5, 9.5, 8.75, 9.5, 9, 7.5, 10.5, 9.25, 8.5, 9.25, 8.5, 9.25, 10, 7.5, 9, 9.25
        ],
        borderWidth: 1
      }]
    };

    // prepare data for option
    this.chartOptions = {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Days'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          }
        }]
      }
    };

  }
}