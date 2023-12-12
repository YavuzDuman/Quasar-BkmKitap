<template>
  <div style="width: 300px; height: 1300px; margin-left: 150px;">
    <q-p style="font-size: 15px;"><b>Yayınevi</b></q-p>
    <q-input filled v-model="textYayinevi" label="Yayınevi Ara..." />
    <q-scroll-area style="height: 470px;">
      <div v-for="(label, index) in checkboxLabelsYayinevi" :key="index">
        <q-checkbox
          v-model="customModelYayinevi[label]"
          color="secondary"
          :label="label"
        />
      </div>
    </q-scroll-area>

    <q-p style="font-size: 15px;"><b>Yazar </b></q-p>
    <q-input filled v-model="textYazar" label="Yazar Ara..." />
    <q-scroll-area style="height: 470px;">
      <div v-for="(label, index) in checkboxLabelsYazar" :key="index">
        <q-checkbox
          v-model="customModelYazar[label]"
          color="secondary"
          :label="label"
          
        />
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customModelYayinevi: {},
      customModelYazar: {},
      checkboxLabelsYayinevi: ["İş Bankası Kültür Yayınları",
       "Yapı Kredi Yayınları", "Epsilon Yayınevi",
       "Can Yayınları","İthaki Yayınları",
       "Pegasus Yayınları","Kronik Kitap",
      "Artemis Yayınları","Can Çocuk Yayınları",
      "Alfa Yayınları","İletişim Yayınevi",
      "Doğan Kitap","Everest Yayınları","Altın Kitaplar",
      "Ötüken Neşriyat","Metis Yayınları"],
      checkboxLabelsYazar: ["Adalet Ağaoğlu","Ahmet Hamdi Tanpınar",
      "Albert Camus","Aldous Haxley","Andre Gide","Anthony Burgess",
      "Bram Stoker","Canan Karatay","Carlo Corlodi","Cemil Meriç",
      "Cengiz Aytmatov","Charles Dickens","Dino Buzzati",
      "Doğan Cüceloğlu","Emile Zola","Franz Kafka",
       ],
      textYayinevi: "",
      textYazar: "",
    };
  },
};
</script>
