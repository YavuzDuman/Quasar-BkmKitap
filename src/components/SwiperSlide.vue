<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      arrows

    >
      <q-carousel-slide :name="1" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-BANNER.webp" />
      <q-carousel-slide :name="2" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-HAYYKITAP-BANNER.webp" />
      <q-carousel-slide :name="3" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-PEGASUS-YAYINLARI-BANNER.webp" />
      <q-carousel-slide :name="4" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-ITHAKI-YAYIN-GRUBU-BANNER.webp" />
      <q-carousel-slide :name="5" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-MARTI-YAYINLARI-BANNER.webp" />
      <q-carousel-slide :name="6" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-HAYAT-YAYINLARI-BANNER.webp" />
      <q-carousel-slide :name="7" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-ALFA-YAYIN-GRUBU-BANNER.webp" />
      <q-carousel-slide :name="8" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-NESIL-YAYIN-GRUBU-BANNER.webp" />
      <q-carousel-slide :name="9" img-src="https://cdn.bkmkitap.com/Data/EditorFiles/interactive/YIL-SONU-INDIRIMLERI-KAMPANYASI-DOGAN-YAYIN-GRUBU-BANNER.webp" />
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>

