
export default {
  data () {
    return {
      footerMainSiteName: 'openrouteservice',
      footerLink: 'https://www.instagram.com/techlabs.cph/?hl=es'
    }
  },
  computed: {
    currentYear () {
      return (new Date()).getFullYear()
    }
  }
}
