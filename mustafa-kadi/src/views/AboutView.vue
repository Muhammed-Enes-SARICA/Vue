<template>
  <div class="about">
    <div class="container">
      <div class="profile">
        <img :src="profilePicture" alt="Profile Picture" class="profile-picture">
        <div class="profile-info">
          <h1 class="profile-name">{{ fullName }}</h1>
          <p class="profile-description">{{ occupation }}</p>
        </div>
      </div>
      <div class="bio" style="margin-top: 20px;">
        <h2 class="section-title">Hakkımda</h2>
        <p class="bio-text">
          {{ aboutText }}
        </p>
        <p class="bio-text">
          {{ additionalInfo }}
        </p>
        <button @click="toggleAdditionalInfo" class="toggle-button">{{ toggleButtonText }}</button>
      </div>
    </div>
    <div v-if="showAdditionalInfo" class="container skills">
      <h2 class="section-title">Yeteneklerim</h2>
      <div v-for="(skill, index) in skills" :key="index" class="skill">
        <div class="skill-info">
          <!-- Ikonları img etiketi içinde görüntüleyin -->
          <div class="skill-icon"><img :src="skill.icon" alt="Skill Icon" class="skill-icon"></div>
          <div class="skill-details">
            <p class="skill-name">{{ skill.name }}</p>
            <p class="skill-level-text">{{ skill.level }}%</p>
          </div>
        </div>
        <div class="progress-circle-container">
          <div class="progress-circle" :style="{ transform: 'scale(' + (skill.level / 100) + ')' }">
            <div class="percentage">{{ skill.level }}%</div>
          </div>
        </div>
        <div class="work-area">
          <p class="work-are-"><strong>Çalışma Alanı:</strong> {{ skill.workArea }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      fullName: 'John Doe',
      occupation: 'Full Stack Developer',
      profilePicture: require('@/assets/logo.png'),
      aboutText: `
        Merhaba, ben John Doe. Uzun yıllardır yazılım geliştirme alanında çalışıyorum ve çeşitli projelerde deneyim kazandım.
        Frontend ve backend teknolojilerinde uzmanlaşmış bir tam yığın geliştiriciyim ve yeni teknolojilere olan merakım hiç bitmiyor.
      `,
      additionalInfo: `
        Kullanıcı dostu arayüzler oluşturmayı seviyorum ve modern web uygulamaları geliştirmek için sürekli yeni yöntemler araştırıyorum.
        Aynı zamanda ekip çalışmasına önem veriyor ve projelerde takım ruhunu güçlendirmek için çaba sarf ediyorum.
      `,
      showAdditionalInfo: false,
      skills: [
        { name: 'HTML', level: 80, icon: require('@/assets/logo.png'), workArea: 'Web geliştirme alanında uzmanlaşmış bir tam yığın geliştirici olarak, HTML, CSS ve JavaScript teknolojileriyle modern ve kullanıcı dostu arayüzler oluşturuyorum. Ayrıca Vue.js gibi frameworkleri kullanarak dinamik web uygulamaları geliştiriyorum. Backend tarafında ise Node.js ve Express.js gibi teknolojilerle APIler oluşturuyor ve veritabanı yönetimi yapıyorum. Proje yönetimi ve ekip çalışması konularında da deneyim sahibiyim ve projelerde takım ruhunu güçlendirmeye önem veriyorum' },
        { name: 'CSS', level: 75, icon: require('@/assets/logo1.png'), workArea: 'Web Development' },
        { name: 'JavaScript', level: 85, icon: require('@/assets/logo2.png'), workArea: 'Web Development' },
        { name: 'Vue.js', level: 90, icon: require('@/assets/logo3.png'), workArea: 'Web Development' }
      ]
    };
  },
  computed: {
    toggleButtonText() {
      return this.showAdditionalInfo ? 'Daha Az Göster' : 'Daha Fazla Göster';
    }
  },
  methods: {
    toggleAdditionalInfo() {
      this.showAdditionalInfo = !this.showAdditionalInfo;
    }
  }
}
</script>

<style scoped>
.about {
  background-color: #f9f9f9;
  padding: 50px 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column; /* Yataydan dikeye sıralama */
}

.profile {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-info {
  text-align: left;
}

.profile-name {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.profile-description {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 20px;
}

.bio {
  margin-top: 50px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 30px;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.toggle-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 20px;
}

.toggle-button:hover {
  background-color: #696262;
}

.skills {
  margin-top: 30px;
  margin-bottom: 80px;
  margin-left: 170px;
}

.skill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px; /* Yetenekler arasında 35px boşluk bırakır */
}

.skill-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.skill-icon {
  width: 30px;
  height: 30px;
  background-color: #ccc;
  margin-right: 20px;
}

.skill-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 30px;
}

.skill-level-text {
  margin-left: 10px;
  font-size: 1.1rem;
}

.progress-circle-container {
  position: static;
  border-radius: 50%;
  border: 4px solid transparent;
  width: 100px; /* Dış çemberin boyutunu ayarlayın */
  height: 100px; /* Dış çemberin boyutunu ayarlayın */
}

.progress-circle {
  display: block;
  position: static;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  border-radius: 50%;
  border: 4px solid #333;
  box-sizing: border-box;
  width: 100px; /* Dış çemberin boyutunu ayarlayın */
  height: 100px;
}

.about.dark .progress-circle {
  border-color: #fff; /* Koyu arka plan için iç çerçeve rengi */
}

.about.light .progress-circle {
  border-color: #333; /* Açık arka plan için iç çerçeve rengi */
}

.progress-circle .percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333; /* Yüzdelik kısmın rengi */
  font-weight: bold; /* Kalınlaştırılmış font */
}

.progress-circle:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: rgb(94, 94, 4); /* Dolu kısmın rengi */
  box-sizing: border-box;
  animation: rotateCircle linear 2s infinite; /* Animasyonu başlat */
}

@keyframes rotateCircle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg); /* 360 derece dönme */
  }
}

.work-area {
  flex-grow: 1;
  margin-left: 20px; /* Çalışma alanı bilgisini sağ tarafta göstermek için sol boşluk bırakır */
}
.work-area-text {

  font-size: 1rem;
  max-width: 300px; /* Çalışma alanı metninin maksimum genişliğini ayarlar */
  overflow: hidden; /* Taşan metni gizler */
  text-overflow: ellipsis; /* Taşan metni üç nokta (...) ile keser */
  white-space: nowrap; /* Metnin satır atlamasını engeller */
}
footer {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
        border-end-end-radius: 0px;
        position: absolute;
        bottom: 0;
      }
</style>
