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
        datasets: [{
          label: 'Line Sample 1',
          backgroundColor: '#f87979',
          data: [14, 19, 16, 17, 12, 15, 10],
          lineTension: 0,
          fill: false
        }, {
          label: 'Line Sample 2',
          backgroundColor: '#fcba03',
          data: [4, 6, 5, 9, 7, 3, 6],
          lineTension: 0,
          fill: false
        }]
      };
      this.options = {
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: "x"
            },
            zoom: {
              enabled: true,
              mode: "x"
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