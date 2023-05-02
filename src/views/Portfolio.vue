<template>
  <page-title>
    Portfolio
    <template #description>
      For each websites that I built from the ground up. For each one I was also involved in UX, design and deployment.
    </template>
  </page-title>
  <div class="q-pa-md">
    <div class="q-col-gutter-lg row justify-center items-start">
      <div class="col-12 col-md-10 text-left">
        <q-checkbox v-model="showTechnicalView" label="Show Code Stack"/>
      </div>
      <div class="col-12 col-sm-6 col-md-5" v-for="project in projects" :key="project.id">
<!--        <div class="q-pt-lg q-pb-md">{{project.text}}</div>-->
        <q-img :src="project.image"
               no-spinner
               type="a"
               @click="openURL(project.link)"
               target="_blank"
               cursor-pointer
               :to="project.link"
               class="rounded-borders full-height shadow-5 portfolio-image cursor-pointer"
               :ratio="4/3"
               @mouseenter="showInfo = project.id"
               @mouseleave="showInfo = 0"
        >
          <div v-show="showInfo === project.id" class="absolute-full text-subtitle1 flex flex-center">
            <span class="project-description q-pa-sm rounded-borders">{{project.text}}</span>
          </div>
          <div v-if="showTechnicalView" class="absolute-bottom text-subtitle2">
            <q-table
                hide-header
                hide-bottom
                :rows="generateRows(project)"
                :columns="columns"
                row-key="name"
                flat
                dense
                class="skills-table"
            />
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";
import {openURL} from "quasar";
import PageTitle from "../components/PageTitle.vue";

interface Project {
  id: number;
  image: string;
  link: string;
  text: string;
  front?: string;
  back?: string;
  other?: string;
}

interface Column {
  name: string;
  required?: boolean;
  label?: string;
  align?: string;
  field: string | ((row: any) => string);
  format?: (val: string) => string;
}

interface Row {
  name: string;
  languages?: string;
}

const columns: Column[] = [
  {
    name: 'name',
    required: true,
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
  },
  {name: 'languages', align: 'left', field: 'languages'},
];

// Create a computed property to generate rows based on the projects.
function generateRows(project: Project): Row[] {
  const rows: Row[] = [];
  if (project.front) {
    const row: Row = {
      name: 'Front-End',
      languages: project.front,
    };
    rows.push(row);
  }
  if (project.back) {
    const row: Row = {
      name: 'Back-End',
      languages: project.back,
    };
    rows.push(row);
  }
  if (project.other) {
    const row: Row = {
      name: 'Other',
      languages: project.other,
    };
    rows.push(row);
  }
  return rows;
}
const showInfo = ref(0);
const showTechnicalView = ref(false);
const projects: Ref<Project[]> = ref([
  {
    id: 1,
    image: "images/portfolio/central.png",
    link: "https://central.isotronic.io",
    text: "SaaS Platform for QC Software in the Parma Industry",
    front: "Vue 3 | Javascript | Bootstrap",
    back: "Golang | GORM",
    other: "gRPC | Docker | Nomad | Postgres | RabbitMQ"
  },
  {
    id: 2,
    image: "images/portfolio/vial.png",
    link: "https://isotronic.de",
    text: "Isotronic GmbH's Website",
    front: "Vue 2 | Javascript | Bootstrap",
    back: "Node.js",
    other: "Docker"
  },
  {
    id: 3,
    image: "images/portfolio/isotronic.png",
    link: "https://github.com/alexdohm/portfolio",
    text: "My Portfolio [ The site you are currently on ]",
    front: "Vue 3 | Typescript | Quasar | Pinia | Vite",
  },
  {
    id: 4,
    image: "images/portfolio/nadah.png",
    link: "https://nadahelshazly.com/about",
    text: "Nadah El Shazly's Personal Website",
    front: "Vue 3 | Javascript | Bootstrap",
  },
]);
</script>

<style lang="sass" scoped>
.skills-table
  opacity: 0.75

.portfolio-image
  border: 1px solid darkgrey

.q-img__content
  > div
    background: rgba(0, 0, 0, 0.8)!important

</style>
