<template>
  <q-page class="row items-center justify-evenly">
      <div style="background-color: #fff;">
          <div class="row items-center">
            <div class="col" style="background-color: #fff; ">
              <q-btn class="d-flex flex-column align-center" >
                <div class="d-flex align-center">
                  <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon1.svg" alt="Top 100">
                  <div class="text-h6">Top 100</div>
                </div>
              </q-btn>
              <q-btn class="d-flex flex-column align-center">
                <div class="d-flex align-center">
                  <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon2.svg" alt="Manga">
                  <div class="text-h6">Manga</div>
                </div>
              </q-btn>
              <q-btn class="d-flex flex-column align-center">
                <div class="d-flex align-center">
                  <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon3.svg" alt="Bilim Kurgu">
                  <div class="text-h6">Bilim Kurgu</div>
                </div>
              </q-btn>
              <q-btn class="d-flex flex-column align-center">
                <div class="d-flex align-center">
                  <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon4.svg" alt="Harry Potter">
                  <div class="text-h6">Harry Potter</div>
                </div>
              </q-btn>
              <q-btn class="d-flex flex-column align-center">
                <div class="d-flex align-center">
                  <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon5.svg" alt="Suç ve Gizem">
                  <div class="text-h6">Suç ve Gizem</div>
                </div>
              </q-btn>
              <q-btn class="d-flex flex-column align-center">
                <div class="d-flex align-center">
                  <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon6.svg" alt="Fantastik">
                  <div class="text-h6">Fantastik</div>
                </div>
              </q-btn>
              <q-btn class="d-flex flex-column align-center">
                <div class="d-flex align-center">
                  <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon7.svg" alt="Defter">
                  <div class="text-h6">Defter</div>
                </div>
              </q-btn>
              <q-btn class="d-flex flex-column align-center">
                <div class="d-flex align-center">
                  <img src="https://www.bkmkitap.com/Data/EditorFiles/icon/icon8.svg" alt="Aksesuar" style="vertical-align: middle;">
                  <div class="text-h6" style="margin-top: 30px;">Aksesuar</div>
                </div>
              </q-btn>
            </div>
          </div>
        </div>
  </q-page>
</template>

<script  lang="ts">
import { ref } from 'vue';


export default {
  
  
};

</script>

<style scoped lang="scss">

.row {
  display: flex;
  
  width: 100%;
  background-color: #fff;
}

.text-h6 { 
  font-size: 13px; 
  font-family: "hinted-subset-AvenirNextLTPro-Demi"; 
  padding: 10px 0 0 0;
  color: #4d4d4d;
}

.d-flex {
  justify-content: center;
  margin: 5px;
}

.d-flex img {
  margin-bottom: 8px;
}

.col {
  border-bottom: 2px solid #e5e5e5;
  border-top: 2px solid #e5e5e5;
  border-left: none;
  border-right: none;
}

</style>