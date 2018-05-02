<template>
  <div class="center-handbook">
    <at-button type="info" size="large" icon="icon-book" hollow @click="pop_up_handbook" >Instructions</at-button>
  </div>
</template>

<script>
export default {
  name: 'Handbook',
  methods: {
      pop_up_handbook () {
        this.$Modal.info({
          title: 'Search Query Syntax',
          content: 'IP = 192.168.0.1 - 199.100.0.1 & URL has ".php"',
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
</style>
