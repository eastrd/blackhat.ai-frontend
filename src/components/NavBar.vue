<template>
  <at-menu id="navBar" mode="horizontal" v-bind:active-name="focus_index" @on-select="handle_nav">
    <at-menu-item v-for="item in items" :key="item.name" v-bind:name="item.name">
      <i :key="item.name" v-bind:class="item.icon_name" />
      {{item.name}}
    </at-menu-item>
  </at-menu>
</template>

<script>
export default {
  name: 'NavBar',
  props: ["focus_index"],
  data () {
    return {
      items: [
        { name: "Threat Search", icon_name: "icon icon-search", link: "search"},
        { name: "Live Intel", icon_name: "icon icon-activity", link: "intel"},
        { name: "API Doc", icon_name: "icon icon-layers", link: "doc"},
        { name: "About", icon_name: "icon icon-info", link: "about"}
        ]
      }
    },
  methods: {
    handle_nav (name) {
      switch (name){
        case "Threat Search":
          window.location = "/"
          break
        case "Live Intel":
          window.location = "/intel"
          break
        case "API Doc":
          window.location = "/doc"
          break
        case "About":
          window.location = "/about"
          break
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
