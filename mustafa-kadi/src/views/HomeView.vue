<template>
  <div>
    <section class="fullPage">
      <!-- İçerik alanını saran div elementi -->
      <div class="content-wrapper">
        <section class="hero">
          <img src="../assets/ContactAssets/MustafaKadı.png" alt="Logo" style="display:block; margin: auto; padding-top: 20px; width: 200px;" /> <!-- logo burada -->
          <h1 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: white;">Personal İnformation</h1>
          <h2 style="color: white;">Mustafa KADI</h2>
          <p style="padding-bottom: 15px; color: white;">Information Technology Responsible</p>
          <router-link to="/about" class="btn" >Hakkımda</router-link>
        </section>
        <section class="about">
          <h2>HAKKIMDA</h2>
          <p>Windows Server , Sanallaştırma , DHCP Kurulumu Ve Yönetimi , Active Directory
          Kurulumu ve Yönetimi, Network Yönetimi , Access Point Kurulumu ve Yönetimi , Sonicwall ve Fortigate Firewall Kurulumu ve Yönetimi , 5651 Firewall Anaylzer
          Kurulumu ve Yönetimi , Kullanıcı Windows , MsOfis , Çizim Programlarını kurmak ve
          problemlerini çözmek.İş Ortamında ekip çalışmasına uyumlu, disiplinli, düzenli
          biriyim. Çözüm odaklı çalışma prensibine sahibim. İşimle ilgili sorun olduğunda
          mutlaka onu çözüme ulaştırırım.</p>
        </section>
        <section class="services">
          <h2>BECERİLER</h2>
          <ul>
            <li>Ağ Yönetimi ve Güvenliği</li>
            <li>Windows Server</li>
            <li>Sistem Yönetimi</li>
            <li>Yedekleme ve Kurtarma Çözümler</li>
            <li>Bilgisayar Donanımı</li>
          </ul>
        </section>
        <section class="contact">
          <h2>İLETİŞİM</h2>
          <p>Benimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.</p>
          <address>
            E-posta: mustafa.kadi@mustafakadi.com.tr<br>
            Telefon: +90 0536 035 21 76<br>
          </address>
        </section>
      </div>
    </section>
  </div>
  <img src="../assets/ContactAssets/topographi.gif" alt="Your GIF" class="gif">
</template>

<script>
</script>
<style scoped>
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
  background-color: #344b5c;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.menu-container {
  display: flex;
  justify-content: center;
}

.menu-button {
  cursor: pointer;
  background-color: #3c8171; /* Yeşil */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 12px;
  transition-duration: 0.4s;
  border-radius: 8px;
  max-width: 120px; /* Sabit genişlik */
  max-height: 50px; /* Sabit yükseklik */
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
  background-image: url('../assets/ContactAssets/ArkaPlan.png'); /* Arka plan resmi */
  background-size: cover; /* Arka plan resmi boyutlandırma */
  background-position: center; /* Arka plan resmi konumlandırma */
  padding: 50px;
  text-align: center;
  position: relative;
  
}

.fullPage{
  background-image: url('../assets/ContactAssets/ArkaPlan.png'); /* Arka plan resmi */
  background-size: cover; /* Arka plan resmi boyutlandırma */
  background-position: center; /* Arka plan resmi konumlandırma */
  position: relative; /* Sayfanın her zaman altında kalacak şekilde sabitledik */
  bottom: 0;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.btn {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
}

/* @keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-100px); }
  75%{transform: translateY(100px);}
  100% { transform: translateY(0); }
} */

/* .gif {
  height: 200px;
  width: 200px;
  position: relative; /* Değişiklik: Gif'in sabit kalması için 
  top: 50%; /* Değişiklik: Yüksekliğin yarısı kadar yukarıya yerleştir 
  right: 10%; /* Değişiklik: Sağdan 10% içeri 
  transform: translate(0, -50%);
  z-index: -1;
   animation: bounce 3s infinite; 
}*/

.about-content {
  max-width: 35%; /* Hakkımda metninin genişliğini ayarla */
  float: left; /* Metni sola yasla */
}

.gif {
  height: 200px;
  width: 200px;
  position: fixed; /* Gif'in sabit kalması için */
  top: 50%; /* Yüksekliğin yarısı kadar yukarıya yerleştir */
  right: 20%; /* Sağdan boşluk bırak */
  padding: 15px;
}


.about,
.services,
.contact {
  padding: 20px;
  color: white;
  max-width: 1000px;
}

main {
  min-height: calc(100vh - 300px); /* Ana içerik minimum yükseklik */
}

/* Footer stilleri */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-end-end-radius: 0px;
}
</style>
