<template>
  <div class="fixed w-full z-[999]">
    <div class="navbar bg-base-100 border-zinc-900 border-b-2">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <router-link to="/">Homepage</router-link>
            </li>
            <li v-if="this.user">
              <router-link to="/addwebsite">Add your website</router-link>
            </li>
            <li v-if="!this.user">
              <router-link to="/login">Login</router-link>
            </li>
            <li v-if="!this.user">
              <router-link to="/register">Register</router-link>
            </li>
            <li v-if="this.user">
              <router-link to="/profile">Profile</router-link>
            </li>
            <li v-if="this.user" @click="logout()">
              <router-link to="#">Logout</router-link>
            </li>

          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <router-link to="/" class="btn btn-ghost normal-case text-xl">Inspolist</router-link>
      </div>
      <div class="navbar-end">
        <a href="https://www.producthunt.com/posts/inspolist?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-inspolist" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=365366&theme=neutral" alt="Inspolist - Get&#0032;website&#0032;inspiration&#0032;and&#0032;submit&#0032;your&#0032;own&#0033;&#0046; | Product Hunt" style="width: 250px; height: 36px;" width="200" height="36" /></a>
        <select class="select w-full max-w-xs" data-choose-theme>
  <option disabled selected>Theme</option>
  <option value="">Default</option>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="black">Black</option>
  <option value="purple">Purple</option>
  <option value="cyberpunk">Cyberpunk</option>
  <option value="wireframe">Wireframe</option>
  <option value="valentine">Valentine</option>
  <option value="coffee">Coffee</option>
</select>
      </div>
    </div>


  </div>
</template>

<script>
  import { themeChange } from 'theme-change'
import {auth} from '../firebaseConfig'
import { ErrorToast, SuccessToast } from './Toasts.js';

  export default {
    name: 'TitleBar',
    data(){
      return{
        user: auth.currentUser
      }
    },
    methods: {
      toggleTheme() {
        themeChange()

        if (localStorage.getItem('theme') === 'dark') {
          localStorage.setItem('theme', 'light')
        } else {
          localStorage.setItem('theme', 'dark')
        }
      },
      logout(){
        auth.signOut();
        SuccessToast("Logged out successfully");
        this.$router.push('/login')
      }
    },
    updated() {
      // check if user is logged in
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user
        } else {
          this.user = null
        }
      })
    },
    mounted() {
      themeChange(false)
      setInterval(() => {
        auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user
        } else {
          this.user = null
        }
      })
      }, 1000)
    },
  }


</script>