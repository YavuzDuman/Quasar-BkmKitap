<template>
  <div style="display: flex;">
    <div style="margin-left: 100px;height: 600px;width: 230px; border: 1px solid;">
      <p class="clickable-paragraph" style="background-color: red; font-size: 21px;width: 230px; text-align: center;color: white;padding-top: 5px;padding-bottom:5px ;">Hesabım</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Siparişlerim</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Kişisel Bilgilerim</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;;">Listelerim</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Hediye Çeklerim</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Puanlarım</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Adres Bilgilerim</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Mesajlarım</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Fiyat Alarm Listem</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Stok Alarm Listem</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Şifremi Değiştir</p>
      <p class="clickable-paragraph" style="padding-top: 10px;font-size: 14px;margin-left: 15px;">Çıkış Yap</p>
    </div>
    <div style="margin-left: 4px;">
      <p style="height: 70px;width: 1400px; border-bottom: 1px solid;">Sipariş Listem</p>
      <div style="height: 60px;width: 1000px; border-bottom: 1px solid;display: flex;">
        <p style="font-size: 12px;">Sayın <b>YAVUZ DUMAN</b> Bugüne Kadar Verdiğiniz Tüm Siparişler Aşağıda Bulunmaktadır.</p>
        <q-button style="justify-content: end;background-color: #5c5c5c;margin-left: 200px;color: white;cursor: pointer;height: 40px;">Sipariş Listem</q-button>
        <q-button style="background-color: white;border: none;cursor: pointer;">Geçmiş Siparişlerim</q-button>
      </div>
      <q-title style="height: 70px;width: 1400px;font-size: 12px;"><b>Henüz hiç siparişiniz bulunmamaktadır...!!!</b></q-title>
    </div>    
  </div> 
</template>

<script>

</script>

<style scoped>
.clickable-paragraph {
  cursor: pointer;
  color: black;
}
</style>
