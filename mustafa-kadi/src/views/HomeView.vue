 
      <template>
        <div>
        <section class="hero">
        <section><img src="../assets/logo.png" alt="Logo" style="display:block; margin: auto;" /> <!-- logo burada -->
        </section>
        <h1 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Personal İnformation</h1>
        <h2>Mustafa KADI</h2>
        <p style="padding-bottom: 15px;">Information Technology Specialist</p>
        <router-link to="/about" class="btn">Hakkımda</router-link></section>
          
      
      <section class="about">
        <h2>Hakkımda</h2>
        <p>Biz şirketiniz için harika çözümler sunuyoruz.</p>
      </section>

      <section class="services">
        <h2>Çalışmalar</h2>
        <ul>
          <li>Web Tasarımı</li>
          <li>Web Geliştirme</li>
          <li>Mobil Uygulama Geliştirme</li>
          <li>Danışmanlık Hizmetleri</li>
        </ul>
      </section>

      <section class="contact">
        <h2>İletişim</h2>
        <p>Benimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.</p>
        <address>
          E-posta: mustafa.kadi@kumsan.com.tr<br>
          Telefon: xxxx xxx xxx<br>
          Adres: 123 Sokak, No: 4, Şehir, Ülke
        </address>
      </section>
        </div>
      </template>
      <style>
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
        background-color: #5845965d;
        padding: 50px;
        text-align: center;
      }
      
      .btn {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        text-decoration: none;
      }
      
      .about,
      .services,
      .contact {
        padding: 20px;
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