<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
      <q-toolbar class="custom-toolbar">
        
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color= "white"
          
        />
         
      </q-toolbar>
    </q-header> 
  
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Componentler </q-item-label>
        <component-link
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        >
        </component-link>
      </q-list>
    </q-drawer>
    

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'MainLayout',
  components: {
    ComponentLink,
  },
  setup() {
    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      componentLinks,
    };
  },
}

import ComponentLink, {
  ComponentLinkProps,
} from 'components/ComponentLink.vue';

const componentLinks: ComponentLinkProps[] = [
  {
    title: 'Üye Giriş',
    link: '/uyeGiris',
  },
  {
    title: 'Üye Ol',
    link: '/singup',
  },
  {
    title: 'Icon General',
    link: '/icon',
  },
  {
    title: 'Swiper',
    link: '/swiper',
  },
  {
    title: 'Footer',
    link: '/footer',
  },
  {
    title: 'Header',
    link: '/header',
  },
  { 
    title: 'Filtre',
    link: '/filtre',
  },
  {
    title: 'Kargo',
    link: '/kargo',
  },
  {
    title: 'Sepet',
    link: '/sepet',
  },
  {
    title: 'Ürünler',
    link: '/urun',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  console.log(`toggleLeftDrawer çalıştı, leftDrawerOpen: ${leftDrawerOpen.value}`);
  leftDrawerOpen.value = !leftDrawerOpen.value;
}




</script>

<style lang="scss">


 </style>
  
