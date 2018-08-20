<template>
  <div>
    <div class="horizontal">
      <at-select
        :clearable=true
        size="normal"
        style="width: 120"
        placeholder="Filter By"
        v-model="filter_type"
        v-on:on-change="switch_input_status"
      >
        <at-option value="src">Source</at-option>
        <at-option value="dest">Target</at-option>
      </at-select>

      &nbsp;&nbsp;&nbsp;&nbsp;

      <at-input
        size="small"
        status="info"
        :disabled="input_disabled"
        v-on:change="filter_events"
      >
      </at-input>
    </div>

    <br/><br/>
    <at-table
      :columns="columns"
      :data="filtered_records"
      :pagination="true"
      size="normal"
      :show-page-total="false"
      :page-size="12"
      border
      show-page-total
    >
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
      orig_records: [],
      filtered_records : [],
      input_disabled : true,
      filter_type : "",
      user_input: ""
    }
  },

  methods: {
    filter_events (user_input) {
      this.user_input = user_input

      var category = this.filter_type.length > 0 ? this.filter_type : "src"
      this.filtered_records = this.orig_records.filter( each_record => each_record[category].includes(user_input) )
    },

    switch_input_status (val) {
      if (val == "") {
        // Disable the input field
        this.user_input = ""
        this.input_disabled = true

        // Refresh table
        this.filter_events(this.user_input)
      }
      else {
        // Enable input field
        this.filter_type = val
        this.input_disabled = false
      }
    },

    fetch_tunnel_data () {
      axios.get("http://XXXXXXXXXXXXXXXXX/api/live/data_intel")
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
      this.orig_records = []
      for (var i=0; i<raw_data.length; i++){
        var data = raw_data[i][3]

        // Check if the data is wireshark encrypted (contains multiple \x)
        if ( data.includes("\\x") ) {
          data = "[ENCRYPTED]"
        }

        this.orig_records.push({
          "timestamp" : new Date(raw_data[i][0]).toLocaleString(),
          "src"   :   raw_data[i][1],
          "dest"  :   raw_data[i][2],
          "data"  :   data.split("\\r\\n").map(
            line => {
              return line.length > 50 ? line.slice(0, 50) + "\n" + line.slice(50) : line 
            }
          ).join("\n")
        })
      }
      // Sync the outputting records array with saved user inputs
      this.filter_events(this.user_input)
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

.at-pagination__total {
  color: white;
}

.horizontal {
  display: inline-flex;
}

.at-input--disabled .at-input__original {
  background-color: #111111;
}

.at-select__selection {
  background-color: #222222;
}

.at-select__dropdown .at-select__option {
  background-color: #222222;
  color: white;
}

.at-input__original {
  background-color: #DDDDDD;
}

p.at-notification__message {
  text-align: left;
  max-width: 10em;
  white-space: pre;
}
</style>
