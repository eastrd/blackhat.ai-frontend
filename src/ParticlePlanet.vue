<template>
    <div id="app">
      <div id="circle">
          <vue-particles
          color="#cffcf8"
          :particleOpacity="1"
          :particlesNumber="1200"
          shapeType="circle"
          :particleSize="1.5"
          linesColor="#54eadb"
          :linesWidth="1.5"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="90"
          :moveSpeed="2"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          >
        </vue-particles>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ParticlePlanet'
}

</script>

<style>
#Circle {
  color: white;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  overflow: hidden;
  /* border: 1px solid black; */
}

#app {
  display: flex;
  justify-content: center;
}
</style>
