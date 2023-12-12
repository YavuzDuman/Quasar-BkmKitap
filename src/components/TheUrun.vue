<template>
  <div
    class="divclass"
    style="display: flex;  align-items: center"
  >
    <q-btn-dropdown id="dropdown"
      outline
      label="Varsayılan Sıralama"
      style="text-transform: capitalize"
    >
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Sıralama Seçiniz</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Alfabetik A-Z</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Alfabetik Z-A</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Yeniden Eskiye</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Eskiden Yeniye</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Fiyat Artan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Fiyat Azalan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Rasgele</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Puana Göre</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    
  </div>
  

  <div class="cards-container">
    <q-btn-group flat>
      <q-btn
        v-for="(product, index) in products"
        :key="index"
        style="width: 280px; height: 350px"
        class="my-card"
        @mouseover="showAddToCart(index)"
        @mouseleave="() => hideAddToCart()"
        @click="addToCart(index)"
      >
        <img :src="product.image" />

        <q-card-section>
          <div>
            <p>{{ product.name }}</p>
            <span style="color: #cb6060">{{ product.author }}</span>
          </div>
          <q-btn
            v-show="showAddToCartButton === index"
            @click="addToCart(index)"
            class="custom-button-2"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <p class="button-text">Sepete Ekle</p>
          </q-btn>
        </q-card-section>
      </q-btn>
    </q-btn-group>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';


let buttonHover = ref(false); // Fare üzerinde durma durumu
let showAddToCartButton = ref(-1); // Initial value to hide all buttons

const showAddToCart = (index: number): void => {
  showAddToCartButton.value = index;
};

const hideAddToCart = (): void => {
  showAddToCartButton.value = -1;
};

const addToCart = (index: number): void => {
  // Implement your add to cart logic here
  console.log('Added to cart:', products[index].name);
};
const onItemClick = () => {
  // console.log('Clicked on an Item')
};
const products = reactive([
  {
    name: 'Nobel Ödülü Nasıl Kazanılır?',
    author: 'Barry Marshall',
    image:
      'https://cdn.bkmkitap.com/nobel-odulu-nasil-kazanilir-779900-13236437-77-O.jpg',
  },
  {
    name: 'Bir Aşk Masalı',
    author: 'Ahmet Ümit',
    image:
      'https://cdn.bkmkitap.com/bir-ask-masali-770927-13230233-77-O.jpg',
  },
  {
    name: 'İnsanlığımı Yitirirken',
    author: 'Osamu Dazai',
    image:
      'https://cdn.bkmkitap.com/insanligimi-yitirirken-718068-11691330-71-O.jpg',
  },
  {
    name: 'Azrailin Verdiği Yetki',
    author: 'Cumali Bişkin',
    image:
      'https://cdn.bkmkitap.com/azrailin-verdigi-yetki-13454841-83-O.jpg',
  },
]);
</script>
<style>
#dropdown{
  height: 30px;
}
.cards-container {
  display: flex;
  justify-content: center; /* Card'ları yatayda ortala */
  align-items: center; /* Card'ları dikeyde ortala */
  flex-wrap: wrap; /* Eğer yeterli genişlik yoksa alt satıra geç */
}
.my-card {
  text-transform: capitalize;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}
.divclass {
  width: 1170px;
  height: 80px;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.custom-button-2 {
  margin-top: 10px;
  background-color: white;
  width: 280px;
  height: 50px;
  border: 1px solid #cb6060;
  transition: background-color 0.3s, color 0.3s;
}

.button-text {
  margin-top: 8px;
  color: #cb6060;
}

.custom-button-2:hover {
  background-color: #cb6060;
}

.custom-button-2:hover .button-text {
  color: white;
}
</style>