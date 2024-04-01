// TechNews.vue

<template>
  <div class="tech-news">
    <h1>Haberler ve Gelişmeler</h1>
    <div v-for="newsItem in techNews" :key="newsItem.id" class="news-item">
      <h2>{{ newsItem.title }}</h2>
      <p>{{ newsItem.description }}</p>
      <p class="date">{{ newsItem.date }}</p>
      <a :href="newsItem.link">Devamını Oku</a>
    </div>
  </div>
</template>

<script>
import db from '../firebase/firebase.js';

export default {
  data() {
    return {
      techNews: []
    };
  },
  mounted() {
    this.fetchTechNews();
  },
  methods: {
    async fetchTechNews() {
      try {
        const snapshot = await db.collection('techNews').get();
        snapshot.forEach(doc => {
          this.techNews.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error('Haberleri alırken bir hata oluştu:', error);
      }
    }
  }
};
</script>

<style scoped>
.tech-news {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.news-item {
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}

.date {
  font-style: italic;
  color: #888;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
