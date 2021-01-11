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

  methods: {
    register: function () {
      // TODO write actions here when register button has been hit
      this.$router.push('/register');
    }
  },

  mounted () {
    // TODO hit API if you need several data before displaying screen
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.prise = response))
  }
}