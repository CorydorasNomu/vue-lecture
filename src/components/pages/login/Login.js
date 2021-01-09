import axios from 'axios';

export default {
  name: 'Login',

  data () {
    return {
      userCode: '',
      userName: '',
      bossMail: '',
      bossName: '',
      prise: 0, // test for hitting API
    }
  },

  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.prise = response))
  }
}