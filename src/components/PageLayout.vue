<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-avatar>
          <q-btn to="/" label="AD"/>
        </q-avatar>
        <q-space/>
        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap to="/portfolio" icon="data_object" no-caps label="Portfolio"
               class="q-ml-sm q-px-md"/>
        <q-btn v-if="$q.screen.gt.xs" flat dense no-wrap to="/contact" icon="o_contact_page" no-caps label="Contact"
               class="q-ml-sm q-px-md"/>
        <q-btn v-if="$q.screen.xs" dense flat round icon="menu" @click="toggleRightDrawer"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>


<!--    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered>-->
<!--      <div>-->
<!--        <router-link to="/portfolio" @click="toggleRightDrawer">Portfolio</router-link>-->
<!--      </div>-->
<!--      <div>-->
<!--        <router-link to="/contact" @click="toggleRightDrawer">Contact</router-link>-->
<!--      </div>-->
<!--    </q-drawer>-->

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