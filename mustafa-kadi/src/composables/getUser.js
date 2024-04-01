import { ref } from 'vue'
import { auth } from '../firebase/firebase'

const kullanici = ref(null)

// auth nesnesinin doğru bir şekilde tanımlandığından emin olmak için bir kontrol yapın
if (auth) {
    auth.onAuthStateChanged((kullanici) => {
        kullanici.value = kullanici;
    })
}

const getUser = () => {
    return { kullanici }
}

export default getUser
