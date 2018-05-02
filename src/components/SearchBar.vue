<template>
  <div class="center-block">
    <at-input size="large" icon="search" :autofocus="true"></at-input>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      search_query: ''
    }
  }
}
</script>


<style>
.center-block {
  margin: auto;
  display: block;
  width: 500px;
}

input[type="text"], textarea {
  background-color: rgba(255,255,255,0.2);
  color: #7FFF00;
  border: none;
}
</style>
