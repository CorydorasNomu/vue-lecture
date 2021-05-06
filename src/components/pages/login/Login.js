//import processChart from '../../control/chart/Chart'
import processChart from '@/components/control/chart/Chart'

export default {
  name: 'Login',

  data() {
    return {
      // TODO define variables binded with html
      datacollection: null,
      options: null
    }
  },

  components: {
    'process-chart': processChart
  },

  methods: {
    // TODO define function here
    updateChartData: function () {
      this.datacollection = {
        labels: ['5/1', '5/2', '5/3', '5/4', '5/5', '5/6', '5/7'],
        datasets: [
          {
            label: 'Line Sample 1',
            borderColor: 'rgba(254,97,132,0.8)',
            backgroundColor: '#f87979',
            data: [14, 19, 16, 17, 12, 15, 10],
            lineTension: 0.3,
            fill: false
          }, {
            label: 'Line Sample 2',
            borderColor: 'rgba(54,164,235,0.8)',
            backgroundColor: '#fcba03',
            data: [4, 6, 5, 9, 7, 3, 6],
            lineTension: 0.3,
            fill: false
          }
        ]
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scaleBeginAtZero: true,
        title: {
          display: true,
          color: 'rgba(54,164,235,0.8)',
          text: 'Custom Chart Title',
          fontSize: 24
        },
        legend: {
          display: true,
          position: 'right',
          labels: { fontSize: 18 }
        },
        scales: {
          yAxes: [{
            ticks: {
              max: 20,
              min: 0,
              stepSize: 2,
              beginAtZero: true
            }
          }]
        },
        plugins: {
          zoom: {
            zoom: {
              enabled: true,
              mode: 'xy'
            }
          }
        }
      };
    }
  },

  created() {
    // TODO prepare properties here
    this.updateChartData();
  }
}