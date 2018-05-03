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
  flex-wrap: wrap;
}

#element {
  flex: 0 0 50%;
  padding: 10px;
}

#wrapper #element {
  margin: 0;
  box-sizing: border-box;
}
</style>
