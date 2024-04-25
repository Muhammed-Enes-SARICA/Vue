
<template>
  <div>
    <!-- Header -->
    <header>
      <div class="menu-container">
        <button @click="toggleMenu" style="margin-top:20px ;" class="menu-button" v-if="isSmallScreen || isMenuOpen">Menu</button>
        <ul v-show="isMenuOpen" class="menu-items">
          <li class="Menu-li"><router-link to="/"><button class="btn">Ana Sayfa</button></router-link></li>
          <li class="Menu-li"><router-link to="/about"><button class="btn">Hakkımda</button></router-link></li>
          <!-- <li class="Menu-li"><router-link to="/technews">Teknoloji Haberleri</router-link></li> -->
          <li class="Menu-li"><router-link to="/contact"><button class="btn">İletişim</button></router-link></li>
        </ul>
        <ul class="menu-items-bigSize" v-if="!isSmallScreen && !isMenuOpen" >
          <li class="Menu-li"><router-link to="/"><button class="btn">Ana Sayfa</button></router-link></li>
          <li class="Menu-li"><router-link to="/about"><button class="btn">Hakkımda</button></router-link></li>
          <!-- <li class="Menu-li"><router-link to="/technews">Teknoloji Haberleri</router-link></li> -->
          <li class="Menu-li"><router-link to="/contact"><button class="btn">İletişim</button></router-link></li>
        </ul>

        <!-- <button v-if="!kullanici" class="loginButton" style="margin-left:80px; margin-top: 20px;"><router-link to="/loginPage">Giriş</router-link></button>
        <button v-else-if="kullanici==null" class="log-outButton" style="margin-left:5px; margin-top: 20px;" >Çıkış</button> -->

  
      </div>
    </header>

    <!-- Ana İçerik -->
  <main style="padding-bottom: 50px;">
    <router-view></router-view>
      
    </main>

    <!-- Footer -->
    <footer>
      <p>&copy; 2024 Mustafa KADI. Tüm hakları saklıdır.</p>
    </footer>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
// import getUser from './composables/getUser'
export default {
  setup(){

// const {kullanici}=getUser();
// return {kullanici}
},


  name: 'App',
  data() {
    return {
      isMenuOpen: false,
      isSmallScreen: false
    };
  },
  mounted() {
    this.checkScreenSize(); // İlk ekran boyutunu kontrol et
    window.addEventListener('resize', this.checkScreenSize); // Ekran boyutu değiştiğinde kontrol et
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize); // Komponent kaldırıldığında event listener'ı kaldır
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 768; // Belirli bir eşik değerinde ekranın küçük olup olmadığını kontrol et
    }
  }
}
</script>

<style >


/* .log-outButton{
  background-color: #f54d4d;
  border-radius: 8px;
  box-shadow: rgba(226, 7, 7, 0.2) 0 -25px 18px -14px inset,rgba(202, 58, 58, 0.15) 0 1px 2px,rgba(187, 44, 44, 0.15) 0 2px 4px,rgba(187, 44, 44, 0.15) 0 4px 8px,rgba(187, 44, 44, 0.15) 0 8px 16px,rgba(187, 44, 44, 0.15) 0 16px 32px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  max-width: 120px; 
  max-height: 50px;
} */

/* .log-outButton:hover {
  box-shadow: rgba(187, 18, 18, 0.35) 0 -25px 18px -14px inset,rgba(187, 44, 44, 0.25) 0 1px 2px,rgba(187, 44, 44, 0.25) 0 2px 4px,rgba(187, 44, 44, 0.25) 0 4px 8px,rgba(187, 44, 44, 0.25) 0 8px 16px,rgba(187, 44, 44, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
} */

/* .loginButton{
  background-color: #c2fbd7;
  border-radius: 8px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: rgb(3, 0, 0);
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  max-width: 120px; //Sabit genişlik 
max-height: 50px;
} */ 


/* .loginButton:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
} */

/* Genel stiller */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Yatay taşmayı engelle */
  min-width: 320px; /* Minimum genişlik */
}

/* Header stilleri */
header {

  background-color:rgb(29,27,49);
  color: #fff;
  padding: 10px;
  text-align: center;
}

.menu-container {
  display: flex;
  justify-content: center;
}

.menu-button {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.menu-items {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-items-bigSize {
  list-style: none;
  padding: 0;
  display: flex; /* Değişiklik: Dikeyden yatay düzene çevrildi */
  align-items: center; /* Değişiklik: Öğeleri dikeyde hizalamak için */
  
}

.menu-items li {
  margin-bottom: 10px;
}

.menu-items li a {
  color: #fff;
  text-decoration: none;
}

.Menu-li {
  display: inline;
  margin: 10px;
  position: relative;
  background-color: #18190c81;
  padding: 15px 20px;
  text-decoration: none;
  border-radius: 15px;
}

.Menu-li-bigSize {
  margin: 10px;
  position: relative;
  background-color: #18190c81;
  padding: 15px 20px;
  text-decoration: none;
  border-radius: 15px;
}

/* Ana içerik stilleri */
.hero {
  background-color: #5845965d;
  padding: 50px;
  text-align: center;
}

/* .btn {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
} */

.about,
.services,
.contact {
  padding: 20px;
}

main {
  min-height: calc(100vh - 300px); /* Ana içerik minimum yükseklik */
}


/* CSS */
.btn {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn :hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}

@media (min-width: 768px) {
  .btn {
    padding: 0 2.6rem;
  }
}


/* Footer stilleri */
footer {
  background-color: rgb(29,27,49);
  color: #fff;
  text-align: center;
  padding: 15px;
  bottom: 0;
  width: 100%;
  height:30px ;
  position: fixed ;
  
}

</style>
