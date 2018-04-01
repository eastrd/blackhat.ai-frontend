<template>
    <vue-typer :repeat=0 :text="msg" :type-delay=130>
    </vue-typer>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Test Message'
    }
  }
}
</script>


<style>
.vue-typer {
  display: flex;
  justify-content: center;
  font-size: 30px;
}

.vue-typer .custom.char {
  color: white;
}

.vue-typer .custom.caret {
  width: 8px;
  background-color: #54eadb;
}

</style>
