<template>
  <at-tabs id="navBar">
    <at-tab-pane v-for="tab in tabs" v-bind:label=tab.name v-bind:name=tab.name v-bind:icon=tab.icon_name>
      <p> Some Content </p>
    </at-tab-pane>
  </at-tabs>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      tabs: [
        { name: "TabOne",   icon_name: "icon-github"  },
        { name: "TabTwo",   icon_name: "icon-twitter" },
        { name: "TabThree", icon_name: "icon-pocket"  }
      ]
    }
  }
}
</script>


<style>
#navBar {

}
</style>
