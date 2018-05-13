<template>
  <div class="center-handbook">
    <at-button type="info" size="large" icon="icon-book" hollow @click="pop_up_handbook" >Instructions</at-button>
  </div>
</template>

<script>
export default {
  name: 'Handbook',
  data () {
    return {
      instructions :
`This search engine provides a 2-way binding lookup between IPs and Commands.
It allows you to do fuzzy searches and conditional partial searches.

Sample Usage:
    IP="192.168.0.1" and CMD="wget",
    IP="192.168.*.*",
    IP="{your_own_regex_expr}" or CMD="wget http:.*"
`
    }
  },
  methods: {
      pop_up_handbook () {
        this.$Modal.info({
          title: 'Search Engine Syntax',
          content: this.instructions,
          showFooter: false,
          showClose: true,
          closeOnPressEsc: true,
          maskClosable: true,
          width: 700
        })
      }
    }
}
</script>


<style>
.center-handbook {
  margin: auto;
  display: block;
  width: 150px;
}

p {
  white-space: pre;
}
</style>
