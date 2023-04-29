<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar>
          <router-link to="/" class="a-custom-link">AD</router-link>
        </q-avatar>
        <q-space/>
        <router-link to="/portfolio" class="a-custom-link">
          <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap icon="data_object" no-caps label="Portfolio"
                 class="q-ml-sm q-px-md"/>
        </router-link>
        <router-link to="/contact" class="a-custom-link">
          <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap icon="o_contact_page" no-caps label="Contact"
                 class="q-ml-sm q-px-md"/>
        </router-link>
        <q-btn v-if="$q.screen.xs" dense flat round icon="menu" @click="toggleRightDrawer"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay show-if-above elevated>
      <div>
        <router-link to="/portfolio" @click="toggleRightDrawer">Portfolio</router-link>
      </div>
      <div>
        <router-link to="/contact" @click="toggleRightDrawer">Contact</router-link>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const rightDrawerOpen = ref(false)
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<style scoped>

</style>