<template>
  <div class="page w-screen h-screen overflow-hidden">
    <div class="
        page__inner
        w-full
        h-full
        flex flex-row
        justify-center
        items-center
        overflow-hidden
      ">
      <div class="h-full flex justify-center flex-col items-center">
        <h1 class="text-4xl font-bold">Register new account</h1>

        <div class="py-4">
          <input type="text" v-model="email" placeholder="email" class="email input input-bordered input-md btn-wide" />
        </div>
        <div class="py-4">
          <input type="password" v-model="password" placeholder="Password"
            class="input input-bordered input-md btn-wide" />
        </div>
        <div class="py-4">
          <button class="btn btn-primary btn-md btn-wide" @click="checkEmailValidity()">Register</button>
        </div>

        <div class="py-4">
          <!-- sign in with Google button -->
          <button class="btn btn-primary btn-md btn-wide" @click="googleSignIn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo"
              class="w-6 h-6" />
            Sign in with Google
          </button>
        </div>
        <div class="py-2">
          <router-link to="/login" class="text-blue-500">Already have an account? Login here</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { app, auth, signInWithPopup, provider, createUserWithEmailAndPassword } from '../firebaseConfig'
import { ErrorToast, SuccessToast } from '../components/Toasts.js'

export default {
  data() {
    return {
      email: '',
      password: '',
      user: null
    }
  },
  methods: {
    googleSignIn() {
      signInWithPopup(auth, provider).then((result) => {
        this.user = result.user;
        this.$router.push('/')
      }).catch((error) => {
        ErrorToast("Error signing in with Google")

      });
    },
    createUserWithEmailAndPassword() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user;
          SuccessToast("Sign up successfull");
          this.$router.push('/')
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            ErrorToast('Email already in use')

          }
          else if (error.code === 'auth/invalid-email') {
            ErrorToast('Invalid email')
          }
          else if (error.code === 'auth/weak-password') {
            ErrorToast('Weak password')
          }
          else if (error.code === 'auth/wrong-password') {
            ErrorToast('Wrong password')
          }
          else if (error.code === 'auth/user-not-found') {
            ErrorToast('User not found')
          }
          else if (error.code === 'auth/too-many-requests') {
            ErrorToast('Too many requests')
          }
          else {
            ErrorToast('Something went wrong')
          }
        });

    },
    checkEmailValidity() {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (this.email === '') {
        ErrorToast('Email cannot be empty')
      }
      else if (this.password === '') {
        ErrorToast('Password cannot be empty')
      }
      else if (!validRegex.test(this.email)) {
        ErrorToast('Invalid email')
      }
      else{
        fetch(`https://emailverification.whoisxmlapi.com/api/v2?apiKey=${import.meta.env.VITE_VERIFY_EMAIL_API_KEY}&emailAddress=${this.email}`)
          .then(response => response.json())
          .then(data => {
            if (data.smtpCheck === 'true') {
              this.createUserWithEmailAndPassword()
            }
            else {
              ErrorToast('Invalid email')
            }
          })
      }
    },

  }
}

</script>