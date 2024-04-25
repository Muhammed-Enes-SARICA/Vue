<template>
  <div class="container">
    <img src="../assets/ContactAssets/Contact.jpg" alt="Arkaplan Resmi" class="arkaplan-resmi">
    <img src="../assets/ContactAssets/Sarmal.gif" alt="Ortadaki Gif" class="gif">
    
    <div class="linkli-resimler">
      <a href="https://www.instagram.com/mustfakadi/" class="kucuk-resim-link"><img src="../assets/ContactAssets/İnstagram.png" alt="İnstagram"></a>
      <a href="https://www.linkedin.com/in/mustafa-kadi/" class="kucuk-resim-link"><img src="../assets/ContactAssets/Linkedn.png" alt="Linkedin"></a>
    </div>
    <div class="iletisim-bilgileri">
      <div class="cerceve-resim">
        <img src="../assets/ContactAssets/cerceve.png" alt="Çerçeve Resmi">
      </div>
      <img src="../assets/ContactAssets/NameCollider.png" alt="name" class="collider">
      <h2>Phone</h2>
      <p class="kucuk-font">+90 0536 035 21 76</p>
      <h2>Email</h2>
      <p class="kucuk-font">mustafa.kadi@mustafakadi.com.tr</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>

<style>

.collider{
  left: 65%;
  padding-top:20px ;  
  width: 350px;
  height: 75px;
}

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
  display: block;
  height: 300px;
  width: 300px;
  position: absolute;
  top: 35%;
  left: 25%;
  transform: translate(-50%, -50%);
}

.linkli-resimler {
  position: absolute;
  bottom: 30px; 
  left: 15%;
  transform: translateX(-50%);
}

.iletisim-bilgileri {
  position: absolute;
  top: 40%;
  left: 65%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: aliceblue;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 150px; /* Adjust as needed based on frame width */
  margin: auto; 
}

.cerceve-resim img {
  width: 1400px;
  height: auto;
  /* Additional styles for positioning within the frame (adjust as needed): */
  position: absolute ;
  top: 70%;
  left: 65%;
  transform: translate(-50%, -50%); /* Center the image within the frame */
  display: block;
}

.kucuk-font {
  font-size: 15px;
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
