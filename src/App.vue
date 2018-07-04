<template>
    <div id="app">
        <navbar></navbar>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import router from './router'
import navbar from './components/navbar.vue'

export default {
  name: 'app',
  router: router,
  components: {
    navbar
  },
  methods: {
    catchId (id) {
      alert(id)
    }
  }
}
</script>
