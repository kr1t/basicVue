import Vue from 'vue'
import Container from './Container'


// Components that are registered globaly.
[Container].forEach(Component => {
  Vue.component(Component.name, Component)
})
