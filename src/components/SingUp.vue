<template>
    <q-component class="sing-up">
      <div class="q-pa-md">
          <div class="text-center q-mb-md q-mb-lg-md">
          <img src="https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-left.svg" class="q-ml-md" /> 
          <h5 class="text-h5 q-mt-md" style="display: inline-block; max-width: 100%;">Üye Ol</h5>
          <img src="https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-right.svg" class="q-ml-md" />
          </div>
      </div>

      <div class="container">
        <q-card flat bordered class="my-card ">

            <q-input filled v-model="ad" type="text" label="Ad" class="ad-box"/>
            <q-input filled v-model="soyad" type="text" label="Soyad" class="soyad-box"/>
            <q-input filled v-model="email" type="email" label="E-posta" class="mail-box"/>
            <q-input filled v-model="password1" type="password" label="Şifre" placeholder="*********" class="sifre-box"/>
            <q-input filled v-model="password2" type="password" label="Şifre Tekrar" placeholder="*********" dense class="sifre-box"/>
            <q-checkbox v-model="val" label="Kullanım Koşulları ve Gizlilik Politikası'nı okudum, kabul ediyorum." class="check-box"/>
            <q-btn label="Üye Ol" color="red-14" class="btn-box" />
        </q-card>

        <q-card class="image-card" style="display: inline-block; " >
          <q-img src="https://cdn.bkmkitap.com/Data/EditorFiles/bkmkitap/uye-kayit-mobil-uygulamamizi-indirin.jpg" >
            
          </q-img>
        </q-card>
        
        
      </div>
    </q-component>

</template>


<style scoped lang="scss">

.q-ml-md {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 15px;
}

.text-h5 { 
  font-size: 2.75rem; /* Adjust the font size as needed */
  font-family: "hinted-subset-AvenirNextLTPro-Demi";
  margin-top: 50px;
  margin-left: 10px;
}

.container {
  position: relative;
  width: 100%;
  max-width: 1042px; /* Set a max-width if you want */
  margin: 0 auto; /* Center it */
}

.my-card{
  height: 500px;
  width: 400px;
  box-shadow: inset;
  border: 5px solid #e30613;
  margin-left: 100px;
  margin-top: 50px;
}

.ad-box{
  margin: 10px;
  width: 360px;
}
.soyad-box{
  margin: 10px;
  width: 360px;
}
.mail-box{
  margin: 10px;
  width: 360px;
}
.sifre-box{
  margin: 10px;
  width: 360px;
}
.check-box{
  margin: 10px;
}

.btn-box{
  margin-left: 150px;
  margin-top: 10px;
}

.image-card{
  height: 240px;
  width: 400px;
  margin-inline-start: 600px;
  margin-top: -500px;
  margin-bottom: 10px;
  border-radius: 10%;
}

.sing-up{
  background-color: #E6E6E6;
}

</style>

<script lang="ts">
import { ref } from 'vue'
  export default {
    data() {
      return {
        iconUrl: "https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-right.svg",
        iconUrl2: "https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-left.svg",
        val: ref(true),
        password1: "", // Add a default value for the password property
        password2: "", // Add a default value for the password property
        ad: "",
        soyad: "",
        email: "",

      };
    },
  };

</script>
