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
      rawHTML : `ip=192.168.0.1
      ip=192.168.0.*
      ip=192.168.*.*
      cmd={your_regex_expr}`
    }
  },
  methods: {
      pop_up_handbook () {
        this.$Modal.info({
          title: 'Search Engine Syntax',
          content: 'ip=192.168.0.1\nip=192.168.0.*\nip=192.168.*.*\ncmd={your_regex_expr}',
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
