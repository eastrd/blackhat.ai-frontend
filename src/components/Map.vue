<template>
  <div id="container">

  </div>
</template>

<script>


import axios from 'axios'
import DAT from "../assets/globe.js"
import * as THREE from "../assets/three.min.js"

export default {
  name: 'Map',

  data () {
    return {

      }
    },

  methods: {
    fetch_n_show () {
      axios.get("http://35.184.35.37/api/geoip/stats")
      .then((response)=>{
        var data = response.data
        var locations = []
        for (var i = 0; i < data.length; i++) {
          locations.push(
            data[i]["lat"],
            data[i]["lon"],
            0.05
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
  }

}
</script>


<style>

</style>
<!-- "http://www.geoplugin.net/json.gp?ip=" + ip + "&jsoncallback=draw_loc" -->
