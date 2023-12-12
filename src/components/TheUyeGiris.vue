<template>
  <q-component class="login-comp">
    <q-container class="q-pa-md">
      <q-card class="q-ma-auto">
        <q-card-section class="text-center">
          <img src="https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-left.svg" class="q-ml-md" /> 
          <h5 class="text-h5 q-mt-md" style="display: inline-block; max-width: 100%;"> Üye Girişi </h5>
          <img src="https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-right.svg" class="q-ml-md" />
        </q-card-section>

        <q-card-section class="q-pt-lg">
          <q-form>
            <q-input class="mail-box" filled v-model="email" type="email" label="E-posta" />
            <q-input class="password-box" filled v-model="password" label="Şifre" type="password" />
            <q-checkbox class="check-box" v-model="rememberMe" label="Beni Hatırla" />
            <q-btn class="loginButton" label="Giriş Yap" color="red-14" />
            <q-btn class="reset" label="Şifremi Unuttum" color="red-14" />
          </q-form>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section class="q-pt-lg">
          <q-btn class="Google-button" label="Google ile Bağlan" />
        </q-card-section>
      </q-card>
    </q-container>  
  </q-component>
</template>

<style setup lang="scss">
.login-comp {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "hinted-subset-AvenirNextLTPro-Demi";
}

.q-ml-md {
  margin-left: 20px;
  margin-right: 20px;
}

.q-pt-lg {
  width: 500px;
  margin-bottom: 50px;
}

.mail-box {
  width: 100%;
  margin-bottom: 20px;
}

.password-box {
  width: 100%;
  margin-bottom: 20px;
}

.check-box {
  margin-bottom: 20px;
}

.loginButton {
  margin-left: 40px;
  
}

.reset {
  margin-left: 40px;
}

.Google-button {
  width: 100%;
  margin-bottom: 20px;
  background-color: rgba(155, 155, 155, 0.267);
  font-weight: 500;
}


</style>


<script lang="ts">
import { ref } from 'vue';
export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    };
  },
};

</script>