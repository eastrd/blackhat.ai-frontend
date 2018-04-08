// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ParticlePlanet from './ParticlePlanet'
import VueParticles from 'vue-particles'
import Welcome from '@/components/Welcome'
import NavBar from '@/components/NavBar'
import VueTyperPlugin from 'vue-typer'
import 'at-ui-style'
import AtUI from 'at-ui'



Vue.use(VueParticles)
Vue.use(VueTyperPlugin)
Vue.use(AtUI)

new Vue({
  el: '#app',
  components: { ParticlePlanet, Welcome, NavBar },
  template: '<div> <NavBar/> <ParticlePlanet/> <Welcome/> </div>'
})
