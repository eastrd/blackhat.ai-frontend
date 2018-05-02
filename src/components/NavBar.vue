<template>
  <at-menu id="navBar" mode="horizontal" :active-name="focus_index">
    <at-menu-item v-for="tab in tabs" :key="tab.name" v-bind:name="tab.name">
      <i :key="tab.name" v-bind:class="tab.icon_name" />
      {{tab.name}}
    </at-menu-item>
  </at-menu>
</template>

<script>
export default {
  name: 'NavBar',
  props: ["focus_index"],
  data () {
    return {
      tabs: [
        { name: "Threat Search",   icon_name: "icon icon-search"},
        { name: "Live Intel",   icon_name: "icon icon-activity"},
        { name: "API Doc", icon_name: "icon icon-layers"},
        { name: "About", icon_name: "icon icon-info"}
        ]
      }
    },
  methods: {
    show_tab_info (obj) {
      /*
        As NavBar will default trigger an on-change event on the first tab,
        initialize a Variable to ignore that one.
      */
      let _init_trigger = true
      var index = obj["index"]
      var name = obj["name"]

      switch (index){
        case 0:
          console.log("Search")
          if (!_init_trigger){
            window.location = "/"
          }
          else {
            _init_trigger = false
          }
          break;

        case 1:
          console.log("Live Intel")
          window.location = "/intel"
          break;

        case 2:
          console.log("API Doc")
          window.location = "/doc"
          break;

        case 3:
          console.log("About")
          window.location = "/about"
          break;
      }
    }
  }
}
</script>


<style>
#navBar {
  background-color: black;
}

.at-menu__item-link{
  color: #7FFF00;
}
</style>
