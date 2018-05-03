<template>
  <div>
    <at-table :columns="columns" :data="records" :pagination="true" size="normal" :show-page-total="false" :page-size="15">
    </at-table>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'StatTable',
  data () {
    return {
      columns : [
        {
          title: "Time",
          key: "timestamp"
        },
        {
          title: "Source",
          key: "src"
        },
        {
          title: "Target",
          key: "dest"
        },
        {
          title: "Request",
          render: (h, params) => {
              return h('div', [
                h('AtButton', {
                  props: {
                    size: 'small',
                    hollow: true
                  },
                  style: {
                    color: "white",
                    marginRight: '10px'
                  },
                  on: {
                    click: () => {
                      this.$Notify({
                        title   :   "Data Details",
                        message :   params.item.data,
                        duration:   5000
                      })
                    }
                  }
                }, 'Show')
              ])
            }
        }
      ],
      records : []
    }
  },
  methods: {

    fetch_tunnel_data () {
      axios.get("http://35.184.35.37/api/live/data_intel")
      .then((response)=>{
        var data = response.data
        // Loop through each data, Check duplication, Add into table
        this.format_data(data)
      })
      .catch(e => {
        console.log(e)
      })
    },

    format_data (raw_data) {
      this.records = []
      for (var i=0; i<raw_data.length; i++){
        var data = raw_data[i][3]

        // Check if the data is wireshark encrypted (contains multiple \x)
        if ( data.includes("\\x") ) {
          data = "[ENCRYPTED]"
        }

        this.records.push({
          "timestamp" : new Date(raw_data[i][0]).toLocaleString(),
          "src"   :   raw_data[i][1],
          "dest"  :   raw_data[i][2],
          "data"  :   data
        })
      }
    }
  },
  mounted () {
    this.fetch_tunnel_data()
    this.timer = setInterval(this.fetch_tunnel_data, 30000)
  }
}

</script>


<style>

.at-table__thead .at-table__cell {
  background-color: #222222;
  color: #EEEEEE;
  /* color: #5D8AA8; */
}

.at-table__tbody .at-table__cell {
  color: #7EEE00;
}


tbody > tr > .at-table__cell:first-of-type {
  color: #6190E8;
}

.at-pagination__prev {
  background-color: black;
  color: #6190E8;
}

.at-pagination__next {
  background-color: black;
  color: #6190E8;
}

.at-pagination__item {
  background-color: black;
  color: #6190E8;
}
</style>
