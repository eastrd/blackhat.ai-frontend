<template>
  <at-tabs id="navBar">
    <at-tab-pane v-for="tab in tabs" v-bind:label=tab.name v-bind:name=tab.name v-bind:icon=tab.icon_name>
      <p>  </p>
    </at-tab-pane>
  </at-tabs>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      tabs: [
        { name: "News Info",   icon_name: "icon-info"  },
        { name: "Intel Search",   icon_name: "icon-search" },
        { name: "Live Stats", icon_name: "icon-activity"  }
      ]
    }
  }
}
</script>


<style>
#navBar {
  background-color: black;
}
</style>
