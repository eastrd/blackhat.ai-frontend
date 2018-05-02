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
      axios.get("http://localhost/api/stats")
      .then((response)=>{
        console.log(response.data)
        this.create_globe('[["TestA",[-37.8136,144.9631,0.1]]]')
      })
      .catch(e => {
        console.log(e)
      })
    },

    create_globe (resp) {
      var container = document.getElementById( 'container' )
      var globe = new DAT.Globe( container )

      var data = JSON.parse(resp)
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
