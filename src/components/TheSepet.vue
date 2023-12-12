<template>
  <div style="display: flex;">
    <div style="margin-top: 50px; height: 360px; width: 880px;margin-left: 50px; " class="display:flex">
    <div class="row" >
      <div class="col-2" style="border-left: solid 1px;border-bottom: solid 1px;border-top: solid 1px; height: 30px;">Ürün</div>
      <div class="col-4" style="border-bottom: solid 1px;border-top: solid 1px;">Ürün adı</div>
      <div class="col-3" style="border-bottom: solid 1px;border-top: solid 1px;">Miktar</div>
      <div class="col-2" style="border-bottom: solid 1px;border-top: solid 1px;">Toplam Tutar</div>
      <div class="col-1" style="border-bottom: solid 1px;border-top: solid 1px;border-right: solid 1px;">Sil</div>
      
    </div>
    <div class="row" >
      <div class="col-2" style="margin-top: 30px;"><img src="https://cdn.bkmkitap.com/hayvan-ciftligi-513890-9499723-51-K.jpg" height="126px" width="90px" alt=""></div>
      <div class="col-4" >
        <p style="margin-top: 30px;font-size: 14px;"><b>Hayvan Çiftliği</b></p><br>
        <span style="color: brown;font-size: 10px;">İŞ BANKASI KÜLTÜR YAYINLARI</span><br>
        <span style="color: brown; font-size: 10px;">GEORGE ORWELL</span>
      </div>
      <div class="col-3" >
        <div class="q-pa-md" style="margin-top: 50px;">
          <q-input
          v-model.number="model"
          type="number"
          filled
          style="max-width: 50px"
          />
        </div>
      </div>
      <div class="col-2" >
        <div style="margin-top: 70px;">
          <span style="font-size: 14px;"><b>28,00 TL</b></span>
          <span style="font-size: 16px; color:#e4002b;"><b>    %35</b></span>
        </div>
        <q-button style="width: 100px;border-radius: 5px;color:white; background-color: #e4002b;;">
          18,20 TL
        </q-button>
      </div>
      <div class="col-1" style="margin-top: 80px;font-size: 10px;">
        <q-button>Kaldır</q-button>
      </div>
    </div>
  </div>
  <div style="margin-top:50px;height: 400px;width: 300px;border-top: solid 1px">
    <div id="salebox" style="border-right: 1px solid;border-left: solid 1px">
      <q-input  outlined placeholder="Kupon/Hediye Kartı Kodunuz" v-model="couponCode" style="display: flex;align-items: center; font-size: 11px; width: 200px;"></q-input>
      <q-btn @click="applyCoupon" class="small-button" label="Uygula"></q-btn>
    </div>
    <div style="width: 300px;display: flex; height: 40px;border-top: solid 1px;border-left: solid 1px;border-right: solid 1px">
      <p>Sepet Toplamı</p>
      <p style="justify-content:end; margin-left: 140px"><b>18,20 TL</b></p>
    </div>
    <div style="width: 300px; height: 40px;border-top: solid 1px;border-bottom: solid 1px;border-left: solid 1px;border-right: solid 1px">
      <p>Genel Toplamı</p>
      <p style="justify-content:end; margin-left: 140px"><b>18,20 TL</b></p>
    </div>
    <div style="text-align: center;font-size: 15px; height: 100px">Sepetinizde değişiklik yaptıysanız <br> <b>güncellemeyi unutmayın.</b> Ödeme <br> ve onay sayfasına kadar satın alma <br> işleminizi <b>iptal edebilirsiniz.</b></div>
    <div class="button" style="padding-top: 12px ; margin-left: 15px; text-align: center; background-color: #e30613;color: white; font-size: 19px; height: 50px;width: 260px;border: solid 1px">ÖDEMEYE GİT</div>
    <div class="button" style="margin-left: 15px;margin-top: 15px; text-align: center; background-color: white;color: #e30613; font-size: 19px; height: 30px;width: 260px;border: solid 1px">Sepeti Güncelle</div>
  </div>
</div>

</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(1)
    }
  }
}
</script>