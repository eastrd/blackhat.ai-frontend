<template>
  <div class="center-block">
    <at-input
      size="large"
      icon="search"
      :autofocus="true"
      @keyup.enter.native="submit_search"
      v-model="search_query"
    >
    </at-input>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchBar',

  data () {
    return {
      search_query: '',
      json_data: ''
    }
  },

  methods: {
    submit_search () {
      axios.post("http://35.184.35.37/api/search", {
        query: this.search_query
      })
      .then((response)=>{
        let data = response.data

        console.log(data.map(each => {
            return each["IP"] + " : " + each["CMD"]
        }).join("\n"))

      })
      .catch(e => {
        console.log(e)
      })
    }
  }

}
</script>


<style>
.center-block {
  margin: auto;
  display: block;
  width: 500px;
}

input[type="text"], textarea {
  background-color: rgba(255,255,255,0.2);
  color: #7FFF00;
  border: none;
}
</style>
