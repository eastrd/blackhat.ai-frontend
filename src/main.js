// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import 'at-ui-style'
import AtUI from 'at-ui'

import ParticlePlanet from './ParticlePlanet'
import VueParticles from 'vue-particles'
import VueTyperPlugin from 'vue-typer'

import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import Handbook from '@/components/Handbook'
import IntelPage from '@/components/IntelPage'
import Map from '@/components/Map'
import StatTable from '@/components/StatTable'


Vue.use(AtUI)
Vue.use(Vuex)
Vue.use(VueParticles)
Vue.use(VueTyperPlugin)


Vue.component('Map', Map);
Vue.component('NavBar', NavBar)
Vue.component('StatTable', StatTable)



const NotFound = {
  components: { ParticlePlanet, NavBar},
  template: '<div> <NavBar /> <ParticlePlanet/> <br/> <div style="color:white; text-align:center;"> Page Not Found </div> </div>',
  style: "color: white;"
}


const Search = {
  components: { ParticlePlanet, SearchBar, Handbook },
  template: '<div> <NavBar focus_index="Threat Search" /> <ParticlePlanet/> <br/><br/> <SearchBar/> <br/><br/><br/> <Handbook/> </div>'
}

const About = {
  template: '<div><NavBar focus_index="About" /> <p>About page</p> </div>'
}

const Intel = {
  components: { IntelPage },
  template: '<div><NavBar focus_index="Live Intel" /> <IntelPage /> </div>'
}

const Doc = {
  template: '<div><NavBar focus_index="API Doc" /> <p>Doc page</p> </div>'
}




const routes = {
  '/': Search,
  '/about': About,
  '/intel': Intel,
  '/doc': Doc
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
