<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header1">
      <q-toolbar>
        
        <q-btn round>
          <q-avatar size="30px">
            <img src="/icons/phone.png">
          </q-avatar>
        </q-btn>

        <q-toolbar-title>
        </q-toolbar-title>

        <div>
          <q-btn unelevated rounded color="grey-4" text-color="black" no-caps label="Home"/>
          <q-btn flat rounded color="black" no-caps label="Discover"/>
          <q-btn flat rounded color="black" no-caps label="Register"/>
          <q-btn flat round color="black" icon="search" />
        </div>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <Home />
    </q-page-container>
  </q-layout>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Home
  },

  data () {
    return {
    }
  }
}
</script>

<style>
</style>
