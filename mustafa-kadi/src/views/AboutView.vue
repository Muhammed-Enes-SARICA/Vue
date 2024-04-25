<template >
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
      fullName: 'Mustafa KADI',
      occupation: 'BT SORUMLUSU - IT RESPONSIBLE',
      profilePicture: require('@/assets/ContactAssets/MustafaKadı.png'),
      aboutText: `
      Ben Mustafa KADI. IT sektöründe geniş bir deneyime sahip bir profesyonelim. 
      Windows Server, Sanallaştırma, DHCP Kurulumu ve Yönetimi, Active Directory Kurulumu ve Yönetimi, Network Yönetimi 
      ve daha fazlası dahil olmak üzere bir dizi teknik beceriye sahibim. İş ortamında ekip çalışmasına uyumlu, disiplinli 
      ve düzenli bir bireyim. Çözüm odaklı bir çalışma prensibine sahibim 
      ve işimle ilgili bir sorun olduğunda mutlaka onu çözüme ulaştırırım.
      `,
      additionalInfo: `
      Her türlü teknik zorluğun üstesinden gelme ve çözüm odaklı bir yaklaşımla işleri tamamlama yeteneğine sahibim..
      `,
      showAdditionalInfo: false,
      skills: [
        { name: 'Windows Server', level:100, icon: require('@/assets/ContactAssets/İcons/windowsserver.png'), workArea: ' Windows Server 2008, 2012, 2016 ve 2019’un kurulumu ve yönetimi konusunda deneyimliyim. Günlük kontrolleri ve yedekleme kontrollerini gerçekleştirme yeteneğine sahibim.' },
        { name: 'Ağ Yönetimi', level:100, icon: require('@/assets/ContactAssets/İcons/network.png'), workArea: 'Ağ oluşturma ve yönetme konusunda yetenekliyim. Ayrıca, Sonicwall ve Fortigate Firewall’ın kurulumu ve yönetimi konusunda deneyime sahibim. NAT, Access Rules, Security Servis, SSL VPN, VPN, Content Filter, Capture ATP ve DMZ gibi çeşitli güvenlik protokollerinin uygulanması ve yönetilmesi konusunda bilgiliyim.' },
        { name: 'Sanallaştırma', level: 100, icon: require('@/assets/ContactAssets/İcons/virtualization.png'), workArea: 'Vmware Esxi, Vmware Workstation ve Hyper-V gibi çeşitli sanallaştırma teknolojilerinde deneyimliyim. Sanal sistemlerin kurulumu ve yönetimini gerçekleştirebilirim.' },
        { name: 'Kurtarma Çözümleri', level: 100, icon: require('@/assets/ContactAssets/İcons/backup.png'), workArea: 'ArcServe Backup, Veeam Backup, Backup Exec ve Windows Server Backup gibi çeşitli yedekleme ve kurtarma çözümlerinde deneyimliyim. Bu, veri kaybı durumunda önemli bilgilerin hızlı ve etkili bir şekilde kurtarılmasını sağlar.' }
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

<style scoped >
.about {
  background-color: #f9f9f9;
  background-image: url('../assets/ContactAssets/ArkaPlan.png'); /* Arka plan resmi için URL'yi değiştirin */
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  position: relative;
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
  color: white;
}

.profile-name {
  font-size: 2.5rem;
  margin-bottom: 10px;
  
}

.profile-description {
  font-size: 1.5rem;
  color: #92e8f3;
  margin-bottom: 20px;
}

.bio {
  margin-top: 50px;
  color: white;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: white;
}

.bio-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.toggle-button {
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

.toggle-button:hover {
  background-color: #696262;
}

.skills {
  color: white;
  margin-top: 30px;
  margin-bottom: 80px;
  margin-left: 170px;
 
}

.skill {
  display: inherit;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px; /* Yetenekler arasında 35px boşluk bırakır */
}

.skill-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: white;
}

.skill-icon {
  width: 60px;
  height: 60px;
  background-color: #ccc;
  margin-right: 20px;
}

.skill-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 30px;
  padding: 15px;
  color: white;
  
}

.skill-level-text {
  margin-left: 10px;
  font-size: 1.1rem;
  color: white;
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
  border: 4px solid #000000;
  box-sizing: border-box;
  width: 100px; /* Dış çemberin boyutunu ayarlayın */
  height: 100px;
}

.about.dark .progress-circle {
  border-color: #000000; /* Koyu arka plan için iç çerçeve rengi */
}

.about.light .progress-circle {
  border-color: #9e9c9c; /* Açık arka plan için iç çerçeve rengi */
}

.progress-circle .percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f5f3f3; /* Yüzdelik kısmın rengi */
  font-weight: bold; /* Kalınlaştırılmış font */
}

.progress-circle:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: rgb(252, 252, 252); /* Dolu kısmın rengi */
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
        background-color: #4e0969;
        color: #fff;
        text-align: center;
        padding: 10px;
        border-end-end-radius: 0px;
        position: absolute;
        bottom: 0;
      }
</style>
