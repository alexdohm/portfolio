<template>
  <div class="row justify-center q-col-gutter-x-md">
    <div class="col-8 col-sm-5 col-md-3 col-xl-2 q-mb-md q-mb-md-none">
      <q-img
          no-spinner
          :src="imageSrc"
      />
    </div>
    <div class="col-12 col-md-6 col-lg-4 col-xl-3 text-left q-gutter-lg q-mb-md q-mb-md-none">
      <div>
        Hi, I'm Alex, a Full Stack developer from the USA living in Berlin. I have over 5 years of experience designing,
        building and deploying websites and databases. I have degrees in Computer Science and Mechanical Engineering and
        graduated top in my class at the University of Colorado at Boulder.
      </div>
      <div>
        I can help you with anything website related, whether it is implementing a design, building a server, deploying
        a site or designing a database.
      </div>
      <div>
        Feel free to contact me at the email below and we can discuss your project. I actively support the LGTBQ+ community
        and projects within the art and music community.
      </div>
      <q-btn color="primary" to="/contact" label="Contact" />
      <q-btn color="primary" to="/portfolio" label="View my portfolio" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const imageSrc = ref('images/alex_profile.jpg')
</script>

<style scoped>

</style>