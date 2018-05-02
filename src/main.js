// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'at-ui-style'
import AtUI from 'at-ui'

import ParticlePlanet from './ParticlePlanet'
import VueParticles from 'vue-particles'

import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Handbook from '@/components/Handbook'


Vue.use(AtUI)
Vue.use(VueParticles)



const NotFound = {
  components: { ParticlePlanet, NavBar},
  template: '<div> <NavBar /> <ParticlePlanet/> <br/> <div style="color:white; text-align:center;"> Page Not Found </div> </div>',
  style: "color: white;"
}

const Search = {
  components: { ParticlePlanet, NavBar, SearchBar, Handbook },
  template: '<div> <NavBar focus_index="0" /> <ParticlePlanet/> <br/><br/> <SearchBar/> <br/><br/><br/> <Handbook/> </div>'
}

const About = {
  components: { NavBar },
  template: '<div><NavBar focus_index="3" /> <p>about page</p> </div>'
}

const routes = {
  '/': Search,
  '/about': About
}




new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
