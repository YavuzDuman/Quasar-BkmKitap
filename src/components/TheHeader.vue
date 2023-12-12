<template>
  <q-layout>
    <q-header elevated >
        <q-bar>
          <img src="https://cdn.bkmkitap.com/Data/EditorFiles/yil-sonu-indirimleri-kampanyasi-top-banner.webp" style="width: 100%; height: 100%;" />
        </q-bar>
      <q-toolbar class="custom-toolbar">

        

        <q-avatar class="icon">
          <img src="https://cdn.bkmkitap.com/Data/EditorFiles/logonew23.png">
        </q-avatar>

        <q-btn class="menu">
          <q-icon name="menu" class="menu-icon" color="red-14"/>
          <q-title class="menu-title" style="color: #4d4d4d;">Menu</q-title>
          <q-menu>
            <q-list>
              <q-item clickable v-ripple>
                <q-item-section>Çocuk Kitapları</q-item-section>
                <q-menu anchor="top right">
                  <q-list>
                    <q-item clickable v-ripple>
                      <q-item-section>0-6 Yaş</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>7-12 Yaş</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>13-18 Yaş</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Edebiyat Kitapları</q-item-section>
                <q-menu anchor="top right">
                  <q-list>
                    <q-item clickable v-ripple>
                      <q-item-section>Çağdaş Türk Edebiyatı</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Dünya Edebiyatı</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Gençlik Edebiyatı</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Klasik Türk Edebiyatı</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Şiir</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Dünya Klasikleri TOP 50</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Eğitim ve Okula Yardımcı Kitaplar</q-item-section>
                <q-menu anchor="top right">
                  <q-list>
                    <q-item clickable v-ripple>
                      <q-item-section>Okul Öncesi Eğitim</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>İlköğretim Yardımcı Kitaplar</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Lise Yardımcı Kitaplar</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Üniversite Yardımcı Kitaplar</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Gezi ve Rehber Kitapları</q-item-section>
                <q-menu anchor="top right">
                  <q-list>
                    <q-item clickable v-ripple>
                      <q-item-section>Gezi Rehberi Kitapları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Kent Rehberleri</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Yurt Dışı Gezi Rehberleri</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Türkiye Gezi Rehberleri</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Hobi & Oyuncak</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Kırtasiye</q-item-section>
                <q-menu anchor="top right">
                  <q-list>
                    <q-item clickable v-ripple>
                      <q-item-section>Defterler</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Ajanda Takvim ve Planlayıcılar</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Kalem Kutuları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Kalemtraşlar</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Kalem Uçları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Kalemler</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Kitap Ayracı</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Kitap Kapları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Kitaplıklar</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Not Defterleri</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Okul Çantaları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Okul Öncesi Eğitim</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Sulu Boya Önlükleri</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Okul Setleri</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Okul Sırt Çantaları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Mataralar</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>KPSS Kitapları</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Psikolojik Kitaplar</q-item-section>
                <q-menu anchor="top right">
                  <q-list>
                    <q-item clickable v-ripple>
                      <q-item-section>Din Psikolojisi Kitapları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Eğitim Psikolojisik Kitapları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Genel Psikoloji Kitapları</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>Psikolojik Araştırma Teknikleri Kitapları</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Sağlık Kitapları</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Tarih Kitapları</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Tüm kategoriler</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-input
          v-model="inputValue"
          filled
          dense
          placeholder="Aradığınız ürünün adını yazınız."
          
          style="width: 600px; margin-left: 50px; margin-right: 30px;" >

          <template v-slot:prepend>
            <q-icon name="search" color="red-14" />
          </template>
        </q-input>

        
        <q-btn class="login-box">
          <q-icon name="person" color="red-14"  />
          <q-title class="login-title" style="color: #e30613;">GİRİŞ YAP</q-title>
        </q-btn>

        <q-btn class="singup-box" >
          <q-icon name="person_add" color="red-14" />
          <q-title class="singup-title" style="color: #e30613;">ÜYE OL</q-title>
        </q-btn>

        <q-btn class="shopping">
          <q-icon name="shopping_cart" color="red-14" />
          <q-title class="shopping-cart-title" style="color: #e30613;">SEPET</q-title>
          <q-badge color="red-14" floating>0</q-badge>
        </q-btn>
      
      </q-toolbar>
      <q-banner class="custom-banner" >
        <q-item style="color: #585856;" class="custom-items">
          <q-item-section class="custom-titles">EDEBİYAT KİTAPLARI</q-item-section>
          <q-item-section class="custom-titles">KIRTASİYE</q-item-section>
          <q-item-section class="custom-titles">OKULA YARDIMCI</q-item-section>
          <q-item-section class="custom-titles">OYUNCAK</q-item-section>
          <q-item-section class="custom-titles">SINAVLARA HAZIRLIK</q-item-section>
          <q-item-section class="custom-titles">KİTAP TAVSİYELERİ</q-item-section>
          <q-item-section class="custom-titles">TÜM KAMPANYALAR</q-item-section>
          <q-item-section style="color: #e30613;">FIRSAT ÜRÜNLERİ</q-item-section>
        </q-item>
      </q-banner>
    </q-header> 
    
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  
  data () {
    return {
      inputValue: ''
    }
  },
})
</script>

<style scoped lang="scss">
.custom-titles {
  border-right: 2px solid #a2a2a2;
 margin: 20px;
}

.custom-items {
  font-size: 15px;
  color: #585856;
  display: flex;
  justify-content: space-around; 
  align-items: center; 
} 
.custom-banner {
  background-color: #E6E6E6;
  font-family: "hinted-subset-AvenirNextLTPro-Demi";

}

.custom-toolbar {
    background-color: #fff;
    font-family: "hinted-subset-AvenirNextLTPro-Demi";
    font-size: 15px;
    display: flex;
    justify-content: space-between; 
    align-items: center; 

  }

  .icon {
    margin-left: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 60px;
    width: 150px;
  }

  .menu {
    margin-left: 40px;
    height: 60px;
    width: 120px;
  }

  .menu-icon {
    margin-right: 5px;
    margin-left: 0px;
  }

  .menu-title {
    font-size: 15px;
    font-weight: bolder;
  }
  .shopping {
    margin-left: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 60px;
    width: 160px;
  }

  .shopping-cart-title {
    margin-left: 5px;
    font-size: 15px;
    font-weight: bolder;
  }
  
  .login-box {
    margin-left: 40px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 60px;
    width: 200px;
  }

  .login-title {
    margin-left: 5px;
    font-size: 15px;
    font-weight: bolder;
  }

  .singup-box {
    margin-left: 40px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 60px;
    width: 200px;
  }

  .singup-title {
    margin-left: 5px;
    font-size: 15px;
    font-weight: bolder;
  }
  
  
</style>