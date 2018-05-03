<script>
import axios from 'axios'
import DAT from "../assets/globe.js"
import * as THREE from "../assets/three.min.js"

export default {
  name: 'Map',

  data () {
    return {
      count_data: ''
    }
  },

  methods: {
    fetch_count_data(){
      axios.get("http://35.184.35.37/api/stats")
      .then((response)=>{
        this.count_data = response.data
      })
      .catch(e => {
        console.log(e)
      })
    },

    get_count(ip){
      for (var i = 0; i < this.count_data.length; i++) {
        if (this.count_data[i]["ip"] == ip) {
          return this.count_data[i]["count"]
        }
      }
      return 0
    },

    map_count_to_magn(num){
      if (num > 5000) {
        return 0.8
      }
      if (num > 1000) {
        return 0.6
      }
      if (num > 100) {
        return 0.4
      }
      if (num > 10) {
        return 0.2
      }
      return 0.1
    },

    fetch_n_show () {
      axios.get("http://35.184.35.37/api/geoip/stats")
      .then((response)=>{
        var data = response.data
        var locations = []
        for (var i = 0; i < data.length; i++) {
          locations.push(
            data[i]["lat"],
            data[i]["lon"],
            this.map_count_to_magn(this.get_count(data[i]["ip"]))
          )
        }
        this.create_globe([["geoip", locations]])
      })
      .catch(e => {
        console.log(e)
      })
    },

    create_globe (data) {
      console.log(data)
      var container = document.getElementById( 'container' )
      var globe = new DAT.Globe( container )

      for (var i = 0; i<data.length; i++) {
          globe.addData( data[i][1], {format: 'magnitude', name: data[i][0]} )
      }

      globe.createPoints()
      globe.animate()
    }
  },

  mounted(){
    this.fetch_n_show()
  },

  created(){
    this.fetch_count_data()
  },

  template: '<div id="container"></div>'

}
</script>


<style>

</style>
<!-- "http://www.geoplugin.net/json.gp?ip=" + ip + "&jsoncallback=draw_loc" -->
