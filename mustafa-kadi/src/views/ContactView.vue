<template>
  <div class="container">
    <img src="../assets/ContactAssets/Contact.jpg" alt="Arkaplan Resmi" class="arkaplan-resmi">
    <img src="../assets/ContactAssets/Sarmal.gif" alt="Ortadaki Gif" class="gif">
    <div class="linkli-resimler">
      <a href="#" class="kucuk-resim-link"><img src="../assets/ContactAssets/İnstagram.png" alt="İnstagram"></a>
      <a href="#" class="kucuk-resim-link"><img src="../assets/ContactAssets/Linkedn.png" alt="Linkedin"></a>
    </div>
    <div class="iletisim-bilgileri">
      <h2>Phone</h2>
      <p class="kucuk-font">+90 0536 615 53 69</p>
      <h2>Email</h2>
      <p class="kucuk-font">mustafa.kadi@kumsan.com.tr</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>

<style>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.arkaplan-resmi {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.gif {
  height: 300px;
  width: 300px;
  position: absolute;
  top: 35%;
  left: 25%;
  transform: translate(-50%, -50%);
}

.linkli-resimler {
  position: absolute;
  bottom: 10px; 
  left: 55%;
  transform: translateX(-50%);
}

.iletisim-bilgileri {
  position: absolute;
  top: 35%;
  left: 65%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: aliceblue;
  font-size: 35px;
}

.kucuk-font {
  font-size: 20px;
}

.kucuk-resim-link {
  display: inline-block;
  margin: 0 10px; 
}

.kucuk-resim-link img {
  width: 50px; 
  height: auto;
}
</style>
