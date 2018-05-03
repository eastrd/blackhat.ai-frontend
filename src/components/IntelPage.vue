<template>
  <div id="wrapper">
    <div id="element">
      <StatTable/>
    </div>
    <div id="element">
      <Map/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IntelPage'
}

</script>


<style>
#wrapper {
  display: flex;
  flex: 0 0 50%;
  /* flex-wrap: wrap; */
}

#element {
  flex: 0 0 50%;
}

#wrapper #element {
  margin: 0;
}
</style>
