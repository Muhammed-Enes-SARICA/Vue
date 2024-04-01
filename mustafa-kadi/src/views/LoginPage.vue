<template>
    <main class="form-signin m-auto w-100">
        <div class="row">
            <div class="col-12">
                <img src="@/assets/google.png"  class="Google-icon"/>
                <button @click="handleLogin" class="btn btn-primary">ile giriş</button>
            </div>
        </div>
    </main>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router=useRouter()

        const auth = getAuth();
        const handleLogin = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then(sonuc => {
                //console.log(sonuc);
                router.push({name:'home'})
            })
            .catch(error => {
                console.error(error);
            });
        }
        return { handleLogin };
    },
}
</script>

<style scoped>
.Google-icon {
    width: 45px;
    height: 45px;
}
.form-signin {
    max-width: 330px;
    padding: 15px;
    padding-top: 140px;
}
</style>
