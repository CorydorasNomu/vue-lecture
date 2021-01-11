import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,

  props: [
    'data', 'options'
  ],

  mounted() {
    // render chart
    this.renderChart(this.data, this.options)
  }
}